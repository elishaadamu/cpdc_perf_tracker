import React from "react";
import * as d3 from "d3";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CHART_COLORS = {
  Fatalities: "#1565C0",
  SI: "#2E7D32",
  FatalityRate: "#E65100",
  SIRate: "#9C27B0",
  NMFSI: "#6A1B9A",
};

const INITIAL_VISIBLE_BARS = [
  "Fatalities",
  "SI",
  "fat_rate",
  "si_rate",
  "nm_fsi",
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
              backgroundColor: entry.color || entry.stroke,
              borderRadius: "2px",
              marginRight: "5px",
            }}
          />
          <span style={{ color: "#000000" }}>
            {entry.name}: {Math.round(Number(entry.value))}
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
        .filter((line) => !INITIAL_VISIBLE_BARS.includes(line.key))
        .map((line) => line.key)
    )
  );

  React.useEffect(() => {
    fetch(dataPath)
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = d3.csvParse(csvText);
        const numericData = parsedData.map((d) => {
          const obj = { ...d };
          config.lines.forEach((line) => {
            obj[line.key] = +d[line.key]; // ensure numbers
          });
          return obj;
        });
        setData(numericData);
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, config.lines]);

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
      <ComposedChart
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

        {/* Left Y-Axis for counts */}
        <YAxis
          yAxisId="left"
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#1565C0"
          label={{
            value: "Fatalities / Serious Injuries",
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle", fontSize: 14, fontWeight: "bold" },
          }}
          tickFormatter={(value) => Math.round(value)}
        />

        {/* Right Y-Axis for rates */}
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#E65100"
          label={{
            value: "Rates",
            angle: 90,
            position: "insideRight",
            style: { textAnchor: "middle", fontSize: 14, fontWeight: "bold" },
          }}
          tickFormatter={(value) => Math.round(value)}
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

        {/* Bars - assign Y-Axis depending on type */}
        <Bar
          yAxisId="left"
          dataKey="Fatalities"
          name="Fatalities"
          fill={CHART_COLORS.Fatalities}
          hide={hiddenSeries.has("Fatalities")}
          opacity={hiddenSeries.has("Fatalities") ? 0.3 : 1}
          barSize={20}
        />
        <Bar
          yAxisId="left"
          dataKey="SI"
          name="Serious Injuries"
          fill={CHART_COLORS.SI}
          hide={hiddenSeries.has("SI")}
          opacity={hiddenSeries.has("SI") ? 0.3 : 1}
          barSize={20}
        />
        <Bar
          yAxisId="left"
          dataKey="nm_fsi"
          name="NMFSI"
          fill={CHART_COLORS.NMFSI}
          hide={hiddenSeries.has("nm_fsi")}
          opacity={hiddenSeries.has("nm_fsi") ? 0.3 : 1}
          barSize={20}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="fat_rate"
          name="Fatality Rate"
          stroke={CHART_COLORS.FatalityRate}
          hide={hiddenSeries.has("fat_rate")}
          opacity={hiddenSeries.has("fat_rate") ? 0.3 : 1}
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="si_rate"
          name="Serious Injury Rate"
          stroke={CHART_COLORS.SIRate}
          hide={hiddenSeries.has("si_rate")}
          opacity={hiddenSeries.has("si_rate") ? 0.3 : 1}
          strokeWidth={2}
        />
      </ComposedChart>
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
