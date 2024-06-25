import { z } from 'zod';
import { dbConnector } from '../../lib/db_connector.js';

import { FastifyRequest, FastifyReply } from 'fastify';



export async function deleteAttedeeController(request:FastifyRequest, reply:FastifyReply) {

    const paramsSchema = z.object({
        attendeeId: z.string().uuid(),
    })

    const { attendeeId } = paramsSchema.parse(request.params)

    try {
        
    } catch (error) {
        
    }

    
    return reply.send()
}