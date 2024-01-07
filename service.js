const checkMatchedAND = (loads, rates) => {
    let quotation;

    // Extract AND rules from rates
    const andRules = rates.rules.AND;

    // Check if loads satisfies all AND conditions
    if (andRules[0].type_of_load.includes(loads.type_of_load) &&
        loads.caller === andRules[1].caller &&
        loads.containerSize === andRules[2].containerSize &&
        loads.overWeight === andRules[3].overWeight) {

        quotation = calculateQuotation(loads.distance, rates.amountWithRange);

        console.log("Load: ", loads);
        console.log("Quotation: ", quotation);
        console.log("--------------------------------------------");

        return;
    }

};

const checkMatchedOR = (loads, rates) => {
    let quotation;

    // Extract OR rules from rates
    const orRules = rates.rules.OR;

    // Check if loads satisfies any OR condition
    if (
        (orRules[0].type_of_load.includes(loads.type_of_load) ||
            loads.caller === orRules[1].caller ||
            loads.containerOwner === orRules[2].containerOwner ||
            loads.overWeight === orRules[3].overWeight)
    ) {
        quotation = calculateQuotation(loads.distance, rates.amountWithRange);

        console.log("Loads: ", loads);
        console.log("Quotation: ", quotation);
        console.log("--------------------------------------------");

        return;
    }


};

// Calculate quotation based on the distance
const calculateQuotation = (distance, rateRanges) => {

    // Find the matching range for the given distance
    const matchingRange = rateRanges.find(range => distance >= range.start && distance < range.end);

    if (matchingRange) {
        switch (matchingRange.type) {
            case "fixed":
                return matchingRange.amount;
            case "perunit":
                return distance * matchingRange.amount;
            default:
                console.log("Rate not supported", matchingRange.type);
                return null;
        }
    } else {
        console.log("No matching range found for the distance:", distance);
        return null;
    }
}

module.exports = {
    checkMatchedAND,
    checkMatchedOR
}