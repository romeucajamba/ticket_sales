import { prisma } from '../lib/db_connector.js';
import { Prisma } from '@prisma/client';
import { EventRepositoryMemmory } from './repositoryInterface.js';


export class EventRepository implements EventRepositoryMemmory {

    async create(data: Prisma.EventCreateInput){
        const dataEvent = await prisma.event.create({
            data,
        })

        return dataEvent
    }
}
