const jsonServer = require('json-server');
const server = jsonServer.create();
const app = jsonServer.create();
const path = require('path');
const express = require('express');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 8080;

app.use('/db', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port);

