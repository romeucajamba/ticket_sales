import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterInformations } from '../../interfaces/create/eventInterface.js';

export async function registerInformatinUseCase({
    eventId,
    image,
    aboutDescription 
}:RegisterInformations){

     //Procurando email no evento
     const findEvent = await prisma.event.findUnique({
        where:{
            eventId
        }
    })

    if(findEvent == null){
            throw new BadRequest("Evento não existente!!")
    }

    const registerAboutInformation = await prisma.aboutImg.create({
        data:{
             image:image,
             imgName:aboutDescription,
             idEvent:eventId
        }
    })
}