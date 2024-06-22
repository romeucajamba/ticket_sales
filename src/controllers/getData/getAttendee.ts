import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod';
import { dbConnector } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';


export async function getAttendee(request:FastifyRequest, reply:FastifyReply){
    
    const paramsSchema = z.object({
        attendeeId: z.string().uuid(),
    })

        const { attendeeId } = paramsSchema.parse(request.params)

        const attendee = await dbConnector.attendees.findUnique({
            select:{
                attendeeName: true,
                attendeeEmail: true,
                phone:true
             },

            where:{
                attendeeId: attendeeId
            }
        })

        if(attendee == null){

            throw new BadRequest("Participante não encontrado!!")
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