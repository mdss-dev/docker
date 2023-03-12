const express = require("express");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  res.send(
    "<h1>Este Hello esta vindo de um container Docker!! e esta é uma alteração </h1>"
  );
});

app.listen(port, () => {
  console.log("listening in port " + port);
});

const sql = `INSERT INTO people(name) values("MICHAEL")`;
connection.query(sql);
connection.end();
