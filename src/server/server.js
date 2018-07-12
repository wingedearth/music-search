import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes/router';
import { DEFAULT_PORT } from '../assets/constants';

require('babel-polyfill');
require('./config/database');

const server = express();
const port = process.env.PORT || DEFAULT_PORT;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('./build'));
server.use(express.static(path.resolve(__dirname, 'assets', 'images')));
server.use(router);

server.listen(port, () => console.log(`A goblin-mage has conjured a server on port ${port}.`));
