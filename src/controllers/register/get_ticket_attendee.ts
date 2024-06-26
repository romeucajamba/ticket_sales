import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { TicketAttendeeCase } from '../useCases/getTicketAttendee.js';
import { InsertTicketRepository } from '../../repositories/insertTicket.js';
import { BadRequest } from '../../error/badRequest.js';


export async function getAttendeeTicket(request:FastifyRequest, reply:FastifyReply) {

    const schemaTicketId = z.object({
        idAttendee: z.string().uuid(),
    })

    const schemaCreateTicket = z.object({
        maxQuantity: z.number().int()
    })


   try {

        const { idAttendee } = schemaTicketId.parse(request.params);
        const { maxQuantity } = schemaCreateTicket.parse(request.body);
        
        const insertTicketAttendeeData = new InsertTicketRepository()
        const insertRepository = new TicketAttendeeCase(insertTicketAttendeeData)

        const ticket = await insertRepository.insertTicket({
            idAttendee,
            maxQuantity
        })

        return reply.status(201).send({ticket})
        
   } catch (err) {
       if(err instanceof BadRequest){
         return reply.status(404).send({message: 'Ticket não criado'})
       }
       throw err
   }

}