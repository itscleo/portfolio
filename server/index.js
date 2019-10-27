const express = require('express');
const path = require('path');


const server = express();
const PORT = process.env.PORT || 5001;

server.use(express.static(path.join(__dirname, '../client')));
// server.use('api', router);

server.listen(PORT, () => {console.log('connected to port: ', PORT)});
