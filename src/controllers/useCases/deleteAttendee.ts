import { AttendeeIdUseCase } from '../../interfaces/create/registerAttendee.js';
import { AttendeesRepository } from '../../repositories/repositoryInterface.js';



export class DeleteAttendeeUseCas{
    constructor(private IdAttedee: AttendeesRepository){}

    async deleteData({attendeeId}:AttendeeIdUseCase){

        const ifAlreayExist = await this.IdAttedee.findbyId(attendeeId)

        if(ifAlreayExist == null){
            throw new Error("Participante inexistente!")
        }

        const deleteAttendee = await this.deleteData({attendeeId})

    }
}