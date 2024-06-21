import { server } from './app.js';
import {env } from './env/index.js';


server.listen({
    port: env.PORT,
    host: '0.0.0.0'
}).then(() => {
    console.log("Server running in port 8000")
})