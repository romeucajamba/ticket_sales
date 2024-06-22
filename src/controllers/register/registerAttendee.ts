import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { RegisterAttendeeUseCase } from '../useCases/registerAttendee.js';
import { AttendeesRepositoryPrisma } from '../../repositories/attendeeRepository.js';


export async function registerAttendeeController(request:FastifyRequest, reply:FastifyReply) {

    const schemaregisterAttedee = z.object({
        attendeeName: z.string().min(4),
        attendeeEmail: z.string().email(),
        document: z.string(),
        phone: z.number().int(),
    })
    
    const { 
            attendeeName,
            attendeeEmail,
            document,
            phone,
        } = schemaregisterAttedee.parse(request.body)

    try { 
            //Passando o repositório como dependência
            
         const prismaRepository = new AttendeesRepositoryPrisma()
         const registerAttendeeData = new RegisterAttendeeUseCase(prismaRepository)
         await registerAttendeeData.registerAttendee({
            attendeeName,
            attendeeEmail,
            document,
            phone
        })
    } catch {
        return reply.status(409).send()
    }

    return reply.status(201).send()

}