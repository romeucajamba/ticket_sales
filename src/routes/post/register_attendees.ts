import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { registerAttendeeController } from '../../controllers/handlerCreate/registerAttendee.js';




export async function registerAttendeesForEventRoute(server: FastifyInstance) {

    server.withTypeProvider<ZodTypeProvider>().post('/events/:eventId/attendee', {
        schema:{
            summary: 'Register Attendee',
            tags: ['Attendee for Event'],
        }
    }, registerAttendeeController)

}