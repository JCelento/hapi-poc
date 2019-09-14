'use strict';

const subtractNumbers = require('../../business_rules/use_cases/subtract/subtractionHandler');

function getSubtractionOfNumbers (firstNumber, secondNumber) {
    return subtractNumbers(firstNumber,secondNumber);
}

module.exports = getSubtractionOfNumbers;
