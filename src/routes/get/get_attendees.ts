import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { getAttendee } from '../../controllers/getData/getAttendee.js';



export async function getAttendeeBadgeRoute(server:FastifyInstance) {
    server.withTypeProvider<ZodTypeProvider>().get('/attendee/:attendeeId/badge', {
        schema:{
            summary: 'Get Evente',
            tags: ['Events'],
        },

    }, getAttendee)
}