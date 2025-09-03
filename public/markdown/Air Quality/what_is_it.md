The DVRPC region currently does not meet federal air quality standards for ground-level ozone and until recently did not meet the standards for PM<sub>2.5</sub>. In order to maintain and improve air quality in the region, the Clean Air Act requires that DVRPC demonstrate that transportation projects included in the Long-Range Plan and Transportation Improvement Programs will not worsen air quality or cause future violations of the air quality standards.

In order to convey the health impacts of air pollution to the general public, the US EPA has created a color-coded scale to identify pollutant levels in simple terms. This scale is referred to as the Air Quality Index (AQI). AQI levels are directly related to the federal air quality standards and pollutant concentrations in the air. The AQI reports pollutant levels for six different categories based on AQI: Good or green (0 to 50), Moderate or yellow (51 to 100), Unhealthy for Sensitive Groups or orange (101 to 150), Unhealthy or red (151 to 200), Very Unhealthy or purple (201 to 300), and Hazardous (301 to 500). Note that no day in 2000 or subsequent years has qualified as hazardous, so it is not present in the charts. Sensitive groups are defined as children, older adults, and those with breathing impairments. When the AQI reaches Code Orange or higher for any of the pollutants, an air quality standard violation has occurred.

Air quality standards have been revised a number of times since 1997, and the data in these charts is normalized to the current standard. The first chart shows the number of days violating air quality standards per year since 2000, along with a five-year rolling average, based on the Philadelphia-Camden-Wilmington core-based statistical area. The second chart shows the number of days per year in each violating category (Unhealthy for Sensitive Groups, Unhealthy, Very Unhealthy, and Hazardous) for both Ozone and PM<sub>2.5</sub>.

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
