While not a direct goal in the _[Connections 2050](http://www.dvrpc.org/plan)_ Plan, a growing population is a sign of a region's desirability and vitality. Where growth is happening within the region is just as important: if it occurs in already developed places, there will be a reduced impact on the environment and regional infrastructure. Lastly, shifts in birth and death rates, foreign and domestic migration, age, race, and ethnicity give some idea of where demographic trends are heading in the region and how to plan for different populations' needs in the future.

#### Population Growth by Age

chart:{
"type": "PopulationGrowth1",
"file": "pop_age_totals-f3a-fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Population Growth by Age"
},
"locations": [
{"value": "MPO", "label": "MPO"},
{"value": "Hopewell", "label": "Hopewell"},
{"value": "Petersburg", "label": "Petersburg"},
{"value": "ColonialHeights", "label": "Colonial Heights"},
{"value": "Chesterfield", "label": "Chesterfield"},
{"value": "Dinwiddie", "label": "Dinwiddie"},
{"value": "PrinceGeorge", "label": "Prince George"}],
"transportModes": {
"options": [
{"value": "<20", "label": "<20 years"},
{"value": "20-34", "label": "20-34 years"},
{"value": "35-49", "label": "35-49 years"},
{"value": "50-64", "label": "50-64 years"}
]
}
}

#### Population Growth by Race/Ethnicity

chart:{
"type": "PopulationGrowth2",
"file": "pop_hisp_totals-f5a-fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Population Growth by Race/Ethnicity",
"type": "number"
},
"locations": [
{"value": "MPO", "name": "MPO Region"},
{"value": "Hopewell", "name": "Hopewell"},
{"value": "Petersburg", "name": "Petersburg"},
{"value": "ColonialHeights", "name": "Colonial Heights"},
{"value": "Chesterfield", "name": "Chesterfield"},
{"value": "Dinwiddie", "name": "Dinwiddie"},
{"value": "PrinceGeorge", "name": "Prince George"}
],
"timePeriods": {
"H": "Hispanic",
"NH": "Non Hispanic"
},
"defaultOption": "H"
}

#### Population Growth by Race/Ethnicity

chart:{
"type": "PopulationGrowth2",
"file": "pop_race_totals-f4a-fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Population Growth by Race/Ethnicity",
"type": "number"
},
"locations": [
{"value": "MPO", "name": "MPO Region"},
{"value": "Hopewell", "name": "Hopewell"},
{"value": "Petersburg", "name": "Petersburg"},
{"value": "ColonialHeights", "name": "Colonial Heights"},
{"value": "Chesterfield", "name": "Chesterfield"},
{"value": "Dinwiddie", "name": "Dinwiddie"},
{"value": "PrinceGeorge", "name": "Prince George"}
],
"timePeriods": {
"WA": "White Alone",
"BA": "Black Alone",
"IA": "Indian Alone",
"AA": "American Asian Alone",
"NA": "Native Hawaiian Alone",
"TOM": "Two or More"
},
"defaultOption": "WA"
}

#### Population

chart:{
"type": "PopulationGrowth4",
"file": "popGrowth-f1-fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Population Growth",
"type": "number"
},
"lines": [
{"key": "MPO", "name": "MPO Region"},
{"key": "Hopewell", "name": "Hopewell"},
{"key": "Petersburg", "name": "Petersburg"},
{"key": "ColonialHeights", "name": "Colonial Heights"},
{"key": "Chesterfield", "name": "Chesterfield"},
{"key": "Dinwiddie", "name": "Dinwiddie"},
{"key": "PrinceGeorge", "name": "Prince George"}
]
}
