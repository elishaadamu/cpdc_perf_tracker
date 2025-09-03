import React, { useState } from "react";
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
  "MPO Region": "#1565C0",
  Chesterfield: "#2E7D32",
  "Colonial Heights": "#E65100",
  Dinwiddie: "#C62828",
  Hopewell: "#6A1B9A",
  Petersburg: "#00838F",
  "Prince George": "#F9A825",
  "Core City": "#AD1457",
  "Developed Community": "#827717",
  "Growing Suburb": "#4E342E",
  "Rural Area": "#4527A0",
};

const INITIAL_VISIBLE_LOCATIONS = [
  "MPO",
  "Hopewell",
  "Petersburg",
  "ColonialHeights",
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
            {entry.name}: {entry.value.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
};

const CommunityIntegrationChart2 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("OwnAbove");
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
        const transformedData = parsedData.map((row) => {
          const yearData = { year: row.year };
          config.locations.forEach((location) => {
            const columnName = `${location.value}_${selectedTimePeriod}`;
            yearData[location.value] = parseFloat(row[columnName]) || 0;
          });
          return yearData;
        });
        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, selectedTimePeriod]);

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
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }} // Reduced margins
        style={{ backgroundColor: "white" }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
        <XAxis
          dataKey="year"
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#666666"
          padding={{ left: 0, right: 0 }} // Remove padding
        />
        <YAxis
          tick={{ fill: "#000000", fontSize: 12 }}
          stroke="#666666"
          label={{
            value: config.yAxis?.label || "",
            angle: -90,
            position: "insideLeft",
            offset: -5, // Move label closer
            style: { textAnchor: "middle", fill: "#666666" },
          }}
          padding={{ top: 0, bottom: 0 }} // Remove padding
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
        {config.locations.map((location) => (
          <Line
            key={location.value}
            type="cardinal"
            dataKey={location.value}
            name={location.name}
            stroke={CHART_COLORS[location.name]} // This matches the config name
            strokeWidth={2}
            dot={{
              r: 4,
              strokeWidth: 2,
              fill: "white",
              stroke: CHART_COLORS[location.name],
            }}
            activeDot={{
              r: 6,
              strokeWidth: 2,
              fill: "white",
              stroke: CHART_COLORS[location.name],
            }}
            hide={hiddenSeries.has(location.value)}
            opacity={hiddenSeries.has(location.value) ? 0.3 : 1}
          />
        ))}
      </LineChart>
    );
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

  return (
    <div className="chart-container">
      <div style={{ marginBottom: "1rem" }}>
        <label
          htmlFor="timePeriodSelect"
          style={{
            marginRight: "0.5rem",
            fontWeight: "500",
            color: "#ffffff",
          }}
        >
          Select Time Period:
        </label>
        <select
          id="timePeriodSelect"
          value={selectedTimePeriod}
          onChange={(e) => setSelectedTimePeriod(e.target.value)}
          style={selectStyle}
        >
          {Object.entries(config.timePeriods).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

export default CommunityIntegrationChart2;
