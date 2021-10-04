// GET 'home' page
const homeList = (req, res) => {
  res.render('location-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapLine: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Starcups',
      address: '경기도 안성시 중앙로 308',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '3.1km'
    }, {
      name: 'Cafe Hero',
      address: '경기도 안성시 중앙로 274',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '3.2km'
    }, {
      name: 'Burger Queen',
      address: '경기도 안성시 중앙로 389번길 6',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '9.8km'
    }]
  });
};

// GET 'Location info' page
const locationInfo = (req, res) => {
  res.render('location-info', {
    title: 'Starcups',
    pageHeader: { title: 'Starcups' },
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starcups',
      address: '경기도 안성시 중앙로 308',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: {
        lat: 37.00669,
        lng: 127.26420
      },
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
      reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 February 2017',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      }, {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '14 February 2017',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    }
  });
};

// GET 'Add review' page
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Review Starcups on Loc8r',
    pageHeader: { title: 'Review Starcups' }
  });
};

module.exports = {
  homeList,
  locationInfo,
  addReview
}