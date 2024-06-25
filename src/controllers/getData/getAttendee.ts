import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod';




export async function getAttendee(request:FastifyRequest, reply:FastifyReply){
    
    const paramsSchema = z.object({
        attendeeId: z.string().uuid(),
    })

        const { attendeeId } = paramsSchema.parse(request.params)

  

        if(attendee == null){

            throw new Error("Participante não encontrado!!")
        }

        const baseURL = `${request.protocol}://${request.hostname}`;
        
        const checkin_URL = new URL(`/attendees/${attendeeId}/ticket`, baseURL)

        return reply.send({ 
            badge:{
                attendeeName: attendee.attendeeName,
                attendeeEmail: attendee.attendeeEmail,
                ticketURL: checkin_URL.toString(),

            }
         })
}