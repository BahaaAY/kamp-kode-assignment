const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const rootDir = require("./util/path");

const messageRoutes = require("./routes/messages");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/", messageRoutes);

app.listen(3000);
