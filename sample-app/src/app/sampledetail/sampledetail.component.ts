import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sampledetail',
  template: `
  <h2>Booking Detail</h2>
  <ul *ngFor= "let book of Booking">
  <li>{{book.bookingid}}</li>
  <li>{{book.name}}</li>
  <li>{{book.customerid}}</li>
  </ul>
  `,
  styleUrls: ['./sampledetail.component.css']
})
export class SampledetailComponent implements OnInit {
  public Booking=[];

  constructor(private sampleservice:SampleService) { }

  ngOnInit() {
    this.sampleservice.getBookingDetails()
    .subscribe(data =>this.Booking=data);
  }
}
