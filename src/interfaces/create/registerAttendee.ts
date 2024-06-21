
export interface RegisterAttendee {
    eventId: string,
    attendeeName: string,
    attendeeEmail: string,
    document: string,
    phone: number
}

export interface RegisterInterprise {
    eventId: string,
    interpriseName: string,
    interpriseEmail: string,
    interpriseNif: string,
    phone: number
}