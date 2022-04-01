const mongoose = require('mongoose');
const { Schema } = mongoose;

const Profile = new Schema({
  nickname: String,
  thumbnail_image_url: String,
  profile_image_url: String,
});

const registeredFacility = new Schema({
  name: String,
  fee: String, // 시간당요금
  phoneNumber: String,
  outdoor: Boolean,
  shower: Boolean,
  parking: Boolean,
  address: String,
  event: String,
  facilityDescription: String,
  facilityImages: [String], //시설사진
});

const ReservationPeopleData = new Schema({
  name: String,
  phoneNumber: String,
});

const ReservedFacility = new Schema({
  facilityName: String,
  reservationTime: String,
  reservationPeopleData: ReservationPeopleData,
});

const AdminSchema = new Schema({
  email: String, // 이메일
  profile: Profile, // 프로필
  registeredFacilityList: [registeredFacility], // 등록한 시설 목록
  ReservedFacilityList: [ReservedFacility], // 예약 된 시설 목록
});

module.exports = mongoose.model('Admin', AdminSchema);
