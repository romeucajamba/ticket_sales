import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterPrice } from '../../interfaces/create/eventInterface.js';


export async function registerPriceUseCase({
    eventId,
    price,
    planeType,
    priceDetail,
}:RegisterPrice){

    const event = await prisma.event.findUnique({
        where:{
            eventId: eventId
        }
    })

    if(event == null){
            throw new BadRequest("Evento inexistente!!")
    }

    const createPrice = await prisma.price.create({
        data:{
            price,
            planeType,
            priceDetail,
            idEvent:eventId,
        }
    })
}