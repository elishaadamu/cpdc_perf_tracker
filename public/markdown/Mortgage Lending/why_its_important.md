Homeownership remains a key mechanism for households to gain and build wealth and, subsequently, pass it on to their children—referred to as generational wealth. For decades, opportunities for generational wealth building have been systematically denied on the basis of race and ethnicity. Furthermore, prior to 1974, women without a husband to co-sign on a mortgage could either be denied or given higher interest rates on their bank loans. While this practice of redlining is no longer legal, racial, ethnic, and geographic disparities in mortgage lending persist. Equitable access to loans is critical to the economic vitality and resiliency of the Greater Philadelphia region and its residents.

This criterion aligns with the _Connections 2050_ Plan goal to foster racially and socioeconomically integrated communities.

#### Mortgage Lending Disparities by Gender and Race/Ethnicity

chart:{
"type": "mortgage1",
"file": "mortgage_lending_1a_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Mortgage Lending Disparities"
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
"transportModes": {
"options": [
{"value": "female", "label": "Female "},
{"value": "latinx", "label": "Latinx "},
{"value": "asian", "label": "Asian "},
{"value": "black", "label": "Black "},
{"value": "minority", "label": "Minority "}
]
},
"filters": {
"Value": [
{"value": "All", "label": "All Loan Types"},
{"value": "Refinancing", "label": "Refinancing Loans"},
{"value": "Home Purchase", "label": "Home Purchase Loans"},
{"value": "Home Improvement", "label": "Home Improvement Loans"}
]
}
}

<div className="markdown-chart mt-25">

#### Mortgage Lending Demographics by Application Type

chart:{
"type": "mortgage1",
"file": "mortgage_lending_2a_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Mortgage Lending Demographics"
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
"transportModes": {
"options": [
{"value": "female", "label": "Female "},
{"value": "male", "label": "Male "},
{"value": "nonlatinx", "label": "Non-Latinx "},
{"value": "asian", "label": "Asian "},
{"value": "black", "label": "Black "},
{"value": "minority", "label": "Minority "},
{"value": "white", "label": "White "}
]
},
"filters": {
"Value": [
{"value": "All", "label": "All Loan Types"},
{"value": "Home Purchase", "label": "Home Purchase Loans"},
{"value": "Home Improvement", "label": "Home Improvement Loans"},
{"value": "Refinancing", "label": "Refinancing Loans"}
]
}
}

<div className="markdown-chart mt-25">

#### Total Mortgage Lending Volume by Demographic Group

chart:{
"type": "mortgage1",
"file": "mortgage_lending_3a_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Total Mortgage Lending Volume"
},
"isPercentage": false,
"locations": [
{"value": "MPO", "name": "MPO Region"},
{"value": "Hopewell", "name": "Hopewell"},
{"value": "Petersburg", "name": "Petersburg"},
{"value": "ColonialHeights", "name": "Colonial Heights"},
{"value": "Chesterfield", "name": "Chesterfield"},
{"value": "Dinwiddie", "name": "Dinwiddie"},
{"value": "PrinceGeorge", "name": "Prince George"}
],
"transportModes": {
"options": [
{"value": "female", "label": "Female "},
{"value": "male", "label": "Male "},
{"value": "latinx", "label": "Latinx "},
{"value": "nonlatinx", "label": "Non-Latinx "},
{"value": "asian", "label": "Asian "},
{"value": "black", "label": "Black "},
{"value": "minority", "label": "Minority "},
{"value": "white", "label": "White "}
]
},
"filters": {
"Value": [
{"value": "All", "label": "All Loan Types"},
{"value": "Home Improvement", "label": "Home Improvement Loans"},
{"value": "Refinancing", "label": "Refinancing Loans"},
{"value": "Home Purchase", "label": "Home Purchase Loans"}
]
}
}
