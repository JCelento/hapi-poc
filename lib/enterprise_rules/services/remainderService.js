'use strict';

const remainderOfNumbers = require('../../business_rules/use_cases/remainder/remainderHandler');

function getRemainderOfNumbers (firstNumber, secondNumber){
    return remainderOfNumbers(firstNumber,secondNumber);
}

module.exports = getRemainderOfNumbers;
