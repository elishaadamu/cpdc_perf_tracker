import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import * as d3 from "d3";

const CHART_COLORS = {
  "Tri-Cities Area": "#1565C0",
  "Richmond Region": "#2E7D32",
  "Total Urban Area": "#E65100",
};

const selectStyle = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #9E9E9E",
  backgroundColor: "#E3F2FD",
  cursor: "pointer",
  color: "#000000",
  fontWeight: "500",
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #666666",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        padding: "10px",
        fontSize: "12px",
      }}
    >
      <p style={{ margin: "0 0 5px 0", fontWeight: "bold", color: "#000000" }}>
        {label}
      </p>
      {payload.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "2px",
              marginRight: "5px",
            }}
          />
          <span style={{ color: "#000000" }}>
            {entry.name}: {(entry.value * 100).toFixed(2)}%
          </span>
        </div>
      ))}
    </div>
  );
};

const CongestionChart6 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedScope, setSelectedScope] = useState("Capita");
  const [hiddenSeries, setHiddenSeries] = useState(new Set());

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        const filteredData = parsedData.filter(
          (d) => d.Scope === selectedScope
        );

        const transformedData = filteredData.map((row) => ({
          year: row.Year,
          TCA_UA: parseFloat(row.TCA_UA),
          RR_UA: parseFloat(row.RR_UA),
          Total_UA: parseFloat(row.Total_UA),
        }));

        setData(transformedData.sort((a, b) => a.year - b.year));
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, selectedScope]);

  const handleLegendClick = (entry) => {
    setHiddenSeries((prev) => {
      const newHidden = new Set(prev);
      if (newHidden.has(entry.dataKey)) {
        newHidden.delete(entry.dataKey);
      } else {
        newHidden.add(entry.dataKey);
      }
      return newHidden;
    });
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label
          htmlFor="scopeSelect"
          style={{
            marginRight: "0.5rem",
            fontWeight: "500",
            color: "#000000",
          }}
        >
          Select Measure:
        </label>
        <select
          id="scopeSelect"
          value={selectedScope}
          onChange={(e) => setSelectedScope(e.target.value)}
          style={selectStyle}
        >
          {config.filters.Scope.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
            domain={[0, (dataMax) => Math.ceil(dataMax * 100) / 100]}
            tick={{ fontSize: 12 }} // Add this line to reduce tick font size
            label={{
              value: config.yAxis.label,
              angle: -90,
              position: "insideLeft",
              offset: -10,
              style: {
                textAnchor: "middle",
                fill: "#000000",
                fontWeight: "bold",
                fontSize: 14, // Add this line to reduce label font size
              },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend onClick={handleLegendClick} />
          {config.lines.map((line) => (
            <Line
              key={line.value}
              type="cardinal"
              dataKey={line.value}
              name={line.name}
              stroke={CHART_COLORS[line.name]}
              hide={hiddenSeries.has(line.value)}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CongestionChart6;
