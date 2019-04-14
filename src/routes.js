const express = require("express");
const TweetController = require("./controllers/TweetController");

const routes = express.Router();

routes.get("/tweets", TweetController.index);
routes.post("/tweet", TweetController.store);
routes.post("/like/:id", TweetController.like);
routes.post("/retweet/:id", TweetController.retweet);


module.exports = routes;
