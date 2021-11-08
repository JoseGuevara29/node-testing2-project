const express = require("epxress");
const server = express();
const quotesRouter = require("./api/quotesRouter");

server.use(express.json());
server.use("/quotes", quotesRouter);

module.exports = server;
