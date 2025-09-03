import React, { useState, useEffect } from "react";
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

const LOCATION_COLORS = {
  MPO: "#5C9DED", // lighter blue
  Hopewell: "#60AD5E", // lighter green
  ColonialHeights: "#FB8C00", // softer orange
  Dinwiddie: "#9C4DCC", // lighter purple
  Chesterfield: "#E57373", // lighter red
  Petersburg: "#26C6DA", // lighter cyan / teal
  PrinceGeorge: "#FDD835", // softer yellow
};

const INITIAL_VISIBLE_LOCATIONS = [
  "MPO",
  "Hopewell",
  "ColonialHeights",
  "Dinwiddie",
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

const CustomTooltip = ({ active, payload, label, isPercentage }) => {
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
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "3px",
          }}
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
            {entry.name}: {entry.value.toFixed(1)}
            {isPercentage ? "%" : ""}
          </span>
        </div>
      ))}
    </div>
  );
};

const MortgageChart1 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedMode, setSelectedMode] = useState(
    config?.transportModes?.options?.[0]?.value || "female"
  );
  const [selectedValue, setSelectedValue] = useState(
    config?.filters?.Value?.[0]?.value || "All"
  );
  const [hiddenSeries, setHiddenSeries] = useState(
    new Set(
      (config?.locations || [])
        .filter((loc) => !INITIAL_VISIBLE_LOCATIONS.includes(loc.value))
        .map((loc) => loc.value)
    )
  );

  useEffect(() => {
    fetch(dataPath)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = d3.csvParse(csvText);
        const filtered = parsed.filter((d) => d.value === selectedValue);

        if (filtered.length === 0) {
          console.warn("No data matched the filters");
          return;
        }

        // Transform data with conditional percentage conversion
        const transformed = filtered.map((row) => {
          const dataPoint = { year: row.year };

          config.locations.forEach((location) => {
            const columnName = `${location.value}_${selectedMode}`;
            const value = row[columnName];
            // Only multiply by 100 if isPercentage is true
            dataPoint[location.value] = value
              ? parseFloat(value) * (config.isPercentage !== false ? 100 : 1)
              : null;
          });

          return dataPoint;
        });

        setData(transformed);
      })
      .catch((err) => {
        console.error("Failed to load CSV:", err);
      });
  }, [
    dataPath,
    selectedMode,
    selectedValue,
    config.locations,
    config.isPercentage,
  ]);

  // Modify the YAxis tickFormatter based on config
  const formatYAxisTick = (value) => {
    if (config.isPercentage !== false) {
      return `${value}%`;
    }
    // For non-percentage values, use number formatting
    return value.toLocaleString();
  };

  const handleLegendClick = (entry) => {
    setHiddenSeries((prev) => {
      const next = new Set(prev);
      if (next.has(entry.value)) {
        next.delete(entry.value);
      } else {
        next.add(entry.value);
      }
      return next;
    });
  };

  const legendStyle = {
    ".recharts-legend-item": {
      cursor: "pointer",
      marginRight: "10px",
    },
    ".recharts-legend-item-text": {
      color: "#666666",
    },
  };

  const LocationButton = ({ location }) => (
    <button
      key={location.value}
      onClick={() => handleLegendClick({ dataKey: location.value })}
      style={{
        padding: "6px 12px",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: LOCATION_COLORS[location.value],
        backgroundColor: hiddenSeries.has(location.value)
          ? "transparent"
          : LOCATION_COLORS[location.value],
        color: hiddenSeries.has(location.value)
          ? LOCATION_COLORS[location.value]
          : "white",
        cursor: "pointer",
        margin: "0 4px 8px",
        transition: "all 0.2s ease",
        fontSize: "12px",
        fontWeight: "500",
      }}
    >
      {location.label}
    </button>
  );

  // Add error checking in the return statement
  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        {config?.transportModes?.options && (
          <div>
            <label
              htmlFor="modeSelect"
              style={{
                marginRight: "0.5rem",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Select Type:
            </label>
            <select
              id="modeSelect"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              style={selectStyle}
            >
              {config.transportModes.options.map((mode) => (
                <option key={mode.value} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {config?.filters?.Value && (
          <div>
            <label
              htmlFor="valueSelect"
              style={{
                marginRight: "0.5rem",
                fontWeight: "500",
                color: "#000000",
              }}
            >
              Select Category:
            </label>
            <select
              id="valueSelect"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              style={selectStyle}
            >
              {config.filters.Value.map((val) => (
                <option key={val.value} value={val.value}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={600}>
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
            tickFormatter={formatYAxisTick}
            domain={[0, "auto"]}
            label={{
              value: config?.yAxis?.label || "Value",
              angle: -90,
              position: "insideLeft",
              offset: -20,
              fill: "#000000",
              style: { textAnchor: "middle", fontSize: 14, fontWeight: "bold" },
            }}
          />
          <Tooltip
            content={
              <CustomTooltip isPercentage={config.isPercentage !== false} />
            }
          />
          <Legend
            onClick={handleLegendClick}
            iconSize={10}
            iconType="circle"
            wrapperStyle={{
              paddingTop: "20px",
              ...legendStyle,
            }}
          />
          {(config?.locations || []).map((location) => (
            <Line
              key={location.value}
              type="cardinal"
              dataKey={location.value}
              name={location.label}
              stroke={LOCATION_COLORS[location.value]}
              strokeWidth={2}
              dot={{
                r: 4,
                strokeWidth: 2,
                fill: "white",
                stroke: LOCATION_COLORS[location.value],
              }}
              activeDot={{
                r: 6,
                strokeWidth: 2,
                fill: "white",
                stroke: LOCATION_COLORS[location.value],
              }}
              hide={hiddenSeries.has(location.value)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MortgageChart1;
