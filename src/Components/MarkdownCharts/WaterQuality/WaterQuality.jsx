import React from "react";
import * as d3 from "d3";
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

const CHART_COLORS = {
  TC: "#1565C0",
  RR: "#C62828",
  Average: "#2E7D32",
  Attaining: "#43A047",
  "Insufficient Data": "#F9A825",
  Impaired: "#D32F2F",
};

const INITIAL_VISIBLE_LINES = [
  "TC", // Total Coliform
  "RR", // Fecal Coliform
  "Average", // Average of TC and RC
  "Attaining", // Attaining Water Quality
  "InsufficientData", // Insufficient Data
  "Impaired", // Impaired Water Quality
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
            {entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const CongestionChart = ({ dataPath, config }) => {
  const [data, setData] = React.useState([]);
  const [hiddenSeries, setHiddenSeries] = React.useState(
    new Set(
      config.lines
        .filter((line) => !INITIAL_VISIBLE_LINES.includes(line.key))
        .map((line) => line.key)
    )
  );

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        setData(parsedData);
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath]);

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

  const renderChart = () => {
    if (data.length === 0) {
      return <div>Loading data...</div>;
    }

    return (
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 50, bottom: 20 }}
        style={{ backgroundColor: "white" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
        <XAxis
          dataKey="year"
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#666666"
        />
        <YAxis
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#666666"
          label={{
            value: config.yAxis?.label || "",
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle", fontSize: 14, fontWeight: "bold" },
          }}
        />
        <Tooltip content={CustomTooltip} />
        <Legend
          onClick={handleLegendClick}
          iconSize={10}
          iconType="circle"
          wrapperStyle={{
            paddingTop: "20px",
            cursor: "pointer",
          }}
        />
        {config.lines.map((line) => (
          <Line
            key={line.key}
            type="cardinal"
            dataKey={line.key}
            name={line.name}
            stroke={CHART_COLORS[line.name]}
            strokeWidth={2}
            dot={{
              r: 4,
              strokeWidth: 2,
              fill: "white",
              stroke: CHART_COLORS[line.name],
            }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              fill: "white",
              stroke: CHART_COLORS[line.name],
            }}
            hide={hiddenSeries.has(line.key)}
            opacity={hiddenSeries.has(line.key) ? 0.3 : 1}
          />
        ))}
      </LineChart>
    );
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default CongestionChart;
