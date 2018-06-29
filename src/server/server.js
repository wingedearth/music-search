require('babel-polyfill');

import express from 'express';
import router from './routes/router';

// constants
const DEFAULT_PORT = 3000;

const app = express();
const port = DEFAULT_PORT;

app.use(router);

app.listen(port, () => console.log(`A goblin-mage has conjured a server on port ${port}.`));
