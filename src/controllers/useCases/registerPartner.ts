import { RegisterPartner } from '../../interfaces/create/eventInterface.js';
import { prisma } from '../../lib/db_connector.js';


export async function registerPartnerUseCase({
    eventId,
    img,
    partnerName
}:RegisterPartner){

    const partnerData = await prisma.partner.create({
        data:{
            img,
            partnerName,
            idEvent:eventId
        },
    })
}