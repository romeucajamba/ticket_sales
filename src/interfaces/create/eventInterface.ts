export interface CreateEvent {
    eventName:string,
    eventDate: string,
    eventLocal:string,
    eventTime: string,
    eventDescription: string,
    eventDetails: string,
    maximumAttendees:number,
}

export interface RegisterFlyer {
    eventId: string,
    flyer: string
}

export interface RegisterInformations {
    eventId: string,
    image: string,
    aboutDescription: string 
}

export interface RegisterPrice {
    eventId: string,
    price:number,
    planeType:string,
    priceDetail:string,
}

export interface RegisterModerator {
    eventId: string,
    moderatorName: string, 
    moderatorContact: number, 
    moderatorPhoto: string, 
    moderatorStatus: string 
}

export interface RegisterOrganization {
    eventId:string,
    orgName:string,
    orgContact:number,
    orgPhoto:string,
    orgStatus:string
}

export interface RegisterPartner {
    eventId:string,
    img:string,
    partnerName:string
}

export interface RegisterSpeaker {
    speakerStatus:string,
    speakerPhoto:string,
    speakerContact:number,
    speakerName:string,
    eventId:string
}