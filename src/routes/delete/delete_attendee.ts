import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { deleteAttedee } from '../../controllers/deleteData/delAttendee.js';




export async function deleteAttendeeById(server:FastifyInstance) {

    server.withTypeProvider<ZodTypeProvider>().delete('/attendee/:attendeeId', {
        schema:{
            summary: 'Delete Attendee',
            tags: ['Attendee']

        }
    }, deleteAttedee)
}