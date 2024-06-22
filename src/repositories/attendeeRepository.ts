import { dbConnector } from '../lib/db_connector.js';
import { Prisma } from '@prisma/client';
import { AttendeesRepository } from './repositoryInterface.js';


export class AttendeesRepositoryPrisma implements AttendeesRepository {

   async insertAttendee(data: Prisma.AttendeesCreateInput ){

        const attendee = await dbConnector.attendees.create({data})

        return attendee
   }
}
