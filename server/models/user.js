const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  }, // 이메일
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  profile: {
    nickname: {
      type: String,
      // required: true,
    },
    thumbnail_image_url: {
      type: String,
      // required: true,
    },
    profile_image_url: {
      type: String,
      // required: true,
    },
  }, // 프로필
  // registeredFacilityList: [registeredFacility], // 등록한 시설 목록
  // ReservedFacilityList: [ReservedFacility], // 예약 된 시설 목록
  phoneNumber: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now() + 9 * 60 * 60 * 1000,
  },
});

module.exports = mongoose.model('User', userSchema);
