const { response } = require('express');
const { post } = require('request');
const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'http://loc8r1004.herokuapp.com';
}

const homeList = (req, res) => {
  const path = '/api/locations';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
    qs: {
      lng: 127.26411,
      lat: 37.00670,
      maxDistance: 200000
    }
  };

  request(
    requestOptions,
    (err, { statusCode }, body) => {
      let data = [];
      if (statusCode === 200 && body.length) {
        data = body.map((item) => {
          item.distance = formatDistance(item.distance);
          return item;
        });
      }
      renderHomepage(req, res, data);
    });
};

const formatDistance = (distance) => {
  let thisDistance = 0;
  let unit = 'm';
  if (distance > 1000) {
    thisDistance = parseFloat(distance / 1000).toFixed(1);
    unit = 'km';
  } else {
    thisDistance = Math.floor(distance);
  }
  return thisDistance + unit;
};

const renderHomepage = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }
  res.render('location-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapLine: 'Find places to work with wifi near you! 2016410026/신찬우'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody,
    message
  });
};

const renderDetailPage = (req, res, location) => {
  res.render('location-info', {
    title: location.name,
    pageHeader: { title: location.name },
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: location
  });
};

// GET 'Location info' page
const showError = (req, res, status) => {
  let title = '';
  let content = '';
  if (status === 404) {
    title = '404, page not found';
    content = 'Oh dear. Looks like you can\'t find this page. Sorry.';
  } else {
    title = `${status}, something's gone wrong`;
    content = 'Something, somewhere, has gone just a little bit wrong.';
  }

  res.status(status);
  res.render('generic-text', {
    title,
    content
  });
};

const renderReviewForm = (req, res, { name }) => {
  res.render('location-review-form', {
    title: `Review ${name} Loc8r`,
    pageHeader: { title: `Review ${name}` },
    error: req.query.err
  });
}

const getLocationInfo = (req, res, callback) => {
  const path = `/api/locations/${req.params.locationid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, { statusCode }, body) => {
      const data = body;
      if (statusCode === 200) {
        data.coords = {
          lng: body.coords[0],
          lat: body.coords[1]
        };
        callback(req, res, data);
      } else {
        showError(req, res, statusCode);
      }
    }
  );
};

const locationInfo = (req, res) => {
  getLocationInfo(req, res,
    (req, res, responseData) => renderDetailPage(req, res, responseData)
  );
};


// GET 'Add review' page
const addReview = (req, res) => {
  getLocationInfo(req, res,
    (req, res, responseData) => renderReviewForm(req, res, responseData)
  );
};

const doAddReview = (req, res) => {
  const locationid = req.params.locationid;
  const path = `/api/locations/${locationid}/reviews`;
  const postdata = {
    author: req.body.name,
    rating: parseInt(req.body.rating, 10),
    reviewText: req.body.review
  };
  const requestOptions = { // 요청 옵션
    url: `${apiOptions.server}${path}`,
    method: 'POST',
    json: postdata
  };
  // 애플리케이션 레벨에서 유효성 검사
  if (!postdata.author || !postdata.rating || !postdata.reviewText) {
    res.redirect(`/location/${locationid}/review/new?err=val`);
  } else {
    request( // 리퀘스트 날리기
      requestOptions,
      (err, { statusCode }, { name }) => { // 콜백함수, 성공시 body에 들ㅇ거ㅏㅁ
        if (statusCode === 201) { // post 성공 코드
          res.redirect(`/location/${locationid}`);
        } else if (statusCode === 400 && name && name === 'ValidationError') {
          res.redirect(`/location/${locationid}/review/new?err=val`)
        } else {
          showError(req, res, statusCode);
        }
      }
    );
  }
};

module.exports = {
  homeList,
  locationInfo,
  addReview,
  doAddReview
}