const mongoose = require('mongoose');
const { Schema } = mongoose;

const Profile = new Schema({
  nickname: String,
  thumbnail_image_url: String,
  profile_image_url: String,
});

const UserSchema = new Schema({
  profile: Profile,
});

module.exports = mongoose.model('User', UserSchema);
