import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  urlEnvironment = environment.url;

  getPrueba() {
    return this.http.get('https://demo-backend-deploy-jhoel.herokuapp.com/', {
      responseType: 'text',
    });
  }
}
