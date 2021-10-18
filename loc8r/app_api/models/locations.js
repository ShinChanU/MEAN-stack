const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const openingTimesSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // 무결성 검사
  },
  address: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  facilities: [String],
  coords: { // GeoJSON 데이터( [경도, 위도] )
    type: { type: String },
    coordinates: [Number]
  },
  openingTimes: [openingTimesSchema],
  reviews: [reviewSchema],
  my: {
    type: String,
  },
  // 과제 테스트
});

locationSchema.index({
  coords: '2dsphere'
});

mongoose.model('Location', locationSchema);