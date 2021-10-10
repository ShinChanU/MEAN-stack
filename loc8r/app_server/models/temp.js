// 1.
db.locations.save({
  name: 'Starcups',
  address: '서울특별시 관악구 호암로 100',
  rating: 3,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.0111, 37.3666],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }],
  reviews: {
    author: 'ChanWoo Shin',
    _id: ObjectId(),
    rating: 5,
    timestamp: new Date("Mar 12, 2020"),
    reviewText: "What a great place."
  }
})

// 2.
db.locations.save({
  name: 'Cafe de Flore',
  address: '경기도 안성시 안성2동 비룡5길 18',
  rating: 2.5,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.26090111865825, 37.01362569732081],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 3.
db.locations.save({
  name: 'Bless Roll',
  address: '경기 안성시 중앙로 324',
  rating: 4.5,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.26327074934542, 37.01009931769459],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 4.
db.locations.save({
  name: 'Twosome-place',
  address: '경기 안성시 중앙로 274',
  rating: 4.7,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.259018140123166, 37.012661688240534],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 5.
db.locations.save({
  name: 'Ediya',
  address: '경기 안성시 아양1로 73',
  rating: 4.7,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.26224312601984, 37.00706889064175],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 6.
db.locations.save({
  name: 'Custmize',
  address: '경기 안성시 안성맞춤대로 1078',
  rating: 4.7,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.27014230331224, 37.010028087612476],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 7.
db.locations.save({
  name: 'Valhalla Coffee',
  address: '경기 안성시 도기1길 98',
  rating: 2.4,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.26369223399894, 37.00584891744587],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 8.
db.locations.save({
  name: 'J cookies',
  address: '경기 안성시 중앙로411번길 57',
  rating: 3.4,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.27311450701754, 37.00963022765968],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 9.
db.locations.save({
  name: 'Cafe the uk',
  address: '경기 안성시 서운로 830',
  rating: 4.1,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.26845174139987, 36.98509563265233],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})

// 10.
db.locations.save({
  name: 'Cafe Le Dugong',
  address: '경기 안성시 월덕천길 15-1',
  rating: 4.3,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  coords: [127.27833084934512, 37.00959176944645],
  openingTimes: [{
    days: 'Monday - Friday',
    opening: '7:00am',
    closing: '7:00pm',
    closed: false
  }, {
    days: 'Saturday',
    opening: '8:00am',
    closing: '5:00pm',
    closed: false
  }, {
    days: 'Sunday',
    closed: true
  }]
})