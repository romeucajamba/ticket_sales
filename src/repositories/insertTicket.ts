import { dbConnector } from '../lib/db_connector.js';
import { InsertTicketRepositoryIntercafe } from '../interfaces/repositoryInterface.js';




export class InsertTicketRepository implements InsertTicketRepositoryIntercafe {

    async insert(idAttendee: string, maxQuantity:number){
        const createTicket = await dbConnector.tickets.create({
            data:{
               idAttendee,
               maxQuantity 
            }
        });

        return createTicket
    }
}