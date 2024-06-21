import { prisma } from '../../lib/db_connector.js';
import { TicketInterprise } from '../../interfaces/create/ticketAttendee.js';


export async function registerInterpriseTicketUseCase({
    interpriseId, eventId, priceId, maxQuantity
}:TicketInterprise){

    const createTicket = await prisma.ticketsInterprise.create({
        data:{
            idInterprise:interpriseId,
            idEvent:eventId,
            idPrice:priceId,
            maxQuantity
        }
    });
}