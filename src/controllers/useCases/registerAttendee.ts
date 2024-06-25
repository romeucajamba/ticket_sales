import { UserAllradyExistError } from '../../error/emailExistError.js';
import { RegisterAttendee } from '../../interfaces/create/registerAttendee.js';
import { AttendeesRepository } from '../../repositories/repositoryInterface.js';
import { Attendees } from '@prisma/client';



// Inversão de dependência não dependemos do repositório prisma
//Não tem conexão directa com o prisma


interface RegisterUseCaseReponse {
    user: Attendees
}


export class RegisterAttendeeUseCase {
    constructor(private attendeeRepositoryDependency: AttendeesRepository){}

    async registerAttendee({
        attendeeName,
        attendeeEmail,
        document,
        phone,
    }:RegisterAttendee):Promise<RegisterUseCaseReponse>{
    
     const findEmail = await this.attendeeRepositoryDependency.findByEmail(attendeeEmail)

     if(findEmail != null){
        throw new UserAllradyExistError()
     }

     const user = await this.attendeeRepositoryDependency.insertAttendee({
            attendeeName,
            attendeeEmail,
            document,
            phone,
        })

     return {user}   
    }
}