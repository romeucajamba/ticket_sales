import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { TicketAttendeeCase } from '../useCases/getTicketAttendee.js';
import { InsertTicketRepository } from '../../repositories/insertTicket.js';


export async function getAttendeeTicket(request:FastifyRequest, reply:FastifyReply) {

    const schemaTicketId = z.object({
        attendeeId: z.coerce.number().int(),
        eventId: z.string().uuid(),
        priceId: z.coerce.number().int()
    })

    const schemaCreateTicket = z.object({
        maxQuantity: z.number().int()
    })

    const { attendeeId, eventId, priceId } = schemaTicketId.parse(request.params)
    const { maxQuantity } = schemaCreateTicket.parse(request.body)

   try {
         const insertTicketAttendeeData = new InsertTicketRepository()
         const insertRepository = new TicketAttendeeCase(insertTicketAttendeeData)

        await insertRepository.insertTicket({
            attendeeId,
            eventId,
            priceId,
            maxQuantity
        })
   } catch {
        return reply.status(409).send()
   }


    return reply.status(201).send(/*{
        ticket: {
            id: createTicket.id,
            event: createTicket.idEvent,
            attendee: createTicket.idAttendee,
            date: createTicket.createdAt,
            quantity: createTicket.maxQuantity
}}*/)

}