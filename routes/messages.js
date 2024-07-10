const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { addMessage } = require("../controllers/messages");

router.get("/message", (req, res) => {
  res.render("index", { messageSent: false, errors: null });
});

router.post(
  "/message",
  [
    body("name").trim().notEmpty().withMessage("Name cannot be empty!"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email cannot be empty!")
      .isEmail()
      .withMessage("Invalid email!"),
    body("message").trim().notEmpty().withMessage("Message cannot be empty!"),
  ],
  addMessage
);

module.exports = router;
