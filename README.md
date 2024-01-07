# CalculateQuotation
The project calculates quotation of loads from loads.json file based on the condition given in rates.json file.

## Getting Started
 
Open the terminal and navigate to the root directory and run `node index.js`.

## Scenarios Observed

Following are the scenarios that I observed:

1. In the loads.json file, the load with ID `646745dddcd0451619cccf09` fulfills both the conditions specified in the rates.json file. As a result, the quotation for this load is calculated twice—once for each set of conditions in rates.json.

2. For the load with ID `646745dddcd0451619cccf11` from loads.json, none of the specified conditions in rates.json are fulfilled. So, the quotation for this load is not calculated.
