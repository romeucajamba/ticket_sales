import { FastifyRequest, FastifyReply } from "fastify";
import { GetAttendeeUseCase } from '../../controllers/useCases/getAttendee.js';
import { AttendeesRepositoryPrisma } from '../../repositories/attendeeRepository.js';
import { BadRequest } from "../../error/badRequest.js";

export async function getAttendee(request:FastifyRequest, reply:FastifyReply){
    
    try {
        const repositoryPrisma = new AttendeesRepositoryPrisma()
        const getAllAttendee = new GetAttendeeUseCase(repositoryPrisma)
        const attendees = await getAllAttendee.getAllAttendees()

    
        return reply.status(200).send(attendees);
    } catch (err) {
        if(err instanceof BadRequest){
            return reply.status(404).send({message:'Nenhum participante encontrado'})
        }

        throw err
    }


    return reply.send({getAttendee})
}