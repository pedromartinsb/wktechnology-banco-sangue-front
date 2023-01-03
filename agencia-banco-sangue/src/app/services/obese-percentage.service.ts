import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObesePercentage } from '../models/obese-percentage';

@Injectable({
  providedIn: 'root'
})
export class ObesePercentageService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<ObesePercentage[]> {
    return this.http.get<ObesePercentage[]>(`${API_CONFIG.baseUrl}/person/obese-percentage`);
  }
}
