For more resources on air quality and ways DVRPC is working with its partners to combat pollution, explore DVRPC’s [Air Quality Partnership](http://www.airqualitypartnership.org/).

DVRPC’s _[Municipal Implementation Toolbox](https://www.dvrpc.org/Plan/MIT/)_ suggests the following tools for improving air quality in our region:

- [Alternative Energy Ordinance](https://www.dvrpc.org/Plan/MIT/alternativeenergyordinance)
- [Clean Energy Supply](https://www.dvrpc.org/Plan/MIT/cleanenergysupply)
- [Electric Vehicles](https://www.dvrpc.org/Plan/MIT/electricvehicles)
- [Greenhouse Gas Reduction Targets and Climate Action Plans](https://www.dvrpc.org/Plan/MIT/greenhousegasreductiontargetsandclimateactionplans)
- [Street Tree Ordinance and Management Plan](https://www.dvrpc.org/Plan/MIT/streettreeordinanceandmanagementplan)

Tracking the Congestion Management and Air Quality (CMAQ) program's performance in reducing on-road mobile source emissions is one of the National Goals set by the Federal Highway Administration’s Transportation Performance Management (TPM). DVRPC is required to either set regional targets or match state department of transportation targets for emissions reductions from mobile-source emissions. See how the region is performing: [TPM System Performance](https://www.dvrpc.org/tpm/?indicator=systemperf).

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
