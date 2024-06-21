import { Prisma, Event, Tickets } from "@prisma/client";

export interface EventRepositoryMemmory {
    create(data: Prisma.EventCreateInput):Promise<Event>
}

export interface InsertTicketMemmory {
    insert(data: Prisma.TicketsCreateInput):Promise<Tickets>
}