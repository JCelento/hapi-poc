'use strict';

const getParsedPayload = require('../parsers/numberParser');
const getProductOfNumbers = require('../../enterprise_rules/services/multiplyService');
const getDivisionOfNumbers = require('../../enterprise_rules/services/divideService');
const getDiffOfNumbers = require('../../enterprise_rules/services/subtractService');
const getRemainderOfNumbers = require('../../enterprise_rules/services/remainderService');
const getSumOfNumbers = require('../../enterprise_rules/services/sumService');

module.exports = {

    async sumNumbers(request) {
        const { firstNumber, secondNumber } = getParsedPayload(request.payload);
        return await getSumOfNumbers(firstNumber, secondNumber);
    },

    async subtractsNumbers(request) {
        const { firstNumber, secondNumber } = getParsedPayload(request.payload);
        return await getDiffOfNumbers(firstNumber, secondNumber);
    },

    async divideNumbers(request) {
        const { firstNumber, secondNumber } = getParsedPayload(request.payload);
        return await getDivisionOfNumbers(firstNumber, secondNumber);
    },

    async multiplyNumbers(request) {
        const { firstNumber, secondNumber } = getParsedPayload(request.payload);
        return await getProductOfNumbers(firstNumber, secondNumber);
    },

    async getRemainderOfNumbers(request) {
        const { firstNumber, secondNumber } = getParsedPayload(request.payload);
        return await getRemainderOfNumbers(firstNumber, secondNumber);
    }

};
