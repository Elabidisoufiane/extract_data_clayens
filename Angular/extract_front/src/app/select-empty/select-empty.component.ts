import { Component } from '@angular/core';
import { ButtonStateService } from '../button-state.service';
@Component({
  selector: 'app-select-empty',
  standalone: false,
  templateUrl: './select-empty.component.html',
  styleUrl: './select-empty.component.css'
})
export class SelectEmptyComponent {
  buttonStates: { [key: string]: boolean } = {}; // Map to store button states
  buttonStates1: { [key: string]: boolean } = {}; // Map to store button states

  // Define button keys as class properties
  buttonKeys = [
    'buse_1', 'avant_1', 'zone1_1', 'zone2_1', 'zone3_1', 'zone4_1',
    'zone5_1', 'zone6_1', 'arriere_1', 'fa_1', 'fl_1', 'ma_1', 'ml_1', 'pi_1'
  ];

  buttonKeys1 = [
    'buse_2', 'avant_2', 'zone1_2', 'zone2_2', 'zone3_2', 'zone4_2',
    'zone5_2', 'zone6_2', 'arriere_2', 'fa_2', 'fl_2', 'ma_2', 'ml_2', 'pi_2'
  ];

  constructor(private service: ButtonStateService) {
    this.initializeButtonStates();
  }

  initializeButtonStates() {
    this.buttonKeys.forEach(key => {
      if (!['zone5_1', 'zone6_1','pi_1'].includes(key)) {
        this.buttonStates[key] = true; // Set to true for keys not in the exclusion list
      } else {
        this.buttonStates[key] = false; // Set to false for keys in the exclusion list
      }
    });
    this.buttonKeys1.forEach(key => {
      if (!['zone5_2', 'zone6_2','pi_2'].includes(key)) {
        this.buttonStates1[key] = true; // Set to true for keys not in the exclusion list
      } else {
        this.buttonStates1[key] = false; // Set to false for keys in the exclusion list
      }
    });
  }

  toggleButtonState(key: string) {
    if (this.buttonKeys.includes(key)) {
      this.buttonStates[key] = !this.buttonStates[key]; // Toggle value
    } else if (this.buttonKeys1.includes(key)) {
      this.buttonStates1[key] = !this.buttonStates1[key]; // Fix reference
    }
  }

  navigate(){
    this.service.setButtonStates(this.buttonStates);
    this.service.setButtonStates1(this.buttonStates1);
  }


}
