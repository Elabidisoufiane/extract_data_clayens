import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonStates: { [key: string]: boolean } = {}; // Map to store button states

  constructor() {
    // Initialize states for all buttons
    this.initializeButtonStates();
  }

  initializeButtonStates() {
    // Define button keys based on their positions
    const buttonKeys = [
      'buse_1', 'buse_2', 
      'avant_1', 'avant_2', 
      'zone1_1', 'zone1_2',
      'zone2_1', 'zone2_2',
      'zone3_1', 'zone3_2',
      'zone4_1', 'zone4_2',
      'zone5_1', 'zone5_2',
      'zone6_1', 'zone6_2',
      'arriere_1', 'arriere_2',
      'fa_1', 'fa_2',
      'fl_1', 'fl_2',
      'ma_1', 'ma_2',
      'ml_1', 'ml_2',
      'pi_1', 'pi_2',
      // Add more if needed
    ];

    buttonKeys.forEach(key => {
      this.buttonStates[key] = true; // Default to true (empty)
    });
  }

  toggleButtonState(key: string) {
    this.buttonStates[key] = !this.buttonStates[key]; // Toggle value
  } 

  showStates(){
    console.log(this.buttonStates);
  }
}
