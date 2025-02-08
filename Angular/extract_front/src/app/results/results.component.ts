import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  responseData: any;

  constructor(private service:UploadService) {}

  getData() {
    this.responseData= this.service.getResponseData();
    console.log("this is response data from result.ts",this.responseData)
  }
}
