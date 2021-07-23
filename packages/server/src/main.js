
import { createServer } from 'http';
import { parse } from 'querystring';

const server = createServer((request, response) => {
    switch (request.url) {
        case '/status': {
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            response.write(JSON.stringify({ status: 'okay' }));
            response.end();
            break;
        }


    
        case '/authenticate': {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk
            });

            request.on('end', () => {
                // console.log(parse(data))
                const params = parse(data);

                response.end();

            })
            break;
        }

        default: {
            response.writeHead(404, 'Service not found');
            response.end();
        }
    }
});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const HOSTNAME = process.env.HOSTNAME || '192.168.15.9';

//127.0.0.1
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listenning at a http://${HOSTNAME}:${PORT}`);
});