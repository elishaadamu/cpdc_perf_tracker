import React, { useEffect, useState } from "react";
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
  Bus: "#E65100",
  Busper: "#2E7D32",
};

const INITIAL_VISIBLE_MODES = ["Bus", "Busper"];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #666666",
        borderRadius: "4px",
        padding: "10px",
        fontSize: "12px",
      }}
    >
      <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}</p>
      {payload.map((entry, index) => (
        <div key={index} style={{ color: "#000" }}>
          <span>{entry.name}: </span>
          <strong>{entry.value}</strong>
        </div>
      ))}
    </div>
  );
};

const getColumnKey = (mode, loc) => {
  if (mode === "Bus" && loc === "all") return "bus_all";
  if (mode === "Busper") return `busper_${loc}`;
  return null;
};

const TransitRidership = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(
    config.locations[0]?.value
  );
  const [hiddenSeries, setHiddenSeries] = useState(new Set());

  useEffect(() => {
    fetch(dataPath)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = d3.csvParse(csvText);

        const years = [...new Set(parsed.map((d) => d.year))];
        const transformed = years.map((year) => {
          const row = { year };
          config.transportModes.options.forEach((mode) => {
            const col = getColumnKey(mode.value, selectedLocation);
            if (!col) return;
            const value = parsed.find((d) => d.year === year)?.[col];
            row[col] = value ? parseFloat(value) : null;
          });
          return row;
        });

        // No lines hidden by default now
        setData(transformed);
        setHiddenSeries(new Set());
      })
      .catch((err) => {
        console.error("Failed to load CSV", err);
      });
  }, [dataPath, selectedLocation, config.transportModes]);

  const handleLegendClick = (entry) => {
    setHiddenSeries((prev) => {
      const copy = new Set(prev);
      if (copy.has(entry.dataKey)) {
        copy.delete(entry.dataKey);
      } else {
        copy.add(entry.dataKey);
      }
      return copy;
    });
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
  const getYAxisLabel = () => {
    switch (selectedLocation) {
      case "all":
        return "Trips (thousand)";
      case "capita":
        return "Trips Per Capita";
      case "vrh":
        return "Trips Per Vehicle Revenue Hour";
      case "vrm":
        return "Trips Per Vehicle Revenue Mile";
      default:
        return "Trips";
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <div>
          <label
            htmlFor="locationSelect"
            style={{ marginRight: "0.5rem", fontWeight: 500, color: "#000" }}
          >
            Select Location:
          </label>
          <select
            id="locationSelect"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={selectStyle}
          >
            {config.locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" stroke="#666" />
          <YAxis
            stroke="#666"
            label={{
              value: getYAxisLabel(),
              angle: -90,
              position: "insideLeft",
              offset: -30,
              style: { textAnchor: "middle", fill: "#666" },
            }}
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend onClick={handleLegendClick} />
          {config.transportModes.options.map((mode) => {
            const key = getColumnKey(mode.value, selectedLocation);
            if (!key) return null;
            return (
              <Line
                key={key}
                dataKey={key}
                name={mode.label}
                stroke={CHART_COLORS[mode.value] || "#8884d8"}
                type="monotone"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
                hide={hiddenSeries.has(key)}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransitRidership;
