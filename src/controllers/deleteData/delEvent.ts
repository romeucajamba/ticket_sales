import { z } from 'zod';
import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { FastifyRequest, FastifyReply } from 'fastify';



export async function deleteEvent(request:FastifyRequest, reply:FastifyReply) {

    const paramsSchema = z.object({
        eventId: z.string().uuid(),
    })

        const { eventId } = paramsSchema.parse(request.params)

        const serachEvent = await prisma.event.findUnique({
            where:{
                eventId: eventId
            }
        })

        if(serachEvent == null){
            throw new BadRequest("Evento inexistente!")
        }

        const deleteEvent = await prisma.event.delete({
            where:{
                eventId: eventId
            }
        })

        
        return reply.send({event: serachEvent.eventId})
    }