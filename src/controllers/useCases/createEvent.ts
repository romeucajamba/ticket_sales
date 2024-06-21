import { CreateEvent } from '../../interfaces/create/eventInterface.js';
import { EventRepositoryMemmory } from '../../repositories/repositoryInterface.js';
import { EventRepository } from '../../repositories/eventRepository.js';



export class RegisterEvent{
    constructor(private eventRepository: EventRepositoryMemmory){}

    async createEventUseCase({
        eventName,
        eventDate,
        eventLocal,
        eventTime,
        eventDescription,
        eventDetails,
        maximumAttendees,
        }:CreateEvent){
        
        const eventDatabase = new EventRepository()
        
        eventDatabase.create({
            eventName,
            eventDate,
            eventLocal,
            eventTime,
            eventDescription,
            eventDetails,
            maximumAttendees,
            slug:eventName  
        })
    
    }
}