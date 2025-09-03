Total daily vehicle miles traveled (VMT) and daily VMT per capita are indicators of travel demand on roads. Growth in VMT can indicate that the region has more need for infrastructure investment and increases the risk that transportation is causing more negative environmental impacts—such as stormwater runoff from roads; air, water, and noise pollution; greenhouse gas emissions; habitat fragmentation; and barriers to wildlife movement. However, a downward trend in per capita VMT can indicate a slower economy (i.e., household funds are constrained so fewer discretionary trips are made), a change in travel mode preference (i.e., populations are increasingly opting for more space-efficient and environmentally friendly non-auto travel modes), other travel behavior (more carpooling, combining trips, or working from home), or a decline in population.

This indicator is related to the _Connections 2050_ Plan goal to increase mobility and reliability, while reducing congestion and VMT.

#### Personal Vehicles by Geography

chart:{
"type": "milesdriven",
"file": "miles_driven_pers_veh_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Percent or Miles Reliability"
},
"locations": [
{ "value": "mpo", "label": "MPO" },
{ "value": "hopewell", "label": "Hopewell" },
{ "value": "petersburg", "label": "Petersburg" },
{ "value": "colonial_heights", "label": "Colonial Heights" },
{ "value": "chesterfield", "label": "Chesterfield" },
{ "value": "dinwiddie", "label": "Dinwiddie" },
{ "value": "prince_george", "label": "Prince George" }
],
"filters": {
"Value": [
{"value": "Total", "label": "Total"},
{"value": "Capita", "label": "Per Capita"}
]
}
}

<br>
<br>
<br>
<br>

#### Daily Vehicle Miles Traveled (VMT) by Geography

chart:{
"type": "milesdriven",
"file": "miles_driven_vmt_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Percent or Miles Reliability"
},
"locations": [
{ "value": "mpo", "label": "MPO" },
{ "value": "hopewell", "label": "Hopewell" },
{ "value": "petersburg", "label": "Petersburg" },
{ "value": "colonial_heights", "label": "Colonial Heights" },
{ "value": "chesterfield", "label": "Chesterfield" },
{ "value": "dinwiddie", "label": "Dinwiddie" },
{ "value": "prince_george", "label": "Prince George" }
],
"filters": {
"Value": [
{"value": "Total", "label": "Total"},
{"value": "Capita", "label": "Per Capita"},
{"value": "Vehicle", "label": "Per Vehicle"}
]
}
}
