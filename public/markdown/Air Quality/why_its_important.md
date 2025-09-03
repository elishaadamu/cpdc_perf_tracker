The U.S. Environmental Protection Agency (US EPA) has developed air quality standards for six "criteria" pollutants. Of these six pollutants, the DVRPC region has a history of violating the standards for two: ground-level ozone and fine particulate matter (PM<sub>2.5</sub>). This indicator measures how well the region is achieving the _Connections 2050_ Plan goal to improve air quality.

Ozone and PM<sub>2.5</sub> have been shown to impede healthy lung development in children and exacerbate breathing disorders in the general population, especially in the elderly. Additionally, exposure to PM<sub>2.5</sub> can aggravate heart conditions. In addition to higher costs for households and the healthcare system, poor air quality has economic implications including more days of missed work and school. Air pollution has been shown to have disproportionate effects on persons of color and low-income populations.

#### Days Violating National Ambient Air Quality Standards for Ozone and/or PM<sub>2.5</sub> by Value Type

chart:{
"type": "mixed",
"file": "aq_1-yearly_fk.csv",
"xAxis": "year",
"option": false,
"bars": [
{"key": "daysViolating", "name": "Days Violating", "color": "#ac6fb2"}
],
"lines": [
{"key": "fiveYearAvg", "name": "Five Years Avg", "color": "gray"}
]
}

#### Quarterly Unhealthy Days by Air Quality Index Level

chart:{
"type": "stacked",
"file": "aq_2-quarterly_fk.csv",
"xAxis": "quarteryear",
"option": true,
"optionKey": "type",
"optionLabel": "Select Pollutant Type",
"options": [
{"value": "Ozone", "label": "Ozone"},
{"value": "PM", "label": "Particulate Matter"}
],
"bars": [
{"key": "Unhealthy Sensitive PM", "name": "Unhealthy for Sensitive PM", "color": "#ff7d00", "type": "PM"},
{"key": "Unhealthy PM", "name": "Unhealthy PM", "color": "#fe0000", "type": "PM"},
{"key": "Very Unhealthy PM", "name": "Very Unhealthy PM", "color": "#8f3f98", "type": "PM"},
{"key": "Hazardous PM", "name": "Hazardous PM", "color": "#993400", "type": "PM"},
{"key": "Unhealthy Sensitive Ozone", "name": "Unhealthy Sensitive Ozone", "color": "#ff7e00", "type": "Ozone"},
{"key": "Unhealthy Ozone", "name": "Unhealthy Ozone", "color": "#fe0000", "type": "Ozone"},
{"key": "Very Unhealthy Ozone", "name": "Very Unhealthy Ozone ", "color": "#8f3f98", "type": "Ozone"},
{"key": "Hazardous Ozone", "name": "Hazardous Ozone", "color": "#993400", "type": "Ozone"}
]
}
