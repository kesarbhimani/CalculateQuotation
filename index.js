const service = require("./service")

async function getQuotation(loadsData, ratesData) {
    for (const loadsItem of loadsData) {
        for (const ratesItem of ratesData) {
            if (ratesItem.rules.AND) {
                service.checkMatchedAND(loadsItem, ratesItem);
            } else if (ratesItem.rules.OR) {
                service.checkMatchedOR(loadsItem, ratesItem);
            }
        }
    }
}

// Load data
const loadsData = require("./loads.json")
const ratesData = require("./rates.json")

getQuotation(loadsData, ratesData);
