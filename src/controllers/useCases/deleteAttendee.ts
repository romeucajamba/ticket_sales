import { AttendeeIdUseCase } from '../../interfaces/create/registerAttendee.js';
import { AttendeesRepository } from '../../repositories/repositoryInterface.js';
import { BadRequest } from '../../error/badRequest.js';



export class DeleteAttendeeUseCase{
    constructor(private IdAttedee: AttendeesRepository){}

    async deleteData({attendeeId}:AttendeeIdUseCase){

        const ifAlreayExist = await this.IdAttedee.findbyId(attendeeId)

        if(ifAlreayExist == null){
            throw new BadRequest("Participante inexistente!")
        }

        const deleteAttendee = await this.deleteData({attendeeId})

    }
}