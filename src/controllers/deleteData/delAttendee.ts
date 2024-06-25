import { z } from 'zod';
import { FastifyRequest, FastifyReply } from 'fastify';
import { AttendeesRepositoryPrisma } from '../../repositories/attendeeRepository.js';
import { DeleteAttendeeUseCase } from '../useCases/deleteAttendee.js';
import { BadRequest } from '../../error/badRequest.js';



export async function deleteAttedeeController(request:FastifyRequest, reply:FastifyReply) {

    const paramsSchema = z.object({
        attendeeId: z.string().uuid(),
    })

    const { attendeeId } = paramsSchema.parse(request.params)

    try {
        const prismaRepository = new AttendeesRepositoryPrisma()
        const deleteUseCase = new DeleteAttendeeUseCase(prismaRepository)

        await deleteUseCase.deleteData({attendeeId})

    } catch (err) {
        if(err instanceof BadRequest){
            return reply.status(404).send({message:'Participante não encontrado'})
        }
        throw err
    }

    
    return reply.send()
}