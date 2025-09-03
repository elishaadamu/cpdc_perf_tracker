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
  "Colonial Heights",
];

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

const CongestionChart7 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
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
        const transformedData = parsedData.map((row) => ({
          year: row.year,
          ...config.locations.reduce(
            (acc, loc) => ({
              ...acc,
              [loc.value]: parseFloat(row[loc.value]) || 0,
            }),
            {}
          ),
        }));

        setData(transformedData.sort((a, b) => a.year - b.year));
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, config.locations]);

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
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            domain={["auto", "auto"]}
            style={{ fontSize: 12 }}
          />
          <YAxis
            tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
            tick={{ fontSize: 12 }}
            label={{
              value: config.yAxis.label,
              angle: -90,
              position: "insideLeft",
              offset: -10,
              style: {
                textAnchor: "middle",
                fill: "#000000",
                fontSize: 14,
                fontWeight: "bold",
              },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend onClick={handleLegendClick} />
          {config.locations.map((location) => (
            <Line
              key={location.value}
              type="cardinal"
              dataKey={location.value}
              name={location.name}
              strokeWidth={2}
              stroke={CHART_COLORS[location.name]}
              hide={hiddenSeries.has(location.value)}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CongestionChart7;
