import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {
  @Input() items:any;
  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
