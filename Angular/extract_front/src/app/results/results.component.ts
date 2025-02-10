import { Component } from '@angular/core';
import { ButtonStateService } from '../button-state.service';
import { UploadService } from '../upload.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule here

  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  responseData: any;
  responseData1: any;
  buttonstate:any;
  buttonstate1:any;
  results: any ;
  index: number = 0;
  index1: number = 0;
  values: { [key: string]: string } = {}; // Store input values
  values1: { [key: string]: string } = {}; // Store input values
  buttonStates: { [key: string]: boolean } = {}; // Store input values
  buttonStates1: { [key: string]: boolean } = {}; // Store input values

  buttonKeys = ['buse_1', 'avant_1', 'zone1_1', 'zone2_1', 'zone3_1', 'zone4_1', 'zone5_1', 'zone6_1', 'arriere_1', 'fa_1', 'fl_1', 'ma_1', 'ml_1', 'pi_1'];
  buttonKeys1 = ['buse_2', 'avant_2', 'zone1_2', 'zone2_2', 'zone3_2', 'zone4_2', 'zone5_2', 'zone6_2', 'arriere_2', 'fa_2', 'fl_2', 'ma_2', 'ml_2', 'pi_2'];

  constructor(private service: ButtonStateService , private service1:UploadService) {
    this.initializeValues();
  }

  initializeValues() {
    this.results= this.service1.getResponseData();
    console.log("results data:", this.results);
    console.log("values1 index 1 :", this.results.column2[0]);

    this.responseData = this.service.getButtonStates();
    console.log("Response data:", this.responseData);
    this.responseData1 = this.service.getButtonStates1();
    console.log("Response data1:", this.responseData1);
    this.buttonKeys.forEach(key => {
      this.values[key] = this.responseData[key] ? this.results.column1[this.index++] || "" : "";
    });

    this.buttonKeys1.forEach(key => {
      this.values1[key] = this.responseData1[key] ? this.results.column2[this.index1++] || "" : "";
    });
    console.log("values :",this.values);
    console.log("values1 :",this.values1);
  }
  updateValue(event: Event, key: string) {
    const inputValue = (event.target as HTMLElement).innerText.trim();
    this.values[key] = inputValue; // Updates the value and triggers ngClass update
  }
  
  updateValue1(event: Event, key: string) {
    const inputValue = (event.target as HTMLElement).innerText.trim();
    this.values1[key] = inputValue;
  }
  
  
  /*initializeValues() {
    this.buttonKeys.forEach(key => this.buttonStates[key] = "");
    this.buttonKeys1.forEach(key => this.buttonStates1[key] = "");
  }*/
}
