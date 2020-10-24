# Yoda-Soda-covid19-vaccine-distribution-model
The project will provide data modelling for how to effectively distribute COVID-19 vaccines. This will provide the Government with a tool to send out resources to the exact location targeting specific areas with a specific amount of immunisation targets, allowing them to use their resources with utmost efficiency. Vaccines will be limited because of the high demand that they will carry. Deciding on where and who will need to be vaccinated to effectively stop the spread of the virus and to reach herd immunity. Website: https://govhack-hackerknights.github.io/CovidVaccineReady/


# All code and visualisation resources:

- Python analysis: https://github.com/oxfordhalfblood/covid-hackerknights/pull/1
- Tableau Dashboard: https://public.tableau.com/profile/nazmul.kaonine#!/vizhome/CovidVaccinesAustralia/Dashboard1

- Google Drive: https://drive.google.com/drive/folders/1JTrpLWQicNSjp1v-lfo4IqDpzwnVScxk


## Data Story

It’s December 2020. There are long winded queues in front of the pharmacies and vaccine distribution centers. The Australian government only has a very limited number of vaccines. The population is desperate to return to normality and the vaccine is the only key to achieving this. For the government to reach the minimum requirement herd immunity needs to be reached. With a population of 25 million and barely 15 million vaccines. How will the government succeed in effectively distributing the vaccines?

Fortunately, a small team called the Hacker-Knights come to the rescue.

A novel way of achieving herd immunity and a simple prediction tool with intuitive visualisation filters, that will assist the government in taking control of COVID-19 in the most efficient manner:

The datasets that were used in the creation of this project come from various sources including Australian Bureau of Statistics, Github open source data and Australia Population (2020)  Worldometer.

All the datasets are presented in a csv format. One of the major challenges has been to extract precisely the most relevant data by combining different unstructured datasets into a single effective aggregated dataset that has been normalised. Having the monthly statewise covid cases, deaths and population we extrapolated the number of vaccines needed for each region and improved the prediction efficiency using factors such as employment and unemployment. An interactive visualisation web dashboard(shown in the video) has been provided for easy access to the above mentioned resources. The system currently predicts up and till march 2021. This is currently static for simplicity reasons but would be a simple task to be generated dynamically if enough time was given. 

Future improvements can include more granular data down to the suburb level to gain more insightfully distribution suggestions. This could not have been added in the current iteration due to the obvious privacy concerns of publicly accessible data on those detailed levels. Fortunately the prototype was built to allow any granular level of data to be fed into this proposed model depending on the requirements.

Data Sources:

- https://github.com/M3IT/COVID-19_Data covid cases
- https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/3101.0Dec%202019?OpenDocument population till Dec 2019 and combined with https://www.worldometers.info/world-population/australia-population/ rates for getting the 2020 population
- https://www.abs.gov.au/Employment-and-Unemployment Employment Unemployment
