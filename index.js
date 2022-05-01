const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());

// const dataBase = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "P4d48iv9!",
//   database: "crudgames",
// });

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?, ?, ? )";

  dataBase.query(SQL, [name, cost, category], (error, result) => {
    console.log(error);
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM games";

  dataBase.query(SQL, (error, result) => {
    if (error) console.log(error);
    else res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let SQL =
    "UPDATE games SET name = ?, cost = ?, category = ? WHERE idgames = ?";

  dataBase.query(SQL, [name, cost, category, id], (error, result) => {
    if (error) console.log(error);
    else res.send(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let SQL = "DELETE FROM games WHERE idgames = ?";
  dataBase.query(SQL, [id], (error, result) => {
    if (error) console.log(error);
    else res.send(result);
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Running with express at ${port} port!`);
});
