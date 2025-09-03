A well-maintained transit system is vital to moving people around the region. When transit is not maintained, the risk of delayed or canceled rides increases and reliability decreases. As a result, passengers can be discouraged from using transit, and users are more likely to choose to drive, causing more congestion, crashes, and air pollution throughout the region. Those who do not have another option, or cannot afford one, may not be able to reach jobs, medical appointments, education programs, or other important activities. A poorly maintained transit system requires more regular, costly repairs to stay operational, and is less energy efficient. DVRPC’s _Connections 2050_ Plan sets a goal to rebuild and modernize the region’s transportation assets to achieve and maintain a state-of-good repair.

#### Total Roadways Miles by Pavement Condition

chart:{
"type": "transit",
"file": "transit_conditions_1_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Lanes Miles",
"type": "number"
},
"locations": [
{"value": "septa_bus", "name": "Bus"}
],
"timePeriods": {
"Total": "Total",
"Percent": "Percent"
},
"defaultOption": "Total"
}

#### Support Vehicles Past their Useful Life Benchmark (ULB)

chart:{
"type": "transit",
"file": "transit_conditions_2_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Number of Support Vehicles Past their (ULB)",
"type": "number",
"dx": -5,
"dy": 150
},
"locations": [
{"value": "auto", "name": "Automobiles"},
{"value": "trucks", "name": "Trucks"},
{"value": "articulated", "name": "Articulated Trucks"}
],
"timePeriods": {
"Total": "Total",
"Percent": "Percent"
},
"defaultOption": "Total"
}

#### Rail Track with Performance Restrictions

chart:{
"type": "transit",
"file": "transit_conditions_3_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Miles of Rail Track with Performance Restrictions",
"type": "number",
"dx": -5,
"dy": 150
},
"locations": [
{"value": "all", "name": "All"},
{"value": "pass", "name": "Passangers"},
{"value": "admin", "name": "Admin"}
],
"timePeriods": {
"Total": "Total",
"Percent": "Percent"
},
"defaultOption": "Total"
}

#### Vehicle Revenue Miles Between Failures

chart: {
"type": "transit",
"file": "transit_conditions_vrmf_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Miles Between Failures Per 100,000 Vehicle Revenue Miles",
"type": "number",
"dx": -5,
"dy": 150
},
"locations": [
{ "value": "All", "name": "All Transit Modes" }
]
}
