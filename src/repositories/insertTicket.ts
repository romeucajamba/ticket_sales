import { dbConnector } from '../lib/db_connector.js';
import { InsertTicketMemmory } from './repositoryInterface.js';
import { Prisma } from "@prisma/client";



export class InsertTicketRepository implements InsertTicketMemmory {

    async insert(data: Prisma.TicketsCreateInput){
        const createTicket = await dbConnector.tickets.create({
            data
        });

        return createTicket
    }
}