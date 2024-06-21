import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterFlyer } from '../../interfaces/create/eventInterface.js';

export async function registerFlyerUseCase({
    eventId,
    flyer
}:RegisterFlyer){

    const event = await prisma.event.findUnique({
        where:{
            eventId: eventId
        }
    })

    if(event == null){
            throw new BadRequest("Evento inexistente!!")
    }

    const createFlyer = await prisma.flyer.create({
        data:{
            flyerPhoto: flyer,
            idEvent:eventId
        }
    })
}