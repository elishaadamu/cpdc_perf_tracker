Federal regulations require all bridges that do not meet specified condition requirements to be inspected every two years at minimum by the bridge owner (state department of transportation, local government, or other); bridges in poor condition are inspected more frequently. These inspections rate the condition of various bridge elements. Each year, the Federal Highway Administration (FHWA) collects inspection data on the bridges that are more than 20 feet long, and stores it in their National Bridge Inventory (NBI).

FHWA analysis considers the deck, superstructure, and substructure ratings of bridges, and the culvert rating for culverts. A score between 0 and 9 is given for each component. Bridges with scores between 7 and 9 for all three components are rated "good," those with any component scores of 4 or lower are rated "poor." A bridge that doesn't fall into a good or poor rating is considered “fair”.

Most bridges in the NBI are on state roads, and are maintained by state departments of transportation. Some bridges are on local roads, and are maintained by local governments. Bridges maintained by turnpike and toll authorities, state parks, or other owners are categorized as Other.

The first chart shows the percentage of deficient bridges or total deficient bridges (using the ‘value type’ drop down menu). Turn legend items on or off to see trends by maintenance responsibility, and select a geography level of interest with the other drop down menu. The second chart mirrors the first, but shows values in thousands of square feet, or a count of total bridges depending on the value type selected, and ownership type. The third chart shows total bridge deck area or total number of bridges by good, fair, and poor condition rating. This chart combines all types of maintenance responsibility.

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
