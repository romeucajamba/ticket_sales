import { prisma } from '../../lib/db_connector.js';
import { BadRequest } from '../../error/badrequest.js';
import { RegisterInterprise } from '../../interfaces/create/registerAttendee.js';



export async function registerInterpriseUsecase({
    eventId,
    interpriseName,
    interpriseEmail,
    interpriseNif,
    phone,
}: RegisterInterprise){

    //Procurando email no evento
    const attendee_mail = await prisma.attendeesInterprise.findUnique({
        where:{
            interpriseEmail: interpriseEmail // ou seja, você está procurando por um único registro com este endereço de e-mail
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
        prisma.attendeesInterprise.count({
            where:{
                idevent:eventId
            }
        })
    ])

    if(eventTotal?.maximumAttendees && amouthAttendeeForEvent >= eventTotal.maximumAttendees){
        throw new BadRequest("O número máximo para o evento já esgotou")
    }

    const attendeesInterprise = await prisma.attendeesInterprise.create({
        data:{
            interpriseName,
            interpriseEmail,
            phone,
            interpriseNif,
            idevent:eventId
        }
    })
}