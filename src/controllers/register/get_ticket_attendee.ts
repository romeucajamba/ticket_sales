import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { InsertTicketUseCase } from '../useCases/getTicketAttendee.js';
import { BadRequest } from '../../error/badRequest.js';
import { TicketRepository } from '../../repositories/insertTicket.js';




export async function getAttendeeTicket(request: FastifyRequest, reply: FastifyReply) {
    const schemaTicketId = z.object({
        idAttendee: z.string().uuid(),
    });

    const schemaCreateTicket = z.object({
        maxQuantity: z.number().int()
    });

    const { idAttendee } = schemaTicketId.parse(request.params);
    const { maxQuantity } = schemaCreateTicket.parse(request.body);

    try {

        const ticketRepository = new TicketRepository()
        const ticketUsecase = new InsertTicketUseCase(ticketRepository)

        const ticket = await ticketUsecase.createTicket({
                idAttendee,
                maxQuantity
        });

        return reply.status(201).send({ ticket });
    } catch (err) {
        if (err instanceof BadRequest) {
            return reply.status(404).send({ message: 'Ticket não criado' });
        }
        console.error(err);
        throw err;
    }
}
