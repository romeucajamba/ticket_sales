import 'dotenv';
import { z } from 'zod';
import { BadRequest } from '../error/badRequest.js';


const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)


if(_env.success == false){
    console.error('Váriaveis de ambiente invalidas', _env.error.format())
    throw new BadRequest('Variáveis de ambiente inválida')
}

export const env = _env.data