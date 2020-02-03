import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  @Input() items:any;
 

  constructor() { }



  ngOnInit() {
    
  }

}
