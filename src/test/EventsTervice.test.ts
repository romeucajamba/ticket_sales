import { describe, expect, test } from "vitest";

//Create or register attendee
import { AttendeesRepositoryPrisma } from '../repositories/attendeeRepository.js';
import { RegisterAttendeeUseCase } from '../controllers/useCases/registerAttendee.js';
import { UserAllradyExistError } from '../error/emailExistError.js';

// Insert or register ticket
import { InsertTicketUseCase } from '../controllers/useCases/getTicketAttendee.js';
import { TicketRepository } from '../repositories/insertTicket.js';



describe("Register Attendee", async () => {
  test.skip("should be able register attendee", async () => {
    //Teste de integração, testando como as partes da minha aplicação se comportam integradas com outras
    
    const prismaRepository = new AttendeesRepositoryPrisma()
    const registerUseCase = new RegisterAttendeeUseCase(prismaRepository)

   const attendee = await registerUseCase.registerAttendee({
      attendeeName: 'dedao',
      attendeeEmail: 'dedao@outlook.com',
      document: 'comprovativo',
      phone: 943667890
    })
      
  });

  test.skip("should be regect register the same email", async () => {
    //Teste de integração, testando como as partes da minha aplicação se comportam integradas com outras
    
    const prismaRepository = new AttendeesRepositoryPrisma()
    const registerUseCase = new RegisterAttendeeUseCase(prismaRepository)

    const email = 'lucaskunjucokenny@outlook.com';

   await registerUseCase.registerAttendee({
      attendeeName: 'Lucas Kunjuco',
      attendeeEmail: email,
      document: 'comprovativo',
      phone: 943667890
    })

    await expect( () =>
      registerUseCase.registerAttendee({
        attendeeName: 'Lucas Kunjuco',
        attendeeEmail: email,
        document: 'comprovativo',
        phone: 943667890
      })
    ).rejects.toBeInstanceOf(UserAllradyExistError)

  });

  test("should be able to insert ticket", async () =>{

    const ticketPrismaRepository = new TicketRepository()
    const insert_ticketUseCase = new InsertTicketUseCase(ticketPrismaRepository)

    const idAttendee = 'd9d02f72-32a6-4332-9f82-741492147eac';
    const maxQuantity = 20

    const createTicket = await insert_ticketUseCase.createTicket({
      idAttendee,
      maxQuantity
    })

    return createTicket
  })
});
