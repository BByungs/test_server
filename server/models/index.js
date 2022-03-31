const mongoose = require('mongoose');
const MONGODB_URL =
  'mongodb+srv://byungjin:test@cluster0.wkc7a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch((err) => {
      console.log(err);
    });
};
