import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterAttendee } from '../../interfaces/create/registerAttendee.js';




export async function registerAttendeeUseCase({
    eventId,
    attendeeName,
    attendeeEmail,
    document,
    phone,
}:RegisterAttendee){

     //Procurando email no evento
     const attendee_mail = await prisma.attendees.findUnique({
        where:{
            attendeeEmail: attendeeEmail // ou seja, você está procurando por um único registro com este endereço de e-mail
        }
    })

    if(attendee_mail != null){
            throw new Error("Email já está registrado no evento!!")
    }

    const [eventTotal, amouthAttendeeForEvent] = await Promise.all([

        prisma.event.findUnique({
            where:{
                eventId:eventId,
            }
        }),
        prisma.attendees.count({
            where:{
                idEvent:eventId
            }
        })
    ])

    if(eventTotal?.maximumAttendees && amouthAttendeeForEvent >= eventTotal.maximumAttendees){
        throw new BadRequest("O número máximo para o evento já esgotou")
    }

    const attendee = await prisma.attendees.create({
        data:{
            attendeeName,
            attendeeEmail,
            phone,
            document,
            idEvent:eventId
        }
    })
}