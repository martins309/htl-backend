'use strict';

const http = require('http'),
hostname = '127.0.0.1',
port = 5501;

const cors = require('cors')

const express = require('express')

const app = express();

app.use(cors());

const server = http.createServer(app);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({exrended: false}))

server.listen(port, hostname, () => {
    console.log(`The sever is running at http://${hostname}:${port}`)
});

