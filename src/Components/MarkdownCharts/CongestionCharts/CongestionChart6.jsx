import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CHART_COLORS = {
  overall: "#1565C0", // blue
  DA: "#2E7D32", // green
  cp: "#E65100", // orange
  pt: "#6A1B9A", // purple
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label, seriesMap }) => {
  if (!active || !payload || payload.length === 0) return null;

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
      {payload.map((entry, idx) => (
        <div
          key={idx}
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
            {seriesMap[entry.dataKey] || entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const PavementChart = ({ dataPath, config }) => {
  const [data, setData] = useState([]);

  // build series mapping from config
  const seriesMap = config.lines.reduce((acc, line) => {
    acc[line.key] = line.name;
    return acc;
  }, {});

  useEffect(() => {
    fetch(dataPath)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = d3.csvParse(csvText);
        const numericData = parsed.map((d) => {
          const obj = { ...d, year: +d.year };
          config.lines.forEach((line) => {
            obj[line.key] = +d[line.key]; // force numeric
          });
          return obj;
        });
        setData(numericData);
      })
      .catch((err) => console.error("Error loading CSV:", err));
  }, [dataPath, config.lines]);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
        style={{ backgroundColor: "white" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
        <XAxis dataKey="year" tick={{ fill: "#000" }} />
        <YAxis
          tick={{ fill: "#000" }}
          label={{
            value: config.yAxis?.label || "",
            angle: -90,
            position: "insideLeft",
            style: { fontSize: 14, fontWeight: "bold" },
          }}
        />
        {/* ✅ Fix: pass props correctly */}
        <Tooltip
          content={(props) => (
            <CustomTooltip {...props} seriesMap={seriesMap} />
          )}
        />
        <Legend formatter={(value) => seriesMap[value] || value} />
        {config.lines.map((line) => (
          <Bar
            key={line.key}
            dataKey={line.key}
            name={line.name}
            fill={CHART_COLORS[line.key]}
            stackId="a"
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PavementChart;
