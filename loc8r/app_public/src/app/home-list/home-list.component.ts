import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';

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
  constructor(private loc8rDataService: Loc8rDataService) { }
  public locations: Location[];

  private getLocations(): void { // 호출 x, 정의만 한 것
    this.loc8rDataService
      .getLocations().then(foundLocations => this.locations = foundLocations);
  }

  ngOnInit() { // 서비스가 이용 가능하게 된 후에만 호출, 해결책
    this.getLocations();
  }
}


