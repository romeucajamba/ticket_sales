import { RegisterTicketAttendee } from '../../interfaces/ticketAttendeeInterface.js';
import { InsertTicketRepositoryInterface } from '../../interfaces/repositoryInterface.js';




export class TicketAttendeeCase{
    constructor(private ticketRepositoryData: InsertTicketRepositoryInterface ){}

    async insertTicket({
        idAttendee,
        maxQuantity
    }:RegisterTicketAttendee) {
        

       const ticketAttendee = await this.ticketRepositoryData.insert(
            idAttendee,
            maxQuantity
        )

        return {ticketAttendee}
    }
}
