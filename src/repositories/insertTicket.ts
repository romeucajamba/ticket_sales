import { dbConnector } from '../lib/db_connector.js';
import { Prisma } from '@prisma/client';
import { InsertTicketRepositoryInterface } from '../interfaces/repositoryInterface.js';


export class TicketRepository implements InsertTicketRepositoryInterface {

    async insertTicket(idAttendee:string, maxQuantity:number) {

        const createTickt = await dbConnector.tickets.create({
            data:{
                idAttendee,
                maxQuantity
            }
        })

        return createTickt
    }
}