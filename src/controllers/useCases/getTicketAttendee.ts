import { RegisterTicketAttendee } from '../../interfaces/create/ticketAttendee.js';
import { InsertTicketRepository } from '../../repositories/insertTicket.js';
import { InsertTicketMemmory } from '../../repositories/repositoryInterface.js';



export class TicketAttendeeCase{

    constructor(private ticketRepositoryData: InsertTicketMemmory ){}

    async insertTicket({
        attendeeId,
        eventId,
        priceId,
        maxQuantity
    }:RegisterTicketAttendee) {
        
       
        const insertTicketAttendeeData = new InsertTicketRepository()

        insertTicketAttendeeData.insert({
            attendee:attendeeId,
            event:eventId,
            prince:priceId,
            maxQuantity
        })
    }
}
