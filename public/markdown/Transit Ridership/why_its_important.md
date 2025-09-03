Increasing transit ridership is critical to maintaining a safe multimodal transportation network that serves everyone. Our region has roughly 180,000 households that do not have access to a personal vehicle, and thus rely on transit to get to school, work, appointments, shopping, and other travel needs. Growing transit ridership is related to a number of key goals set in the _Connections 2050_ Plan. Transit service is safer on a per mile traveled basis and generally uses less energy—reducing greenhouse gas emissions and air pollution—relative to driving. Transit can also reduce the need to widen or build new roads, helping to create denser, more vibrant, healthy, and walkable communities.

#### Vehicle Revenue Miles Between Failures

chart:{
"type": "transitRidership",
"file": "transit_ridership_1_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Annual Unlinked Trips by Transit Mode"
},
"locations": [
{"value": "all", "label": "Total"},
{"value": "capita", "label": "Per Capita"},
{"value": "vrh", "label": "Per VRH"},
{"value": "vrm", "label": "Per VRM"}
],
"transportModes": {
"options": [
{"value": "Bus", "label": "Bus"},
{"value": "Busper", "label": "Busper"}
]
}
}
