const express = require("express");
const router = express.Router();

router.get("/message", (req, res) => {
  res.render("index");
});

router.post("/message", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
