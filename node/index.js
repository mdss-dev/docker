import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Este Hello esta vindo de um container Docker!! e esta é uma alteração </h1>"
  );
});

app.listen(port, () => {
  console.log("listening in port " + port);
});
