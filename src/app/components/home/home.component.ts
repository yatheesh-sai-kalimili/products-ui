import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }


  ngOnInit(): void {


  }

    clicked = true;
    selectedFile: File;
    message: string;
    //Gets called when the user selects an File
    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];
      this.clicked = false;
      console.log(this,this.selectedFile);
    }
    //Gets called when the user clicks on submit to upload the File
    onUpload() {

      console.log(this.selectedFile);
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadExcelData = new FormData();
      uploadExcelData.append('file', this.selectedFile);
      //Make a call to the Spring Boot Application to save the File
      this.message = 'Excel uploaded successfully';
      this.clicked = true;
      this.httpClient.post('http://localhost:8081/api/products/upload', uploadExcelData)
        .subscribe();
    }



  }

