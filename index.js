const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, `Running at port 8080`);
