import { AttendeesRepository } from '../../interfaces/repositoryInterface.js';
import { AttendeeIdUseCase } from '../../interfaces/attendeeInterafce.js';
import { BadRequest } from '../../error/badRequest.js';
import { Attendees } from '@prisma/client';

export interface AttendeeIdresponse {
    findAttendee: Attendees
}

export class GetAttendeeById{
    constructor(private attendee:AttendeesRepository){}


    async getById({attendeeId}:AttendeeIdUseCase):Promise<AttendeeIdresponse>{
        
        const findAttendee = await this.attendee.findById(attendeeId)

        if(findAttendee == null){
            throw new BadRequest('Participante não existente!')
        }


        return { findAttendee }
    }
}