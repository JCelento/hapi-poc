const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const calculator = require('./calculator')

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
    },

    ], (err) => {
    server.start((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Server running at:', server.info.uri);
        }
        server.route(calculator);

    });
});
