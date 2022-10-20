const express = require("express");
const app = express();

const port = 5000;

const category = require("./data/categories.json");

app.get("/", (req, res) => {
    res.send("Api is creating....")
})

app.get("/category", (req, res) => {
    res.send(category);
})

app.listen(port, () => {
    console.log("App is running on the port of", port);
})
