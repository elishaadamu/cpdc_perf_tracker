Growth or decline in the total number of jobs is one of the primary tools for measuring the economic strength of a region. Job growth in one geographic area could indicate a need for more transportation infrastructure to support those workers' commutes, for example. When employers locate in centers around the region, employees can benefit from more commuting options and lower costs, better access to amenities, and more spontaneous interactions, which can lead to knowledge transfer and information sharing.

A decline in jobs in a particular industry may signal a need for investment to support those businesses or, alternatively, to establish job retraining programs to transition employees to industries of the future. Job totals, alone, are not a good indicator of the quality or desirability of those jobs. For example, if higher-paying jobs are being replaced by lower-paying jobs, quality of life could still be declining overall.

The _Connections 2050_ Plan envisions equitable economies which expand economic mobility by attracting and creating more good-paying jobs, and increasing access to capital for everyone. Equitable economies expand opportunity in communities that have been historically marginalized and denied access to desirable jobs with good pay.

#### Job Growth by Employment Type and Location

chart:{
"type": "jobs",
"file": "jobs_graph-f1_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Annual Change Rate (%)"
},
"locations": [
{"value": "region", "label": "Region"},
{"value": "hw", "label": "Hopewell"},
{"value": "pe", "label": "Petersburg"},
{"value": "co", "label": "Colonial Heights"},
{"value": "che", "label": "Chesterfield"},
{"value": "din", "label": "Dinwiddie"},
{"value": "pg", "label": "Prince George"}
],
"transportModes": {
"options": [
{"value": "total", "label": "Total Employment"},
{"value": "wagesalary", "label": "Wage and Salary"},
{"value": "proprietors", "label": "Proprietors"}
]
},
"filters": {
"Value": [
{"value": "Annual", "label": "Annual Change Rate"},
{"value": "Total", "label": "Total Employment"},
{"value": "Base", "label": "Base Year Change"}
]
}
}
