Bridges enable mobility and commerce throughout the region. Federal transportation legislation requires state departments of transportation to use a Lowest Life Cycle Cost (LLCC) approach to maximize the life of a bridge at the lowest cost. LLCC emphasizes preservation and promotes the right treatment at the right time, while incorporating risk into the analysis. Bridges with a poor condition rating indicate maintenance needs that do not pose safety issues, as long as they are resolved in a timely manner.

This indicator reflects the _Connections 2050_ Plan goal to rebuild and modernize the region’s transportation assets in order to achieve and maintain a state-of-good repair.

#### Percentage of Deficient Bridges by Ownership Type

chart:{
"type": "line",
"file": "Bridge_Conditions_1_fk.csv",
"xAxis": "year",
"yAxis": {
"type": "percentage"
},
"option": true,
"optionKey": "Value",
"optionLabel": "Select Condition Type",
"options": [
{"value": "Bridge", "label": "Bridge Condition"},
{"value": "Deck", "label": "Deck Condition"}
],
"ownershipType": {
"label": "Select Ownership",
"options": [
{"value": "All", "label": "All"},
{"value": "State", "label": "State"},
{"value": "Local", "label": "Local"},
{"value": "Other", "label": "Other"}
]
},
"lines": [
{"key": "MPO- All", "name": "MPO", "type": "All"},
{"key": "MPO- State", "name": "MPO", "type": "State"},
{"key": "MPO- Local", "name": "MPO", "type": "Local"},
{"key": "MPO- Other", "name": "MPO", "type": "Other"},
{"key": "Hopewell All Counties- All", "name": "Hopewell", "type": "All"},
{"key": "Hopewell All Counties- State", "name": "Hopewell", "type": "State"},
{"key": "Hopewell All Counties- Local", "name": "Hopewell", "type": "Local"},
{"key": "Hopewell All Counties- Other", "name": "Hopewell", "type": "Other"},
{"key": "Petersburg Suburbs- All", "name": "Petersburg", "type": "All"},
{"key": "Petersburg Suburbs- State", "name": "Petersburg", "type": "State"},
{"key": "Petersburg Suburbs- Local", "name": "Petersburg", "type": "Local"},
{"key": "Petersburg Suburbs- Other", "name": "Petersburg", "type": "Other"},
{"key": "Colonial Heights Suburbs- All", "name": "Colonial Heights", "type": "All"},
{"key": "Colonial Heights Suburbs- State", "name": "Colonial Heights", "type": "State"},
{"key": "Colonial Heights Suburbs- Local", "name": "Colonial Heights", "type": "Local"},
{"key": "Colonial Heights Suburbs- Other", "name": "Colonial Heights", "type": "Other"},
{"key": "Chesterfield- All", "name": "Chesterfield", "type": "All"},
{"key": "Chesterfield- State", "name": "Chesterfield", "type": "State"},
{"key": "Chesterfield- Local", "name": "Chesterfield", "type": "Local"},
{"key": "Chesterfield- Other", "name": "Chesterfield", "type": "Other"},
{"key": "Dinwiddie- All", "name": "Dinwiddie", "type": "All"},
{"key": "Dinwiddie- State", "name": "Dinwiddie", "type": "State"},
{"key": "Dinwiddie- Local", "name": "Dinwiddie", "type": "Local"},
{"key": "Dinwiddie- Other", "name": "Dinwiddie", "type": "Other"},
{"key": "Prince George- All", "name": "Prince George", "type": "All"},
{"key": "Prince George- State", "name": "Prince George", "type": "State"},
{"key": "Prince George- Local", "name": "Prince George", "type": "Local"},
{"key": "Prince George- Other", "name": "Prince George", "type": "Other"}
]
}

#### Deficient Bridges by Ownership Type

chart:{
"type": "bridgeStacked",
"file": "Bridge_Conditions_2_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Square Feet (Thousands)",
"showValues": true,
"valueLabel": {
"position": "inside",
"fontSize": 12,
"fill": "#000000"
}
},
"options": [
{"value": "Bridge", "label": "Number of Bridges"},
{"value": "Deck", "label": "Bridge Deck Area"}
],
"bars": [
{"key": "MPO- All", "name": "All", "type": "All"},
{"key": "MPO- State", "name": "State", "type": "State"},
{"key": "MPO- Local", "name": "Local", "type": "Local"},
{"key": "MPO- Other", "name": "Other", "type": "Other"}
],
"defaultOption": "Bridge"
}

#### Bridges by Condition

chart:{
"type": "bridgeStacked1",
"file": "Bridge_Conditions_3_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Square Feet (Thousands)",
"showValues": true,
"valueLabel": {
"position": "inside",
"fontSize": 12,
"fill": "#000000"
}
},
"options": [
{"value": "Deck", "label": "Bridge Deck Area"},
{"value": "Bridge", "label": "Number of Bridges"}
],
"bars": [
{"key": "MPO- All", "name": "All", "type": "All"},
{"key": "MPO- Poor", "name": "Poor", "type": "Poor"},
{"key": "MPO- Fair", "name": "Fair", "type": "Fair"},
{"key": "MPO- Good", "name": "Good", "type": "Good"}
],
"defaultOption": "Deck"
}
