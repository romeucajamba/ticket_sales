import { z } from 'zod';
import { dbConnector } from '../../lib/db_connector.js';

import { FastifyRequest, FastifyReply } from 'fastify';



export async function deleteAttedee(request:FastifyRequest, reply:FastifyReply) {

    const paramsSchema = z.object({
        attendeeId: z.string().uuid(),
    })

    const { attendeeId } = paramsSchema.parse(request.params)

    const serachAttende = await dbConnector.attendees.findUnique({
        where:{
            attendeeId:attendeeId
        }
    })

    if(serachAttende == null){
        throw new Error("Participante inexistente!")
    }

    const deleteAttedee = await dbConnector.attendees.delete({
        where:{
            attendeeId: attendeeId
        }
    })

    
    return reply.send({attendee: deleteAttedee.attendeeId})
}