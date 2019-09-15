'use strict'

function getParsedPayload(payload) {
    payload.firstNumber = parseInt(payload.firstNumber);
    payload.secondNumber = parseInt(payload.secondNumber);

    return payload;
}

module.exports = getParsedPayload;
