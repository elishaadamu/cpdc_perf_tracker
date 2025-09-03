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

const BAR_COLORS = {
  Fatalities: "#579ac7",
  Serious_Injuries: "#bccde7",
  NMF: "#ff9f4b",
  NMSI: "#ffcc9a",
};

const INACTIVE_COLOR = "#e0e0e0";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "4px",
        }}
      >
        <p style={{ color: "black", margin: "0 0 5px 0" }}>
          <strong>Year: {label}</strong>
        </p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: "black", margin: "2px 0" }}>
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: entry.color,
                marginRight: "5px",
              }}
            ></span>
            {entry.name}: {entry.value.toFixed(2)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const TransitSafetyBarChart = ({ dataPath, config }) => {
  const [selectedLocation, setSelectedLocation] = useState(
    config.locations[0]?.value
  );
  const [selectedTimePeriod, setSelectedTimePeriod] = useState(
    config.defaultOption
  );
  const [data, setData] = useState([]);
  const [activeValues, setActiveValues] = useState(
    config.filters?.Value?.reduce((acc, val) => {
      acc[val.value] = true;
      return acc;
    }, {}) || {}
  );

  useEffect(() => {
    fetch(dataPath)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = d3.csvParse(csvText, (row) => {
          const cleaned = {};
          for (const key in row) {
            cleaned[key.trim().toLowerCase()] = row[key]?.trim?.();
          }
          return cleaned;
        });

        const years = Array.from(new Set(parsed.map((d) => d.year))).sort();
        const values = config.filters?.Value?.map((v) => v.value) || [];

        const transformed = years.map((year) => {
          const row = { year: parseInt(year, 10) };
          values.forEach((val) => {
            const matchingRow = parsed.find(
              (d) =>
                d.year === year &&
                d.value === val &&
                d.hasOwnProperty(`${selectedLocation}_${selectedTimePeriod}`)
            );
            const column = `${selectedLocation}_${selectedTimePeriod}`;
            const cell = matchingRow?.[column];
            row[val] = cell ? parseFloat(cell) : 0;
          });
          return row;
        });

        setData(transformed);
      })
      .catch((err) => {
        console.error("Failed to load CSV", err);
      });
  }, [dataPath, selectedLocation, selectedTimePeriod]);

  const handleLegendClick = (entry) => {
    setActiveValues((prev) => ({
      ...prev,
      [entry.dataKey]: !prev[entry.dataKey],
    }));
  };

  const legendPayload = config.filters?.Value.map((val) => ({
    value: val.label,
    type: "circle",
    id: val.value,
    dataKey: val.value,
    color: activeValues[val.value] ? BAR_COLORS[val.value] : "#cccccc", // gray when inactive
  }));

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
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <div>
          <label style={{ marginRight: "0.5rem", fontWeight: 500 }}>
            Select Location:
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={selectStyle}
          >
            {config.locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ marginRight: "0.5rem", fontWeight: 500 }}>
            Select Value Type:
          </label>
          <select
            value={selectedTimePeriod}
            onChange={(e) => setSelectedTimePeriod(e.target.value)}
            style={selectStyle}
          >
            {Object.entries(config.timePeriods).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            stroke="#666"
            angle={0}
            textAnchor="middle"
            interval={0}
            height={60}
            tick={{ fill: "#000", fontSize: 12 }}
            label={{
              value: "Year",
              angle: 0,
              position: "",
              offset: 140,
              marginTop: 20,
            }}
          />
          <YAxis
            stroke="#666"
            label={{
              value: config.yAxis.label,
              angle: -90,
              position: "insideLeft",
              textAnchor: "middle",
              fontSize: 12,
              offset: -30,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            onClick={handleLegendClick}
            payload={legendPayload}
            formatter={(value, entry) => (
              <span
                style={{
                  color: activeValues[entry.dataKey] ? "#000" : "#999",
                }}
              >
                {value}
              </span>
            )}
          />

          {config.filters?.Value.map((val) =>
            activeValues[val.value] ? (
              <Bar
                key={val.value}
                dataKey={val.value}
                name={val.label}
                stackId="a"
                fill={BAR_COLORS[val.value]}
                isAnimationActive={true}
                legendType="circle"
              />
            ) : null
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransitSafetyBarChart;
