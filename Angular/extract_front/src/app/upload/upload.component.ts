import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploaded = false;
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  apiUrl = 'http://127.0.0.1:5001/extract';

  constructor(private router: Router, private http: HttpClient, private dataService: UploadService) {}

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
      this.uploaded = true;
      reader.readAsDataURL(this.selectedFile);

      this.uploadImage();
    }
  }

  uploadImage() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post<any>(this.apiUrl, formData).subscribe({
      next: (response) => {
        console.log('Response from Flask server:', response);
        this.dataService.setResponseData(response);  // Store the response in the service
      },
      error: (error) => {
        console.error('Error uploading image:', error);
      }
    });
  }

}
