import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-analyse',
  standalone: false,
  templateUrl: './analyse.component.html',
  styleUrl: './analyse.component.css'
})
export class AnalyseComponent {
  nameMachine: string = '';
  lineMachine: number = 0;
  idMachine: number = 0;

  defectDescription: string = ''; // User input for defect
  selectedRegleurId: number | null = null; // Store Regleur ID
  regleurs: { id: number; name: string ;role:string}[] = []; // Store regleurs with ID

  apiUrl: string = 'http://localhost:8080'; // API base URL

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,private sharedService: SharedService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nameMachine = params['name'];
      this.lineMachine = +params['line']; // Convert to number
      this.idMachine = +params['id'];
    });

    this.fetchRegleurs(); // Load regleurs from API
  }

  // Fetch regleurs from backend
  fetchRegleurs() {
    this.http.get<{ id: number; name: string ;role:string}[]>(`${this.apiUrl}/regleurs`).subscribe({
      next: (response) => {
        this.regleurs = response;
      },
      error: (error) => {
        console.error("Error fetching regleurs:", error);
      }
    });
  }

  // Validate and submit the defect form
  submitDefect() {
    if (!this.defectDescription || !this.selectedRegleurId) {
      alert("All fields are required!");
      return;
    }

    const defectData = {
      name: this.defectDescription,
    
    };
    console.log("defectData:",defectData)
    this.http.post(`${this.apiUrl}/defects/${this.idMachine.toString()}/${this.selectedRegleurId.toString()}`, defectData).subscribe({
      next: () => {
        console.log(defectData);
        this.sharedService.setThree(true); // Hide the main view
        alert("Defect declared successfully!");
        this.router.navigate(['/']); // Redirect after submission
      },
      error: (error) => {
        console.error("Error submitting defect:", error);
      }
    });
  }
}
