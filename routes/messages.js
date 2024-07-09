const express = require("express");
const router = express.Router();

const { addMessage } = require("../controllers/messages");

router.get("/message", (req, res) => {
  res.render("index");
});

router.post("/message", addMessage);

module.exports = router;
