const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 80;
const models = require("./models");

app.use(cors());

// models.deck.create({
//     info : "TEST"
// }).then(_ => console.log("created!!"));

models.deck.findAll().then(console.log);
app.listen(PORT, () => console.log(`server running on ${PORT}`));