import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonStateService {
  private buttonStates: { [key: string]: boolean } = {};
  private buttonStates1: { [key: string]: boolean } = {};

  setButtonStates(data: any){
    this.buttonStates= data ;
  }
  setButtonStates1(data: any){
    this.buttonStates1= data ;
  }
  getButtonStates(){
    return this.buttonStates;
  }
  getButtonStates1(){
    return this.buttonStates1 ;
  }
}
