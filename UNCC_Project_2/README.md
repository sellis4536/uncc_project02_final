# UNCC_Project_2

## Contributors:
Matthew Carty: https://www.linkedin.com/in/matthew-carty-135b51139/

Steve Ellis: https://github.com/sellis4536

Tyler Tompa: https://github.com/tylertompa

### Note:
The dataset for this project is too large for Github.  Please see the following link for the data: https://www.dropbox.com/s/fxr9us998qqgq9x/project_2.zip?dl=0.  Once download, please put the "Data" folder in the root directory (Project 2, so that it's adjacent to app.py and the templates folder).

Data Discovery Analysis
Individual Federal Campaign Contributions: Presidential, General Election, 2016 
Data Source: U.S. Federal Elections Commission: https://www.fec.gov/data/browse-data/?tab=candidates

Dataset Overview:
Data preparation begins with the collection of Federal Election Commission (FEC) data on a segment of contributions made to two federal campaign committees associated with two federal candidates -- Hillary Clinton and Donald Trump.
The timeframes for the final set of contributions starts at the beginning of the general election, i.e. when the two candidates became the official nominee for their respective parties and runs through 12/31/2016:
Hillary Clinton: nomination/start date 7/26/2016 (159 days to end of calendar year)
Donald Trump: nomination/start date 7/19/2016 (166 days to end of calendar year)

Dataset Qualifications:
Initial acquisition of FEC data included the full inventory of itemized contributions to all federal candidates between 1/1/2013 to 12/31/2016 (designated the 2016 Election Cycle). The file, totaling 20.3 million contributions, represents over $1.45 Billion in gross revenue to federal campaigns for President, House and Senate.
Data selects were completed on the initial set to isolate itemized contributions made to the principal campaign committees of Hillary Clinton (Hillary for America, FEC ID C00575795) and Donald Trump (Donald J. Trump for President, Inc., FEC ID C00580100).  The campaign committee will be represented throughout this project with the designations HRC for Hillary for America and DJT for Donald J. Trump for President, Inc.
The final datasets for analysis consist of a CONTRIBUTIONS TABLE containing 1,800,321 itemized contributions totaling $153.3M in campaign revenue:
HRC = 1,718,315 itemized contributions totaling $108M in campaign revenue
DJT = 82,006 itemized contributions totaling $45.3M in campaign revenue.
PEOPLE TABLE = 383,272 donors making 1,800,321 itemized contributions totaling $153.3M in campaign revenue.
HRC = 325,640 donors making 1,718,315 contributions totaling $108M in campaign revenue.
DJT = 57,632 donors making 82,006 contributions totaling $45.3M in campaign revenue.

## Contributions by State ##
Bar Chart shows the total contribution amounts for each candidate by state.  Both candidates received contributions from all fifty states, in addition to US territories and armed services locations.  New York represents the largest contribution state for both campaigns, boosted by individual contributions by both candidates to their respective, NY based campaigns.

## Incremental revenue ##
Contribution data was analyzed with a day by day accounting of itemized individual revenue collected by the two campaigns.   The daily figures are compared to the grand total of itemized individual donations for the full campaign cycle. The starting points for this comparison are as follows:
HRC, Coverage dates: 01/01/2013 to 12/31/2016. Total Itemized individual contributions $300,115,258 dollars, 36% of itemized individual contribution revenue raised in the general election timeframe, 7/26/16 - 12/31/2016.
DJT, Coverage dates: 04/02/2015 to 12/31/2016. Total Itemized individual contributions 46,982,264 dollars, 96% of itemized individual contribution revenue raised in the general election timeframe, 7/19/2016 - 12/31/2016

## Contributor Employer Analysis ##

Federal reporting requirements for itemized donations include self-reported employer and occupation.  While inconsistent, this data offers insight for industry and institutional support for a candidate.  In 2016, both candidates maintain frequently observed levels of support from retired, self employed and unemployed (including homemaker) donors.  In the case of HRC, employees of notable brand names and institutions represent a significant percentage of revenue