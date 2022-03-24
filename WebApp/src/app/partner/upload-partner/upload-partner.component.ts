import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/service/partner.service';

@Component({
  selector: 'app-upload-partner',
  templateUrl: './upload-partner.component.html',
  styleUrls: ['./upload-partner.component.css']
})
export class UploadPartnerComponent implements OnInit {

  constructor( private partnerService:PartnerService) { }

   // Variable to store shortLink from api response
   shortLink: string = "";
   loading: boolean = false; // Flag variable
   file: File = null; // Variable to store file

  ngOnInit() {
  }
  
   // On file Select
   onChange(event) {
    this.file = event.target.files[0];
}

   // OnClick of button Upload
   onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.partnerService.upload(fileReader.result)
    .subscribe(
      data => {
          alert('data uploaded successfully.');     
      },
      error => {
        alert(error);
      });
    }
    fileReader.readAsText(this.file);
   
}
}
