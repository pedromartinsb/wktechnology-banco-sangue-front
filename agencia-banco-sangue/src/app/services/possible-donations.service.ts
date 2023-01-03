import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PossibleDonationsService {

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get(`${API_CONFIG.baseUrl}/person/possible-donations`);
  }
}
