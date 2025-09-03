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
  ag_for_fish_min: "#E65100",
  art_ent_rec_acc_food: "#2E7D32",
  construction: "#00838F",
  ed_services: "#6A1B9A",
  fin_insur_real_est: "#AD1457",
  health_social_assist: "#827717",
  information: "#4E342E",
  manufacturing: "#F9A825",
  other_services: "#4527A0",
  prof_services: "#1565C0",
  gov: "#00695C",
  retail_trade: "#FF8F00",
  transp_warehouse_util: "#C62828",
  wholesale_trade: "#37474F",
};

const INITIAL_VISIBLE_MODES = [
  "ag_for_fish_min",
  "art_ent_rec_acc_food",
  "construction",
  "ed_services",
  "fin_insur_real_est",
];

const MODES = {
  options: [
    {
      value: "ag_for_fish_min",
      label: "Agriculture, forestry, fishing, mining",
    },
    {
      value: "art_ent_rec_acc_food",
      label: "Arts, entertain., rec., food, accommodations",
    },
    { value: "construction", label: "Construction" },
    { value: "ed_services", label: "Educational services" },
    { value: "fin_insur_real_est", label: "Finance, insurance, real estate" },
    {
      value: "health_social_assist",
      label: "Health care and social assistance",
    },
    { value: "information", label: "Information" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "other_services", label: "Other services (except public admin)" },
    {
      value: "prof_services",
      label: "Professional services, scientific, tech services",
    },
    { value: "gov", label: "Public administration" },
    { value: "retail_trade", label: "Retail trade" },
    {
      value: "transp_warehouse_util",
      label: "Transportation, warehousing, utilities",
    },
    { value: "wholesale_trade", label: "Wholesale trade" },
  ],
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  // Sort payload by absolute value
  const sortedPayload = [...payload].sort(
    (a, b) => Math.abs(b.value) - Math.abs(a.value)
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #666",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        padding: "10px",
        fontSize: "12px",
      }}
    >
      <p style={{ margin: "0 0 5px 0", fontWeight: "bold", color: "#000" }}>
        {label}
      </p>
      {sortedPayload.map((entry, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          <span style={{ color: "#000" }}>
            {entry.name}:{" "}
            {entry.payload.value === "AnnualChangeRate"
              ? `${entry.value.toFixed(2)}`
              : entry.payload.value === "GDP"
              ? `${entry.value.toLocaleString()}`
              : entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

const GDP3 = ({ dataPath, config }) => {
  const [data, setData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(
    config.locations[0]?.value
  );
  const [selectedValue, setSelectedValue] = useState(
    config.filters?.Value?.[0]?.value
  );
  const [hiddenSeries, setHiddenSeries] = useState(new Set());

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

        const years = [...new Set(filtered.map((d) => +d.year))].sort(
          (a, b) => a - b
        );
        const transformed = years.map((year) => {
          const row = { year, value: selectedValue };
          MODES.options.forEach((mode) => {
            const columnName = `${selectedLocation.toLowerCase()}_${
              mode.value
            }`;
            const value = filtered.find((d) => +d.year === year)?.[columnName];
            if (value) {
              // Only multiply by 100 for AnnualChangeRate, keep original for others
              row[columnName] =
                selectedValue === "AnnualChangeRate"
                  ? parseFloat(value) * 100
                  : parseFloat(value);
            } else {
              row[columnName] = 0;
            }
          });
          return row;
        });

        const hidden = new Set(
          MODES.options
            .filter((mode) => !INITIAL_VISIBLE_MODES.includes(mode.value))
            .map((mode) => `${selectedLocation.toLowerCase()}_${mode.value}`)
        );

        setData(transformed);
        setHiddenSeries(hidden);
      })
      .catch((err) => {
        console.error("Failed to load CSV", err);
      });
  }, [dataPath, selectedLocation, selectedValue]);

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

  return (
    <div>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <div>
          <label
            style={{ marginRight: "0.5rem", fontWeight: 500, color: "#000" }}
          >
            Select Location:
          </label>
          <select
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
        {config.filters?.Value && (
          <div>
            <label
              style={{ marginRight: "0.5rem", fontWeight: 500, color: "#000" }}
            >
              Select Value:
            </label>
            <select
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
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            stroke="#666"
            type="number"
            domain={[
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
              "2023",
            ]}
          />
          <YAxis
            stroke="#666"
            tickFormatter={(v) => {
              if (selectedValue === "AnnualChangeRate") return `${v.toFixed()}`;
              if (selectedValue === "GDP") return `${v.toLocaleString()}`;
              return v.toLocaleString();
            }}
            label={{
              value: config.yAxis.label,
              angle: -90,
              position: "insideLeft",
              offset: -40,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend onClick={handleLegendClick} />
          {MODES.options.map((mode) => {
            const key = `${selectedLocation.toLowerCase()}_${mode.value}`;
            return (
              <Line
                key={key}
                type="cardinal"
                dataKey={key}
                name={mode.label}
                stroke={CHART_COLORS[mode.value] || "#8884d8"}
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

export default GDP3;
