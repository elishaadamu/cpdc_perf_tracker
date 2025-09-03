Clean water is a fundamental need for people. It is vital for agriculture, manufacturing, and the region's drinking water supply. Clean water also serves as the foundation for many of our recreational offerings, notably swimming, boating, and fishing. Water is home for many species in our region. Clean water means healthy ponds, lakes, streams, and wetlands. _Connections 2050_ sets a goal to improve water quality as part of the Plan’s vision to preserve and restore the natural environment.

#### Water Quality Index One

chart:{
"type": "waterQuality",
"file": "water_quality_1.csv",
"xAxis": "year",
"yAxis": {
"label": "Water Quality Index",
"type": "number"
},
"lines": [
{"key": "TC", "name": "TC"},
{"key": "RR", "name": "RR"},
{"key": "Average", "name": "Average"}
]
}

<div className="mt-[-100px]"></div>

#### Water Quality Index Two

chart:{
"type": "waterQuality",
"file": "water_quality_2.csv",
"xAxis": "year",
"yAxis": {
"label": "Water Quality Index",
"type": "number"
},
"lines": [
{"key": "Attaining", "name": "Attaining"},
{"key": "InsufficientData", "name": "Insufficient Data"},
{"key": "Impaired", "name": "Impaired"}
]
}
