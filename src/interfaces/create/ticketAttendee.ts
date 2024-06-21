export interface RegisterTicketAttendee {
    attendeeId: number,
    eventId: string,
    priceId:number,
    maxQuantity:number
}

export interface TicketInterprise {
    interpriseId: number,
    eventId: string,
    priceId: number,
    maxQuantity: number
}