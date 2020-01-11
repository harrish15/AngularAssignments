import { Component } from '@angular/core';
import { gadgetDetail } from './gadget';

@Component({
  selector: 'app-gadget',
  template: `
  <h1>Task Pahila</h1>
  <h2>Laptop List</h2>
  <ul *ngFor="let laptop of laptopDetail">
    <li>{{laptop}}</li>
  </ul>
  <h2>Mobile List</h2>
  <ul *ngFor="let mobile of mobileDetail">
    <li>{{mobile}}</li>
  </ul>
  `,
  styles: [`
  ul li {
      list-style-type: none;
  }
  `]
})
export class GadgetsComponent {
    laptopDetail:Array<string>;
    mobileDetail:Array<string>;
    constructor(private gadget:gadgetDetail){
        this.laptopDetail = gadget.getLaptopDetail();
        this.mobileDetail = gadget.getMobileDetail();
  }
}