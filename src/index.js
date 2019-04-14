const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://matheuseabra:br34kp4ss@cluster0-txt8f.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

// Middlewares
app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
  console.log("Server started on port 3000!");
});
