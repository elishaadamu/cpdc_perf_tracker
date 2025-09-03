Although not a full picture of societal well-being, Gross Domestic Product (GDP) is a valuable measure of economic activity. GDP growth can spur opportunity for the region's residents in the form of job and income growth, which can reduce poverty. It is also a good indicator of how well our region is moving toward the _Connections 2050_ Plan vision to grow an innovative and connected economy, with broadly shared prosperity. The vision sets goals to improve global connections through facilitated goods movement, aviation, and multimodal intercity connections; fostering a high-skilled workforce; and small business growth.

#### High School Graduation Rates

chart:{
"type": "gdp1",
"file": "gdp_chart-f2_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Gross Domestic Product (GDP) in billions",
"type": "number"
},
"lines": [
{"key": "Hopewell_share", "name": "Hopewell"},
{"key": "Petersburg_share", "name": "Petersburg"},
{"key": "Colonial Heights_share", "name": "Colonial Heights"},
{"key": "Chesterfield_share", "name": "Chesterfield"},
{"key": "Dinwiddie_share", "name": "Dinwiddie"},
{"key": "Prince George_share", "name": "Prince George"}
]
}

<div className="markdown-chart -mt-20">

#### GDP Distribution by Industry

chart:{
"type": "gdp2",
"file": "gdp_chart-f3_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "GDP Distribution by Industry",
"type": "number"
},
"locations": [
{ "value": "mpo", "name": "MPO Region" },
{ "value": "hope", "name": "Hopewell" },
{ "value": "pet", "name": "Petersburg" },
{ "value": "col", "name": "Colonial Heights" },
{ "value": "ches", "name": "Chesterfield" },
{ "value": "din", "name": "Dinwiddie" },
{ "value": "pg", "name": "Prince George" }
],
"timePeriods": {
"total": "Total",
"hmvmt": "Highway and Major Arterial",
"capita": "Per Capita"
},
"filters": {
"Value":
[
{ "value": "ag_for_fish_min", "label": "Agriculture, forestry, fishing, mining" },
{ "value": "art_ent_rec_acc_food", "label": "Arts, entertain., rec., food, accommodations" },
{ "value": "construction", "label": "Construction" },
{ "value": "ed_services", "label": "Educational services" },
{ "value": "fin_insur_real_est", "label": "Finance, insurance, real estate" },
{ "value": "health_social_assist", "label": "Health care and social assistance" },
{ "value": "information", "label": "Information" },
{ "value": "manufacturing", "label": "Manufacturing" },
{ "value": "other_services", "label": "Other services (except public admin)" },
{ "value": "prof_services", "label": "Professional services, scientific, tech services" },
{ "value": "gov", "label": "Public administration" },
{ "value": "retail_trade", "label": "Retail trade" },
{ "value": "transp_warehouse_util", "label": "Transportation, warehousing, utilities" },
{ "value": "wholesale_trade", "label": "Wholesale trade" }
]
}
}

<div className="markdown-chart mt-20">
  </div>

#### Gross Domestic Product (GDP) by Commuter Mode

chart:{
"type": "gdp3",
"file": "gdp_chart1_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Percentage of Commuters"
},
"locations": [
{"value": "mpo", "label": "MPO Region"},
{"value": "hope", "label": "Hopewell"},
{"value": "pet", "label": "Petersburg"},
{"value": "col", "label": "Colonial Heights"},
{"value": "ches", "label": "Chesterfield"},
{"value": "din", "label": "Dinwiddie"},
{"value": "pg", "label": "Prince George"}
],
"transportModes": {
"options": [
{ "value": "ag_for_fish_min", "label": "Agriculture, forestry, fishing, mining" },
{ "value": "art_ent_rec_acc_food", "label": "Arts, entertain., rec., food, accommodations" },
{ "value": "construction", "label": "Construction" },
{ "value": "ed_services", "label": "Educational services" },
{ "value": "fin_insur_real_est", "label": "Finance, insurance, real estate" },
{ "value": "health_social_assist", "label": "Health care and social assistance" },
{ "value": "information", "label": "Information" },
{ "value": "manufacturing", "label": "Manufacturing" },
{ "value": "other_services", "label": "Other services (except public admin)" },
{ "value": "prof_services", "label": "Professional services, scientific, tech services" },
{ "value": "gov", "label": "Public administration" },
{ "value": "retail_trade", "label": "Retail trade" },
{ "value": "transp_warehouse_util", "label": "Transportation, warehousing, utilities" },
{ "value": "wholesale_trade", "label": "Wholesale trade" }
]
},
"filters": {
"Value": [
{"value": "AnnualChangeRate", "label": "Annual Change Rate"},
{"value": "PerCapita", "label": "Per Capita"},
{"value": "GDP", "label": "GDP"}
]
}
}
