import * as dotenv from 'dotenv' 
dotenv.config();
import express from 'express';


const server = express();
server.use(express.static('public'))

server.listen(5001, () => {
    console.log('server is running on http://localhost:5001')
})