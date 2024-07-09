const db = require("../util/firebase");

const messagesCollection = db.collection("messages");

class Message {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.date = new Date();
  }
  save() {
    return messagesCollection.add({
      name: this.name,
      email: this.email,
      message: this.message,
      date: this.date,
    });
  }
}

module.exports = Message;
