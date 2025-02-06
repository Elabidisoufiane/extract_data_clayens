import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ButtonStateService {
  private apiUrl = 'http://your-backend-api.com/apply-states'; // Change this URL to your backend endpoint

  constructor(private http: HttpClient) {}

  sendButtonStates(states: any): Observable<any> {
    return this.http.post(this.apiUrl, states);
  }
}
