import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample',
  template: `<h2>Booking Detail</h2>
  <div *ngFor="let book of Booking">
  <ul>
  <li>{{book.bookingid}}</li>
  <li>{{book.hotelid}}</li>
  <li>{{book.roomid}}</li>
  <li>{{book.customerid}}</li>
  <li>{{book.checkin}}</li>
  <li>{{book.checkout}}</li>
  </ul>
  </div>`,
  styleUrls: ['./samplelist.component.css']
})
export class SampleListComponent implements OnInit {
  
  public Booking=[];

  constructor(private sampleservice:SampleService) { }

  ngOnInit() {
    this.sampleservice.getBookingDetails()
    .subscribe(data =>this.Booking=data);
  }

}
