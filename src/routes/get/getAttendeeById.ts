import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { getAttendeeByid } from '../../controllers/getData/getById.js';



export async function getAttendeeByIdRoute(server:FastifyInstance) {
    server.withTypeProvider<ZodTypeProvider>().get('/attendee/:attendeeId', {
        schema:{
            summary: 'Get Attendee',
            tags: ['Attendee'],
        },

    }, getAttendeeByid)
}