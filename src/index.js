require('dotenv').config({ path: '.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Start the server
server.start({
    cors: {
        credentials: true,
        origin: [process.env.FRONTEND_URL, `http://${process.env.FRONTEND_URL}`, `http://www.${process.env.FRONTEND_URL}`, `https://${process.env.FRONTEND_URL}`, `https://www.${process.env.FRONTEND_URL}`, process.env.PING_URL, `http://${process.env.PING_URL}`, `http://www.${process.env.PING_URL}`, `https://${process.env.PING_URL}`, `https://www.${process.env.PING_URL}`]
    },
}, deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`)
});