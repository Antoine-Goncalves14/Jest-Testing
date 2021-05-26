const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test-Jest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error('Error connecting to mongodb');
    console.error(e);
  }
}

module.exports = { connect };
