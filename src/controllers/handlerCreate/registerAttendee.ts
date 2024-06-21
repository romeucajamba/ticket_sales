import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { registerAttendeeUseCase } from '../useCases/registerAttendee.js';


export async function registerAttendeeController(request:FastifyRequest, reply:FastifyReply) {

    const schemaEventId = z.object({
        eventId: z.string().uuid()
    })

    const schemaregisterAttedee = z.object({
        attendeeName: z.string().min(4),
        attendeeEmail: z.string().email(),
        document: z.string(),
        phone: z.number().int(),
    })

    const { eventId } = schemaEventId.parse(request.params)
    
    const { 
            attendeeName,
            attendeeEmail,
            document,
            phone,
        } = schemaregisterAttedee.parse(request.body)

    try {
        await registerAttendeeUseCase({
            eventId,
            attendeeName,
            attendeeEmail,
            document,
            phone
        })
    } catch {
        return reply.status(409).send()
    }

    return reply.status(201).send(/*{attendee_eventId: attendee.idEvent}*/)

}