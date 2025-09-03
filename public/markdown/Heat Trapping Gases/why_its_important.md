Since the start of the industrial age, the increasing combustion of fossil fuels has increased the generation of carbon dioxide (CO<sub>2</sub>), leading to rising global temperatures and potentially destabilizing the earth’s long-term weather patterns. Such changes pose serious threats to the environmental, economic and agricultural systems that support societies across the globe. Changing weather patterns also present considerable fairness issues at the regional scale. For example, many of our region’s poorest communities face greater risks from extreme heat due to a lack of tree canopy, vegetation, and greenspace in their communities, as well as higher levels of existing air pollution. Residents in these communities are also less likely to have or be able to afford the use of air conditioning.

Reducing the accumulation of heat-trapping gases in the atmosphere is critical for slowing or even reversing global temperature increases. Many of the actions taken to accomplish this goal will also make our transportation network more efficient, improve air quality, bolster public health, make the region's communities more livable, and increase economic resilience. The _Connections 2050_ Plan therefore sets a goal to reduce regional CO<sub>2</sub> equivalent outputs to net zero by 2050.

#### Heat Emissions by Location

chart:{
"type": "heatEmission1",
"file": "heat_emission-heat-nhs-f5_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Heat Emissions (Million BTUs)",
"type": "number"
},
"lines": [
{"key": "MPO_share", "name": "MPO Region"},
{"key": "Hopewell_share", "name": "Hopewell"},
{"key": "Petersburg_share", "name": "Petersburg"},
{"key": "ColonialHeights_share", "name": "Colonial Heights"},
{"key": "Chesterfield_share", "name": "Chesterfield"},
{"key": "Dinwiddie_share", "name": "Dinwiddie"},
{"key": "PrinceGeorge_share", "name": "Prince George"}
]
}

<div className="markdown-chart -mt-30">

#### Total Emissions and Per Capita Trends

chart:{
"type": "heatEmission2",
"file": "heat_emissions_1_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "CO₂ Equivalent Emissions (Metric Tons)",
"type": "number"
},
"lines": [
{"key": "emissions_total", "name": "Total Emissions"},
{"key": "emissions_per_capita", "name": "Emissions Per Capita"}
]
}

<div className="markdown-chart -mt-15">

#### Emissions by Sector

chart:{
"type": "heatEmission2",
"file": "heat_emissions_2_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "CO₂ Equivalent Emissions by Sector (Metric Tons)",
"type": "number"
},
"lines": [
{"key": "residential", "name": "Residential"},
{"key": "commercial_industrial", "name": "Commercial Industrial"},
{"key": "transportation", "name": "Transportation"},
{"key": "other", "name": "Other"}
]
}

<div className="markdown-chart -mt-15">
  </div>

#### Emissions by Energy Source

chart:{
"type": "heatEmission2",
"file": "heat_emissions_3_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Energy Production by Source (GWh)",
"type": "number"
},
"lines": [
{"key": "coal", "name": "Coal"},
{"key": "oil", "name": "Oil"},
{"key": "gas", "name": "Gas"},
{"key": "other_fossil", "name": "Other Fossil"},
{"key": "biomass", "name": "Biomass"},
{"key": "hydro", "name": "Hydro"},
{"key": "nuclear", "name": "Nuclear"},
{"key": "wind", "name": "Wind"},
{"key": "solar", "name": "Solar"}
]
}
