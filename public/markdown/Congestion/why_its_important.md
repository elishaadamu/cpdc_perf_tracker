It's hard to plan a trip when you have no idea how long it will take. Travelers want reliable travel times from one day to the next. The same peak hours generally occur every weekday, but on any given day, unusual circumstances like crashes, weather, construction activity, or special events can dramatically change the performance of the roadway. This is referred to as _nonrecurring_ congestion. Data collected by the Federal Highway Administration indicates that nonrecurring congestion actually accounts for more hours of delay than the everyday (recurring) congestion that results from road capacity constraints and heavy volumes. A reliable network may still have congestion in peak periods, but such congestion will be easier to predict—ensuring the region's residents and goods get to where they are expected to be when they are expected to be there.

This indicator relates to the _Connections 2050_ Plan’s goal to increase mobility and reliability, while reducing congestion and vehicle miles traveled. It also incorporates federal Transportation Performance Management (TPM) metrics related to the system performance of the region’s roadways. These metrics are used to inform transportation investment decision making and include the percentage of roadway which is considered reliable, Truck Travel Time Reliability (TTTR), and Annual Hours of Peak Hour Excessive Delay (PHED).

#### Annual Hours of Peak Hour Excessive Delay (PHED)

chart:{
"type": "congestion1",
"file": "congestion_phd_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "congestion",
"type": "number"
},
"lines": [
{"key": "mpo", "name": "MPO Region"},
{"key": "hopewell", "name": "Hopewell"},
{"key": "petersburg", "name": "Petersburg"},
{"key": "colonial_heights", "name": "Colonial Heights"},
{"key": "chesterfield", "name": "Chesterfield"},
{"key": "dinwiddie", "name": "Dinwiddie"},
{"key": "prince_george", "name": "Prince George"}
]
}

#### Congestion Index

chart:{
"type": "congestion2",
"file": "congestion_pti_1_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Congestion Index",
"type": "number"
},
"locations": [
{"value": "mpo", "name": "MPO Region"},
{"value": "ches", "name": "Chesterfield"},
{"value": "colh", "name": "Colonial Heights"},
{"value": "din", "name": "Dinwiddie"},
{"value": "hope", "name": "Hopewell"},
{"value": "pet", "name": "Petersburg"},
{"value": "prge", "name": "Prince George"}
],
"timePeriods": {
"24": "24 Hours",
"AM": "Morning Peak (6 AM - 10 AM)",
"MD": "Midday (10 AM - 3 PM)",
"PM": "Evening Peak (3 PM - 7 PM)",
"OVN": "Overnight (7 PM - 6 AM)"
}
}

#### Reliable Roadways

chart:{
"type": "congestion3",
"file": "congestion_reliable_roads_2_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Percent or Miles Reliability"
},
"locations": [
{"value": "mpo", "label": "Greater Philadelphia"},
{"value": "ches", "label": "Chester County"},
{"value": "colh", "label": "Collegeville"},
{"value": "din", "label": "Dingmans Ferry"},
{"value": "hope", "label": "Hopewell"},
{"value": "pet", "label": "Peterborough"},
{"value": "prge", "label": "Prince George"}
],
"transportModes": {
"options": [
{"value": "int", "label": "Interstate"},
{"value": "nonint", "label": "Non-Interstate"}
]
},
"filters": {
"Value": [
{"value": "Miles", "label": "Miles"},
{"value": "Percent", "label": "Percent"}
]
}
}

<div class="mt-30">

</div>

#### Truck Travel Time Reliability (TTTR)

chart:{
"type": "congestion1",
"file": "congestion_tttr_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "congestion",
"type": "number"
},
"lines": [
{"key": "mpo", "name": "MPO Region"},
{"key": "hopewell", "name": "Hopewell"},
{"key": "petersburg", "name": "Petersburg"},
{"key": "colonial_heights", "name": "Colonial Heights"},
{"key": "chesterfield", "name": "Chesterfield"},
{"key": "dinwiddie", "name": "Dinwiddie"},
{"key": "prince_george", "name": "Prince George"}
]
}

#### Congestion Index

chart:{
"type": "congestion4",
"file": "congestion_pti_Fwy_loc-f1_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Planning Time Index",
"type": "number"
},
"locations": [
{"value": "MPO", "label": "MPO Region"},
{"value": "Hopewell", "label": "Hopewell"},
{"value": "Petersburg", "label": "Petersburg"},
{"value": "ColonialHeights", "label": "Colonial Heights"},
{"value": "Chesterfield", "label": "Chesterfield"},
{"value": "Dinwiddie", "label": "Dinwiddie"},
{"value": "PrinceGeorge", "label": "Prince George"}
],
"timePeriods": {
"AM": "Morning Peak",
"MD": "Midday",
"PM": "Evening Peak",
"INT": "Overnight",
"24": "24 Hour"
}
}

<div className="mt-30"> </div>

#### Travel Time Reliability

chart:{
"type": "congestion5",
"file": "congestion_reliability_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Reliability",
"type": "number",
"format": "percentage"
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
"filters": {
"value": [
{"value": "Percent", "label": "Percentage"},
{"value": "Miles", "label": "Miles"}
],
"Unit": [
{"value": "Interstate", "label": "Interstate"},
{"value": "Non Interstate", "label": "Non-Interstate"}
]
}
}

<div className="mt-30"> </div>

#### Peak Hour Excessive Delay

chart:{
"type": "congestion6",
"file": "congestion_reliability_phed-f4_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Hours of Delay",
"type": "number"
},
"lines": [
{"value": "TCA_UA", "name": "Tri-Cities Area"},
{"value": "RR_UA", "name": "Richmond Region"},
{"value": "Total_UA", "name": "Total Urban Area"}
],
"filters": {
"Scope": [
{"value": "Capita", "label": "Per Capita"},
{"value": "Total", "label": "Total"}
]
}
}

<div className="mt-30"> </div>

#### Truck Travel Time Reliability F3

chart:{
"type": "congestion7",
"file": "congestion_reliability_tttr-f3_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Travel Time Reliability Index",
"type": "number"
},
"locations": [
{"value": "MPO", "name": "MPO Region"},
{"value": "Hopewell", "name": "Hopewell"},
{"value": "Petersburg", "name": "Petersburg"},
{"value": "Colonial Heights", "name": "Colonial Heights"},
{"value": "Chesterfield", "name": "Chesterfield"},
{"value": "Dinwiddie", "name": "Dinwiddie"},
{"value": "Prince George", "name": "Prince George"}
]
}
