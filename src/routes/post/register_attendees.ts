import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { registerAttendeeController } from '../../controllers/register/registerAttendee.js';




export async function registerAttendeesForEventRoute(server: FastifyInstance) {

    server.withTypeProvider<ZodTypeProvider>().post('/attendee', {
        schema:{
            summary: 'Register Attendee',
            tags: ['Attendee for Event'],
        }
    }, registerAttendeeController)

}