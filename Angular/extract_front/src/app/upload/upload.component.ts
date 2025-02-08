import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  uploaded = false ;
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result !== undefined && result !== null) {
          this.imageUrl = result;
          localStorage.setItem('uploadedImage', result.toString());
        }
      };
      this.uploaded=true;
      reader.readAsDataURL(this.selectedFile);
    }
  }




}
