import { InsertTicketRepositoryInterface } from '../../interfaces/repositoryInterface.js';
import { RegisterTicketAttendee } from '../../interfaces/ticketAttendeeInterface.js';


export class InsertTicketUseCase{
    constructor(private insertTicketrepository:InsertTicketRepositoryInterface){}


    async createTicket({
        idAttendee,
        maxQuantity
    }:RegisterTicketAttendee){

        const registerTicket = await this.insertTicketrepository.insertTicket(idAttendee, maxQuantity)

        return registerTicket
    }
}