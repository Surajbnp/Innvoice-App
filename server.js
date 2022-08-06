const data = require("./db.json");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.rewriter(data);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080

server.use(middlewares);
server.use(router)

server.listen(port);
