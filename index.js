const express = require("express");
const app = express();
// const cors = require("cors");
// require("dotenv").config();

// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.listen(PORT, `Running at ${PORT}`);
