import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {
  constructor() {
  }

  name = 'Valhalla Coffee';

  locations: Location[] = [{
    _id: '6162cbd5c8ca5eff44bee640',
    name: 'Valhalla Coffee',
    distance: 1020.0,
    address: '경기 안성시 도기1길 98',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi']
  },
  {
    _id: '616d3e601a5c8549afafac4a',
    name: 'Cafe Le Dugong',
    distance: 1302.0,
    address: '경기 안성시 월덕천길 15-1',
    rating: 4,
    facilities: ['Hot drinks', 'Premium wifi']
  }
  ];

  ngOnInit(): void { }
}


