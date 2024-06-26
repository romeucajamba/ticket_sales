import { RegisterTicketAttendee } from '../../interfaces/ticketAttendeeInterface.js';
import { InsertTicketRepositoryIntercafe } from '../../interfaces/repositoryInterface.js';




export class TicketAttendeeCase{
    constructor(private ticketRepositoryData: InsertTicketRepositoryIntercafe ){}

    async insertTicket({
        idAttendee,
        maxQuantity
    }:RegisterTicketAttendee) {
        

        await this.ticketRepositoryData.insert(
            idAttendee,
            maxQuantity
        )
    }
}
