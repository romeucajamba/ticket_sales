import { dbConnector } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterAttendee } from '../../interfaces/create/registerAttendee.js';
import { AttendeesRepositoryPrisma } from '../../repositories/attendeeRepository.js';




export class RegisterAttendeeUseCase {

    async registerAttendee({
        attendeeName,
        attendeeEmail,
        document,
        phone,
    }:RegisterAttendee){
    
         //Procurando email no evento
         const attendee_mail = await dbConnector.attendees.findUnique({
            where:{
                attendeeEmail: attendeeEmail // ou seja, você está procurando por um único registro com este endereço de e-mail
            }
        })
    
        if(attendee_mail != null){
                throw new BadRequest("Email já está registrado no evento!!")
        }
        
        const prismaRepositoryAttendee = new AttendeesRepositoryPrisma()

        prismaRepositoryAttendee.insertAttendee({
            attendeeName,
            attendeeEmail,
            document,
            phone,
        })

        
    }
}