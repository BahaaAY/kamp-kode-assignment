const Message = require("../models/message");
exports.addMessage = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    const newMessage = new Message(name, email, message);
    await newMessage.save();
    res.redirect("/message");
  } catch (err) {
    console.log(err);
  }
};
