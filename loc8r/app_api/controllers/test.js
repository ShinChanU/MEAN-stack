db.locations.save({
        "name": "Cafe Le Dugong",
        "address": "경기 안성시 월덕천길 15-1",
        "rating": 4.3,
        "facilities": [
                "Hot drinks",
                "Food",
                "Premium wifi"
        ],
        "coords": [
                127.27833084934512,
                37.00959176944645
        ],
        "openingTimes": [
                {
                        "days": "Monday - Friday",
                        "opening": "7:00am",
                        "closing": "7:00pm",
                        "closed": false
                },
                {
                        "days": "Saturday",
                        "opening": "8:00am",
                        "closing": "5:00pm",
                        "closed": false
                },
                {
                        "days": "Sunday",
                        "closed": true
                }
        ],
        "my": [
                "2016410026/신찬우"
        ]
})

db.locations.update({
        name: "Cafe Le Dugong"
}, {
        $push: {
                reviews: {
                        author: "Chanwoo Shin",
                        _id: ObjectId(),
                        rating: 5,
                        timestamp: new Date("Mar 12, 2020"),
                        reviewText: "What a great place.",
                        StudentId: 2016410026
                }
        }
})