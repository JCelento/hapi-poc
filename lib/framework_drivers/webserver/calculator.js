'use strict'
const Joi = require('joi');
const calculatorController = require('../../interface_adapters/controllers/calculatorController');

 const routes = [{
    path: '/api/add',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            reply(calculatorController.sumNumbers(request));
        },
        description: 'Get algebraic sum',
        notes: 'Pass two numbers as firstNumber & secondNumber and returns sum',
        tags: ['api'],
        validate: {
            payload: {
                firstNumber: Joi.number()
                    .required(),
                secondNumber: Joi.number()
                    .required(),
            }
        }
    }
},
{
    path: '/api/diff',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            reply(calculatorController.subtractsNumbers(request));
        },
        description: 'Get algebraic difference',
        notes: 'Pass two numbers as firstNumber & secondNumber and returns difference',
        tags: ['api'],
        validate: {
            payload: {
                firstNumber : Joi.number()
                    .required(),
                secondNumber : Joi.number()
                    .required(),
            }
        }
    }
},

{
    path: '/api/prod',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            reply(calculatorController.multiplyNumbers(request));
        },
        description: 'Get algebraic product',
        notes: 'Pass two numbers as firstNumber & secondNumber and returns product',
        tags: ['api'],
        validate: {
            payload: {
                firstNumber : Joi.number()
                    .required(),
                secondNumber : Joi.number()
                    .required(),
            }
        }
    }
},

    {
    path: '/api/div',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            reply(calculatorController.divideNumbers(request));
        },
        description: 'Get algebraic division',
        notes: 'Pass two numbers as firstNumber & secondNumber and returns quotient',
        tags: ['api'],
        validate: {
            payload: {
                firstNumber : Joi.number()
                    .required(),
                secondNumber : Joi.number()
                    .required(),
            }
        }
    }
},

{
    path: '/api/rem',
    method: 'POST',
    config: {
        handler: (request, reply) => {
            reply(calculatorController.getRemainderOfNumbers(request));
        },
        description: 'Get algebraic remainder',
        notes: 'Pass two numbers as firstNumber & secondNumber and returns remainder',
        tags: ['api'],
        validate: {
            payload: {
                firstNumber : Joi.number()
                    .required(),
                secondNumber : Joi.number()
                    .required(),
            }
        }
    }
}];

 module.exports = routes;
