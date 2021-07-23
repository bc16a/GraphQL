
import express from 'express';
import cors from 'cors';

const server = express();

const enableCors = cors({origin: 'http://192.168.15.9:3000'});


server.get('/status', (_, response)=> {
    response.send({
        status:'Okay'
    })
});

server.options('/authenticate', enableCors ).post('/authenticate', enableCors , express.json(), (request, response) => {
    
    console.log('Email', request.body.email, 'senha',request.body.password)
    
    response.send({Okay:true,});
})


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const HOSTNAME = process.env.HOSTNAME || '192.168.15.9';

//127.0.0.1
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listenning at a http://${HOSTNAME}:${PORT}`);
});