import { Prisma, Tickets, Attendees } from "@prisma/client";

export interface AttendeesRepository {
    insertAttendee(data: Prisma.AttendeesCreateInput):Promise<Attendees>
}

export interface InsertTicketMemmory {
    insert(data: Prisma.TicketsCreateInput):Promise<Tickets>
}