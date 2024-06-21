import { RegisterSpeaker } from '../../interfaces/create/eventInterface.js';
import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';



export async function registerSpeakerUseCase({
    speakerStatus,
    speakerPhoto,
    speakerContact,
    speakerName,
    eventId
}:RegisterSpeaker){

    const event = await prisma.event.findUnique({
        where:{
            eventId: eventId
        }
    })

    if(event == null){
            throw new BadRequest("Evento inexistente!!")
    }

    const createSpeaker = await prisma.speaker.create({
        data:{
            speakerStatus,
            speakerPhoto,
            speakerContact,
            speakerName,
            idEvent:eventId
        }
    })
}