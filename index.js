const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(7648, "0.0.0.0", () => {
  console.log("JSON Server is running");
});
