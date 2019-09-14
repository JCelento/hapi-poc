'use strict';

const divideNumbers = require('../../business_rules/use_cases/divide/divideHandler');

function getDivisionOfNumbers (firstNumber, secondNumber){
    return divideNumbers(firstNumber,secondNumber);
}

module.exports = getDivisionOfNumbers;
