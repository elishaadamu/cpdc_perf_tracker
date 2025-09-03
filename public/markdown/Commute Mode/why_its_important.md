Increasing the share of people not driving their vehicles alone, such as **carpooling, taking public transit or working from home,** reduces congestion, lessens roadway maintenance needs, and can significantly decrease the region's carbon footprint. Increases in active modes like walking and biking can benefit public health and lower healthcare costs. Commute trips only make up a fifth of all trips but are the chief contributor to peak-period demand for transportation facilities—which can slow goods movement within, to, from, and through the region's roadways.

This indicator relates to the _Connections 2050_ Plan goal to integrate modes into an accessible, multimodal transportation network, with transit, walking, and biking serving as fundamental components.

#### Deficient Bridges by Ownership Type

chart:{
"type": "commute",
"file": "commute_modes_1_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Percentage of Commuters"
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
{"value": "bike", "label": "Bike"},
{"value": "bus", "label": "Bus"},
{"value": "ferry", "label": "Ferry"},
{"value": "mcyc", "label": "Motorcycle"},
{"value": "mo", "label": "Motor Other"},
{"value": "nsov", "label": "Non-SOV"},
{"value": "other", "label": "Other"},
{"value": "pool", "label": "Carpool"},
{"value": "rail", "label": "Rail"},
{"value": "sov", "label": "Drive Alone"},
{"value": "subw", "label": "Subway"},
{"value": "taxi", "label": "Taxi"},
{"value": "transit", "label": "Transit"},
{"value": "troll", "label": "Trolley"},
{"value": "walk", "label": "Walk"},
{"value": "wfh", "label": "Work from Home"}
]
},
"filters": {
"Value": [
{"value": "Residence", "label": "Residence"},
{"value": "Workplace", "label": "Workplace"}
]
}
}
