import { AttendeesRepository } from '../../interfaces/repositoryInterface.js';

export class GetAttendeeUseCase {
   private attendeesRepository: AttendeesRepository;

   constructor(attendeesRepository: AttendeesRepository) {
      this.attendeesRepository = attendeesRepository;
   }

   async getAllAttendees() {
      const attendees = await this.attendeesRepository.findAll();
      
      return attendees;
   }
}
