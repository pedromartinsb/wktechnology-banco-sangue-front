import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs';
import { IMC } from './../models/imc';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateImcService {

  constructor(
    private http: HttpClient
  ) { }

  calculate(): Observable<IMC[]> {
    return this.http.get<IMC[]>(`${API_CONFIG.baseUrl}/person/calculate-imc`)
  }
}
