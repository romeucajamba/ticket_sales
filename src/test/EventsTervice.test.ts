import { describe, expect, test } from "vitest";

import { AttendeesRepositoryPrisma } from '../repositories/attendeeRepository.js';
import { RegisterAttendeeUseCase } from '../controllers/useCases/registerAttendee.js';
import { UserAllradyExistError } from '../error/emailExistError.js';
import { string } from "zod";


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

  test("should be regect register the same email", async () => {
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
});
