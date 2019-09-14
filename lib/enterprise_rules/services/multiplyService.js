'use strict';

const multiplyNumbers = require('../../business_rules/use_cases/multiply/multiplyHandler');

function getProductOfNumbers (firstNumber, secondNumber){
    return multiplyNumbers(firstNumber,secondNumber);
}

module.exports = multiplyNumbers;
