import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { PartnerService } from 'src/app/service/partner.service';
import { PartnerDataDto } from '../../model/partner.model';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private partnerService:PartnerService,private toastr: ToastrService) { }
  partners: PartnerDataDto[];
  searchForm: FormGroup;
  submitted = false;
  loading: boolean = false; // Flag variable


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      startlat: ['', Validators.required],
      startlon: ['', Validators.required],
      distance: ['', Validators.required]
    });

  }

  get f() { return this.searchForm.controls; }

  onSubmit(){
    this.submitted = true;
    this.loading = !this.loading;
    if (this.searchForm.invalid) {
      return;
  }
    this.partnerService.search( this.searchForm.value).subscribe(
      partnersResult => {
         this.partners=partnersResult.data;  
         this.loading=false;     
      },
      error => {
        this.toastr.error(error,'Problem with Searching Data!');
        this.loading=false;   
      });
  }
}
