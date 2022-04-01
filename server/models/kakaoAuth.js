const mongoose = require('mongoose');
const { Schema } = mongoose;

const kakaoAuthSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('KakaoAuth', kakaoAuthSchema);
