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
  "MPO Region": "#1565C0",
  Hopewell: "#2E7D32",
  Petersburg: "#E65100",
  "Colonial Heights": "#6A1B9A",
  Chesterfield: "#C62828",
  Dinwiddie: "#00838F",
  "Prince George": "#F9A825",
};

const INITIAL_VISIBLE_LOCATIONS = [
  "MPO",
  "Hopewell",
  "Petersburg",
  "ColonialHeights",
];

const selectStyle = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #9E9E9E",
  backgroundColor: "#E3F2FD",
  cursor: "pointer",
  color: "#000000",
  fontWeight: "500",
};

const formatValue = (value, unit) => {
  if (unit === "Percent") {
    return `${(value * 100).toFixed(1)}%`;
  }
  return `${value.toFixed(1)} `;
};

const CustomTooltip = ({ active, payload, label, selectedValue }) => {
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
            {entry.name}: {formatValue(entry.value, selectedValue)}
          </span>
        </div>
      ))}
    </div>
  );
};

const CongestionChart5 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("Percent");
  const [selectedUnit, setSelectedUnit] = useState("Interstate");
  const [hiddenSeries, setHiddenSeries] = useState(
    new Set(
      config.locations
        .filter((loc) => !INITIAL_VISIBLE_LOCATIONS.includes(loc.value))
        .map((loc) => loc.value)
    )
  );

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        const filteredData = parsedData.filter(
          (d) => d.value === selectedUnit && d.Unit === selectedValue
        );

        const transformedData = filteredData.reduce((acc, row) => {
          const yearData = {
            year: row.Year,
          };
          config.locations.forEach((loc) => {
            yearData[loc.value] = parseFloat(row[loc.value]);
          });
          return [...acc, yearData];
        }, []);

        setData(transformedData.sort((a, b) => a.year - b.year));
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, selectedValue, selectedUnit]);

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
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <div>
          <label
            htmlFor="valueSelect"
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
              color: "#000000",
            }}
          >
            Select Measure:
          </label>
          <select
            id="valueSelect"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            style={selectStyle}
          >
            {config.filters.value.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="unitSelect"
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
              color: "#000000",
            }}
          >
            Select Road Type:
          </label>
          <select
            id="unitSelect"
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            style={selectStyle}
          >
            {config.filters.Unit.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            domain={selectedValue === "Percent" ? [0, 1] : ["auto", "auto"]}
            tickFormatter={(value) => formatValue(value, selectedValue)}
            tick={{ fontSize: 12 }} // Add this line to reduce tick font size
            label={{
              value: config.yAxis.label,
              angle: -90,
              offset: -10,
              position: "insideLeft",
              style: { textAnchor: "middle", fontSize: 14, fontWeight: "bold" },
            }}
          />
          <Tooltip
            content={(props) => (
              <CustomTooltip {...props} selectedValue={selectedValue} />
            )}
          />
          <Legend onClick={handleLegendClick} />
          {config.locations.map((location) => (
            <Line
              key={location.value}
              type="cardinal"
              dataKey={location.value}
              name={location.name}
              stroke={CHART_COLORS[location.name]}
              hide={hiddenSeries.has(location.value)}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CongestionChart5;
