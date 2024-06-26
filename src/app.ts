import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastifyCors } from '@fastify/cors';
import {  ZodError } from 'zod';


//Get routes
import { getAttendeeBadgeRoute } from './routes/get/get_attendees.js';
import { getAttendeeByIdRoute } from './routes/get/getAttendeeById.js';

//Post routes
import { registerAttendeesForEventRoute } from './routes/post/register_attendees.js';
import { getTicketAttendeeRoute } from './routes/post/get_ticket.js';

//Delete Routes
import { deleteAttendeeById } from './routes/delete/delete_attendee.js';



export const server = fastify()

server.register(fastifyCors, {
    origin: '*',
})

server.register( fastifySwagger, {
    swagger :{
        costumes:['application/json'],
        produces: ['application/json'],
        info: {
            title: 'Ticket',
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
server.register(getAttendeeBadgeRoute)
server.register(getAttendeeByIdRoute)


//POST
server.register(registerAttendeesForEventRoute)
server.register(getTicketAttendeeRoute)

//Delete
server.register(deleteAttendeeById)

server.setErrorHandler((error, request, reply) => {
    if(error instanceof ZodError){
        return reply.status(400).send({message:'Erro de validação.', issues: error.format()})
    }

    return reply.status(500).send({message:'Erro interno no servidor'})
})

