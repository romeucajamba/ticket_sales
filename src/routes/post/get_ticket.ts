import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { getAttendeeTicket } from '../../controllers/register/get_ticket_attendee.js';



export async function getTicketAttendeeRoute(server: FastifyInstance) {
    server.withTypeProvider<ZodTypeProvider>().post('/attendees/:idAttendee/ticket', {
        schema:{
            summary: 'Get Ticket',
            tags: ['Ticket'],

        },

    }, getAttendeeTicket )
}