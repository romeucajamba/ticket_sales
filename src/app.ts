import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastifyCors } from '@fastify/cors';

//Get routes



//Post routes


//Delete Routes

//import { errorHandler } from './error/errorHandler.js';



export const server = fastify()

server.register(fastifyCors, {
    origin: '*',
})

server.register( fastifySwagger, {
    swagger :{
        costumes:['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass in',
            description: 'API para criação de eventos da Global Services Corporation',
            version:'1.0.0'
        },
    },
    transform: jsonSchemaTransform,
})

server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);


//Middlewers
//GET



//POST


//Delete


//server.setErrorHandler(errorHandler)
