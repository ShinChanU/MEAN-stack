import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from './home-list/home-list.component';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getLocations(lat: number, lng: number): Promise<Location[]> {
    // const lng: number = 127.26411;
    // const lat: number = 37.00670;
    const maxDistance: number = 200000
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('Something has gone Wrong', error);
    return Promise.reject(error.message || error);
  }
}

