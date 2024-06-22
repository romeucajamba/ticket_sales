import { BadRequest } from '../../error/badrequest.js';
import { RegisterAttendee } from '../../interfaces/create/registerAttendee.js';
import { AttendeesRepository } from '../../repositories/repositoryInterface.js';



// Inversão de dependência não dependemos do repositório prisma
//Não tem conexão directa com o prisma

export class RegisterAttendeeUseCase {
    constructor(private attendeeRepositoryDependency: AttendeesRepository){}

    async registerAttendee({
        attendeeName,
        attendeeEmail,
        document,
        phone,
    }:RegisterAttendee){
    
     const findEmail = await this.attendeeRepositoryDependency.findByEmail(attendeeEmail)

     if(findEmail != null){
        throw new BadRequest("Email já está registrado no evento!!")
     }

        await this.attendeeRepositoryDependency.insertAttendee({
            attendeeName,
            attendeeEmail,
            document,
            phone,
        })

        
    }
}