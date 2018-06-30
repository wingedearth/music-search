import express from 'express';
import path from 'path';
import router from './routes/router';

require('babel-polyfill');

// constants
const DEFAULT_PORT = 3000;

const server = express();
const port = DEFAULT_PORT;

server.use(express.static(path.resolve(__dirname, '..', '..')));
server.use(express.static('./build'));

server.use(router);

server.listen(port, () => console.log(`A goblin-mage has conjured a server on port ${port}.`));
