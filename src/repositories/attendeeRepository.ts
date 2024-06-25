import { dbConnector } from '../lib/db_connector.js';
import { Prisma } from '@prisma/client';
import { AttendeesRepository } from './repositoryInterface.js';


export class AttendeesRepositoryPrisma implements AttendeesRepository {

   async findByEmail(data:string){
      //Procurando email no evento
      const attendee_mail = await dbConnector.attendees.findUnique({
         where:{
             attendeeEmail: data // ou seja, você está procurando por um único registro com este endereço de e-mail
         }
     })
 
     return attendee_mail
   }

   async insertAttendee(data: Prisma.AttendeesCreateInput ){

        const attendee = await dbConnector.attendees.create({data})

        return attendee
   }
   
   async findbyId(data:string){

      const attendeeId = await dbConnector.attendees.findUnique({
         where:{
             attendeeId:data
         }
     })

      return attendeeId
   }


   async delete(data:string){
      const deleteAttedee = await dbConnector.attendees.delete({
         where:{
             attendeeId:data
         }
     })

  }

   
 
   
}
