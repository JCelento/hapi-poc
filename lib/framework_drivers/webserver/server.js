const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const getProductOfNumbers = require('../../enterprise_rules/services/multiplyService');
const getDivisionOfNumbers = require('../../enterprise_rules/services/divideService');
const getDiffOfNumbers = require('../../enterprise_rules/services/subtractService');
const getRemainderOfNumbers = require('../../enterprise_rules/services/remainderService');
const getSumOfNumbers = require('../../enterprise_rules/services/sumService');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});

const options = {
    info: {
        'title': 'Test API Documentation',
        'version': '0.0.1',
    }
};

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
    server.start((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Server running at:', server.info.uri);
        }

        // returns sum
        server.route({
            path: '/api/add',
            method: 'POST',
            config: {
                handler: (request, reply) => {
                    reply(getSumOfNumbers(parseInt(request.payload.firstNumber), parseInt(request.payload.secondNumber)));
                },
                description: 'Get algebraic sum',
                notes: 'Pass two numbers as firstNumber & secondNumber and returns sum',
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
        });

        server.route({
            path: '/api/diff',
            method: 'POST',
            config: {
                handler: (request, reply) => {
                    reply(getDiffOfNumbers(parseInt(request.payload.firstNumber), parseInt(request.payload.secondNumber)));
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
        });

        server.route({
            path: '/api/prod',
            method: 'POST',
            config: {
                handler: (request, reply) => {
                    reply(getProductOfNumbers(parseInt(request.payload.firstNumber), parseInt(request.payload.secondNumber)));
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
        });

        server.route({
            path: '/api/div',
            method: 'POST',
            config: {
                handler: (request, reply) => {
                    reply(getDivisionOfNumbers(parseInt(request.payload.firstNumber), parseInt(request.payload.secondNumber)));
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
        });

        server.route({
            path: '/api/rem',
            method: 'POST',
            config: {
                handler: (request, reply) => {
                    reply(getRemainderOfNumbers(parseInt(request.payload.firstNumber), parseInt(request.payload.secondNumber)));
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
        });

    });
});
