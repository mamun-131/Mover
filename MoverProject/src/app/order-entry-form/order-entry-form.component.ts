import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-order-entry-form',
  templateUrl: './order-entry-form.component.html',
  styleUrls: ['./order-entry-form.component.css']
})
export class OrderEntryFormComponent implements OnInit {
ordertitle: string;
  constructor() {
    this.ordertitle = "Insert Orders"
   }

  ngOnInit() {
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
