const { validationResult } = require("express-validator");
const Message = require("../models/message");
exports.addMessage = async (req, res, next) => {
  try {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const error = new Error("Validation failed");
      error.statusCode = 400;
      error.data = validationErrors.array();
      throw error;
    }
    const { name, email, message } = req.body;
    console.log(name, email, message);
    const newMessage = new Message(name, email, message);
    await newMessage.save();
    res.render("index", { messageSent: true, errors: null });
  } catch (err) {
    console.log(err);
    res.statusCode = err.statusCode || 500;
    res.render("index", {
      messageSent: false,
      errors: err.data || ["Internal server error"],
    });
  }
};
