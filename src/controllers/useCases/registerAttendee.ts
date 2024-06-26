import { UserAllradyExistError } from '../../error/emailExistError.js';
import { RegisterAttendee } from '../../interfaces/attendeeInterafce.js';
import { AttendeesRepository } from '../../interfaces/repositoryInterface.js';
import { RegisterUseCaseReponse } from '../../interfaces/repositoryInterface.js';



// Inversão de dependência não dependemos do repositório prisma
//Não tem conexão directa com o prisma




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