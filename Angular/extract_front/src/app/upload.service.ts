import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private responseData: any = null;

  constructor() {}

  setResponseData(data: any) {
    this.responseData = data;
    console.log("this is data from the service :", this.responseData);
  }

  getResponseData() {
    console.log('Data retrieved from service:', this.responseData);  // Debugging log

    return this.responseData;
  }
}
