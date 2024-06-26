import { AttendeeIdUseCase } from '../../interfaces/attendeeInterafce.js';
import { AttendeesRepository } from '../../interfaces/repositoryInterface.js';
import { BadRequest } from '../../error/badRequest.js';



export class DeleteAttendeeUseCase{
    constructor(private IdAttedee: AttendeesRepository){}

    async deleteData({attendeeId}:AttendeeIdUseCase){

        const ifAlreayExist = await this.IdAttedee.findById(attendeeId)

        if(ifAlreayExist == null){
            throw new BadRequest("Participante inexistente!")
        }

        const deleteAttendee = await this.deleteData({attendeeId})

    }
}