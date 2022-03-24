import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { PartnerService } from 'src/app/service/partner.service';
import { PartnerDataDto } from '../../model/partner.model';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router , private partnerService:PartnerService) { }
  partners: PartnerDataDto[];
  searchForm: FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      startlan: ['', Validators.required],
      startlon: ['', Validators.required],
      distance: ['', Validators.required]
    });

  }

  search(){
    this.partnerService.search( this.searchForm.value).subscribe(
      partnersResult => {
         this.partners=partnersResult.data;    
      },
      error => {
        alert(error);
      });
  }
}
