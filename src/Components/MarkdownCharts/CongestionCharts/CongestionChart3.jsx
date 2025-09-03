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

const LOCATION_COLORS = {
  mpo: "#1565C0", // blue
  ches: "#2E7D32", // green
  colh: "#E65100", // orange
  din: "#6A1B9A", // purple
  hope: "#C62828", // red
  pet: "#00838F", // cyan
  prge: "#F9A825", // yellow
};

const INITIAL_VISIBLE_LOCATIONS = ["mpo", "ches", "colh", "din"];

const selectStyle = {
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #9E9E9E",
  backgroundColor: "#E3F2FD",
  cursor: "pointer",
  color: "#000000",
  fontWeight: "500",
};

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
            {entry.name}: {entry.value.toFixed(1)}%
          </span>
        </div>
      ))}
    </div>
  );
};

const CongestionChart3 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedMode, setSelectedMode] = useState("int");
  const [selectedValue, setSelectedValue] = useState("Percent");
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
          (d) => d.Values === selectedValue
        );

        const transformedData = filteredData.reduce((acc, row) => {
          const year = row.year;
          if (!acc[year]) {
            acc[year] = { year };
          }

          config.locations.forEach((loc) => {
            const columnName = `${loc.value}_${selectedMode}`;
            if (row[columnName]) {
              acc[year][loc.value] = parseFloat(row[columnName]);
            }
          });

          return acc;
        }, {});

        const formattedData = Object.values(transformedData).sort(
          (a, b) => parseInt(a.year) - parseInt(b.year)
        );

        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error loading chart data:", error);
      });
  }, [dataPath, selectedMode, selectedValue, config.locations]);

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

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <div>
          <label
            htmlFor="modeSelect"
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Select Road Type:
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
        <div>
          <label
            htmlFor="valueSelect"
            style={{
              marginRight: "0.5rem",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Select Value Type:
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
      </div>

      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      ></div>

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
            tickFormatter={(value) => `${value}%`}
            domain={[0, "auto"]}
            label={{
              value: config.yAxis.label,
              angle: -90,
              position: "insideLeft",
              offset: -20,
              fill: "#000000",
              style: { textAnchor: "middle", fontSize: 14, fontWeight: "bold" },
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            onClick={handleLegendClick}
            iconSize={10}
            iconType="circle"
            wrapperStyle={{
              paddingTop: "20px",
              ...legendStyle,
            }}
          />
          {config.locations.map((location) => (
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

export default CongestionChart3;
