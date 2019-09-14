'use strict';

const sumNumbers = require('../../business_rules/use_cases/sum/sumHandler');

function getSumOfNumbers (firstNumber, secondNumber) {
    return sumNumbers(firstNumber,secondNumber);
}

module.exports = getSumOfNumbers;
