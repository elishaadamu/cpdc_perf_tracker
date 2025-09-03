Achieving the regional [Vision](https://www.dvrpc.org/plan/) of an equitable, resilient, sustainable Greater Philadelphia means investing in making our roads safe for all users. In 2021, the DVRPC Board adopted a Regional Vision Zero policy with the _Connections 2050_ Long-Range Plan. The City of Philadelphia adopted such a policy in 2016, joining an international movement which approaches traffic safety from the perspective that no loss of life is acceptable. The New Jersey Department of Transportation (NJDOT) and Pennsylvania Department of Transportation (PennDOT) each have adopted Toward Zero Deaths policies.

Vehicle crashes are currently the [single leading cause of unintentional death in the United States for all persons between 15 and 24 years of age](https://www.nhtsa.gov/book/countermeasures-that-work/young-drivers). Beyond the obvious trauma and grief for families and communities that result from a fatal crash, traffic fatalities also inflict significant economic costs on the region. The Federal Highway Administration (FHWA) estimates that there is a cost of approximately $11.3 million per fatality, and $655,000 per serious injury resulting from a crash. Between 2019 and 2023, there were almost 11,000 people killed or seriously injured in the region, totaling over $3.9 billion in economic costs.

Traffic violence is felt disproportionately throughout the region. Severe vehicle crashes occur most frequently in areas where roadway design enables high speeds, where there are large concentrations of carless households, and where people are more likely to travel by foot or bike. These areas also tend to be where populations of potential disadvantage, such as racial and ethnic minorities and low-income individuals, live. The concentration of severe crashes in these areas put these populations at higher risk of being killed or seriously injured in a crash. Beyond just reducing the overall instances of crashes resulting in deaths or serious injuries, the region has an obligation to ensure that potentially disadvantaged communities don't bear an unequal share of the burden caused by such crashes.

A study published in the _[Journal of Public Transportation](https://www.nctr.usf.edu/wp-content/uploads/2014/12/JPT17.4_Litman.pdf)_ found that traveling on commuter rail is 20 times safer than driving, while traveling on a transit bus is 60 times safer than driving. Continuing to improve the safety of transit passengers and employees will also move the region toward achieving its Vision and goals.

#### Individuals Killed or Seriously Injured (KSI) on Roadways by Geography

chart:{
"type": "transitSafety",
"file": "transit_safety_KSI_1_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Percentage of Total Miles",
"type": "number"
},
"locations": [
{"value": "mpo", "name": "MPO Region"},
{"value": "colh", "name": "Colonial Heights"},
{"value": "pet", "name": "Petersburg"},
{"value": "hope", "name": "Hopewell"},
{"value": "chest", "name": "Chesterfield"},
{"value": "din", "name": "Dinwiddie"},
{"value": "prg", "name": "Prince George"}
],
"timePeriods": {
"total": "Total",
"hmvmt": "Highway and Major Arterial",
"capita": "Per Capita"
},
"defaultOption": "total"
}

#### Individuals Killed or Seriously Injured (KSI) on Roadways by Crash Type

chart:{
"type": "transitSafety1",
"file": "transit_safety_type_2_fk.csv",
"xAxis": "year",
"yAxis": {
"label": "Percentage of Total Miles",
"type": "number"
},
"locations": [
{"value": "mpo", "name": "MPO Region"},
{"value": "colh", "name": "Colonial Heights"},
{"value": "pet", "name": "Petersburg"},
{"value": "hope", "name": "Hopewell"},
{"value": "chest", "name": "Chesterfield"},
{"value": "din", "name": "Dinwiddie"},
{"value": "prg", "name": "Prince George"}
],
"timePeriods": {
"total": "Total",
"hmvmt": "Highway and Major Arterial",
"capita": "Per Capita"
},
"filters": {
"Value": [
{"value": "Fatalities", "label": "Motorized Fatalities"},
{"value": "Serious_Injuries", "label": "Motorized Serious Injuries"},
{"value": "NMF", "label": "Non-Motorized Fatalities"},
{"value": "NMSI", "label": "Non-Motorized Serious Injuries"}
]
},
"defaultOption": "total"
}
