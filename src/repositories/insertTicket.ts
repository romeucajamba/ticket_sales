import { prisma } from '../lib/db_connector.js';
import { InsertTicketMemmory } from './repositoryInterface.js';
import { Prisma } from "@prisma/client";



export class InsertTicketRepository implements InsertTicketMemmory {

    async insert(data: Prisma.TicketsCreateInput){
        const createTicket = await prisma.tickets.create({
            data
        });

        return createTicket
    }
}