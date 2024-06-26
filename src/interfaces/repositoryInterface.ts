import { Prisma, Tickets, Attendees } from "@prisma/client";

export interface AttendeesRepository {
    findByEmail(data:string):Promise<Attendees | null>
    insertAttendee(data: Prisma.AttendeesCreateInput):Promise<Attendees>
    findById(data:string):Promise<Attendees | null>
    delete(data:string): void
    findAll():Promise<Attendees[]>
}


export interface RegisterUseCaseReponse {
    user: Attendees
}


export interface InsertTicketRepositoryInterface {
    insert(idAttendee: string, maxQuantity:number):Promise<Tickets>
}