From 2006 to 2023, both commuters _living_ and _working_ in the region have overall increasingly used alternative options relative to driving alone to work—the non-single occupant vehicle (SOV) commute share has increased by 10.8%, as seen in the first and second charts. The region had been on a slight upward trend for non-SOV use through 2019. The Covid pandemic brought about an unprecedented 11% decrease in drive alone commutes, while working from home shot up by 18% and public transit commutes dropped by nearly 5%. In 2022, there was about a 3% increase in drive alone commutes, with an even greater decrease in working from home as other non-SOV modes gained, particularly public transit, carpooling, and walking. 2023 saw a slight increase in SOV commutes, another decline in working from home, and continued growth in public transit, carpooling, and walking commutes.

In the region’s _urban areas_ (UAs), from 2009 to 2023, the percentage of commuters using means other than driving alone increased by nearly 9% in the Philadelphia UA, and about 11% in the Trenton urban area (shown in the third chart). However, the percentage of commuters using public transit declined by nearly 3% in the Philadelphia UA, and about 1% in the Trenton UA over that time period. There was a 14% rise in working from home in both UAs over that timeframe which has driven the increases in non-SOV travel.

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
