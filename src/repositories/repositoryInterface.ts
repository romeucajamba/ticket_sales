import { Prisma, Tickets, Attendees } from "@prisma/client";

export interface AttendeesRepository {
    findByEmail(data:string):Promise<Attendees | null>
    insertAttendee(data: Prisma.AttendeesCreateInput):Promise<Attendees>
    findbyId(data:string):Promise<Attendees | null>
    delete(data:string): void
    findAll():Promise<Attendees>
}

