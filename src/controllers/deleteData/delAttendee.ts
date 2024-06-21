import { z } from 'zod';
import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { FastifyRequest, FastifyReply } from 'fastify';



export async function deleteAttedee(request:FastifyRequest, reply:FastifyReply) {

    const paramsSchema = z.object({
        attendeeId: z.coerce.number().int(),
    })

    const { attendeeId } = paramsSchema.parse(request.params)

    const serachAttende = await prisma.attendees.findUnique({
        where:{
            attendeeId:attendeeId
        }
    })

    if(serachAttende == null){
        throw new BadRequest("Participante inexistente!")
    }

    const deleteAttedee = await prisma.attendees.delete({
        where:{
            attendeeId: attendeeId
        }
    })

    
    return reply.send({attendee: deleteAttedee.attendeeId})
}