import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BAR_COLOR = "#1565C0";

// ✅ Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const entry = payload[0];
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold", color: "#000" }}>
          Year: {label}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "4px",
            color: "black",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: entry.color || "#000",
              border: "1px solid black",
              marginRight: "6px",
            }}
          ></div>
          <span style={{ fontSize: "14px" }}>
            Value: {entry.value.toFixed(2)}
          </span>
        </div>
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
  const [selectedValue, setSelectedValue] = useState(
    config.filters?.Value?.[0]?.value || null
  );
  const [data, setData] = useState([]);

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

        const filtered = config.filters?.Value
          ? parsed.filter((d) => d.value === selectedValue)
          : parsed;

        const transformed = filtered
          .map((row) => {
            const col = `${selectedLocation}_${selectedTimePeriod}`;
            const yearRaw = row.year;
            const year = parseInt(yearRaw, 10);
            return {
              year: isNaN(year) ? yearRaw : year,
              value: row[col] ? parseFloat(row[col]) : 0,
            };
          })
          .sort((a, b) => a.year - b.year);

        setData(transformed);
      })
      .catch((err) => {
        console.error("Failed to load CSV", err);
      });
  }, [dataPath, selectedLocation, selectedTimePeriod, selectedValue]);

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
      {/* Top controls: Location + Time Period */}
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

      {/* Chart */}
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            stroke="#000000"
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
          <Bar dataKey="value" fill={BAR_COLOR} />
        </BarChart>
      </ResponsiveContainer>

      {/* Optional: Value Filter (only if filters.Value is present) */}
      {config.filters?.Value && (
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label style={{ marginRight: "0.5rem", fontWeight: 500 }}>
            Select Value:
          </label>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            style={selectStyle}
          >
            {config.filters.Value.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default TransitSafetyBarChart;
