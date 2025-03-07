import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  standalone: false,
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  three: boolean = true;
  src:String= 'machine.png';
  machines: {  label: string, hasError: boolean, line: number }[] = []; // Initialize as empty

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.subscribe(() => {
      this.three = true; // ✅ Reset `three` when navigating back
    });
  }

  ngOnInit() {
    // Fetch machines from the backend API
    this.http.get<any[]>('http://localhost:8080/machines').subscribe((response) => {
      // Map the API response to your desired machine data format
      this.machines = response.map(machine => ({
         // Assuming the image name corresponds to the machine name
        label: machine.name,               // Use the machine name as the label
        hasError: machine.state,
        line: machine.line           // Map the state to hasError
      }));
    });
    console.log(this.machines)
  }

  navigateToDetail(hasError: boolean, label: string, line: number) {
    let path = hasError ? `/red/${label}/${line}` : `/green/${label}/${line}`;
    console.log("line :",line)
    this.three = false ;

  this.router.navigate(path.split('/'));
  }
}
