<<<<<<< HEAD
const jsonServer = require("json-server");
const server = jsonServer.create();
const cors = require("cors")
const router = jsonServer.router("/db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

=======
const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();
>>>>>>> 8ce61fbfca75e6cbb614b89e6260eaba82de8524
const port = process.env.PORT || 8080;

<<<<<<< HEAD
server.use(router);
server.use(cors)
server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
=======
app.use(express.static(path.join(__dirname, "build")));

// This route serves the React app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));
>>>>>>> 8ce61fbfca75e6cbb614b89e6260eaba82de8524
