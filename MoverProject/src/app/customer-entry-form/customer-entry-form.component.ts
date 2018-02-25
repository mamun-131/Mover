import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-customer-entry-form',
  templateUrl: './customer-entry-form.component.html',
  styleUrls: ['./customer-entry-form.component.css'],

})
export class CustomerEntryFormComponent  {
  customertitle: string;

  constructor(){
    this.customertitle = "Enter the customer detail"
  }

  form = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    city: new FormControl()

  });
}
