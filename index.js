const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const category = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Api is creating....")
})

app.get("/categories", (req, res) => {
    res.send(category);
})

app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const categoriesNews = news.filter(ns => ns.category_id === id);
        res.send(categoriesNews)
    }
})

app.get("/news", (req, res) => {
    res.send(news);
})

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const newsDetails = news.find(news => news._id === id);
    res.send(newsDetails);
})

app.listen(port, () => {
    console.log("App is running on the port of", port);
})
