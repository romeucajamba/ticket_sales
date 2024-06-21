import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterOrganization } from '../../interfaces/create/eventInterface.js';



export async function registerOrganizationUseCase({
    eventId,
    orgName,
    orgContact,
    orgPhoto,
    orgStatus
}:RegisterOrganization){

    const event = await prisma.event.findUnique({
        where:{
            eventId: eventId
        }
    })

    if(event == null){
            throw new BadRequest("Evento inexistente!!")
    }

    const createOrg = await prisma.organization.create({
        data:{
            orgName,
            orgContact,
            orgPhoto,
            orgStatus,
            idEvent:eventId
        }
    })

}