
import express from 'express';

const server = express();

server.get('/status', (_, response)=> {
    response.send({
        status:'Okay'
    })
});

server.post('/authenticate', express.json(), (request, response) => {
    
    console.log('Email', request.body.email, 'senha',request.body.password)
    
    response.send();
})


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const HOSTNAME = process.env.HOSTNAME || '192.168.15.9';

//127.0.0.1
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listenning at a http://${HOSTNAME}:${PORT}`);
});