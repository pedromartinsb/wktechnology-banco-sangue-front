import { Candidate } from './../models/candidate';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindCandidatesService {

  constructor(private http: HttpClient) { }

  find(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${API_CONFIG.baseUrl}/person/find-candidates`)
  }
}
