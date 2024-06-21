import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterModerator } from '../../interfaces/create/eventInterface.js';


export async function registerModeratorUseCases({
    eventId,
    moderatorName, 
    moderatorContact, 
    moderatorPhoto, 
    moderatorStatus 
}:RegisterModerator){

    const event = await prisma.event.findUnique({
        where:{
            eventId: eventId
        }
    })

    if(event == null){
            throw new BadRequest("Evento inexistente!!")
    }

    const createModerator = await prisma.moderator.create({
        data:{
            moderatorName, 
            moderatorContact, 
            moderatorPhoto, 
            moderatorStatus,
            idEvent:eventId 
        }
    })
}