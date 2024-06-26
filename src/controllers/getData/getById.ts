import { FastifyRequest, FastifyReply } from "fastify";
import { z } from 'zod';
import { AttendeesRepositoryPrisma } from '../../repositories/attendeeRepository.js';
import { GetAttendeeById } from '../useCases/getAttendeeById.js';
import { BadRequest } from "../../error/badRequest.js";


export async function getAttendeeByid(request:FastifyRequest, reply:FastifyReply){
    
    const paramsSchema = z.object({
        attendeeId: z.string().uuid(),
    })

    const { attendeeId } = paramsSchema.parse(request.params)

    try {
        const getAttendeeInRepository = new AttendeesRepositoryPrisma()
        const getAttendeeUseCase = new GetAttendeeById(getAttendeeInRepository)
        const attendee = await getAttendeeUseCase.getById({attendeeId})

        return reply.status(200).send(attendee);

    } catch (error) {
        if(error instanceof BadRequest){
            return reply.status(404).send({message:'Participante não existente'})
        }
        throw error
    }


    return reply.status(200).send()
}