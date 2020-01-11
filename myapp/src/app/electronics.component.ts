import { Component } from "@angular/core";

@Component({
  selector: "app-electronic",
  template: `
    <div class="row">
      <div class="btncontainer">
        <div class="row">
          <button
            type="button"
            class="btn btn-outline-primary active"
            (click)="AddTV()"
            [disabled]="isActiveTV"
          >
            TV
          </button>
        </div>
        <div class="row">
          <button
            type="button"
            class="btn btn-outline-primary active"
            (click)="AddAC()"
            [disabled]="isActiveAC"
          >
            AC
          </button>
        </div>
        <div class="row">
          <button
            type="button"
            class="btn btn-outline-primary active"
            (click)="AddLaptop()"
            [disabled]="isActiveLaptop"
          >
            Laptop
          </button>
        </div>
        <div class="row">
          <button
            type="button"
            class="btn btn-outline-primary active"
            (click)="AddMobile()"
            [disabled]="isActiveMobile"
          >
            Mobile
          </button>
        </div>
      </div>
      <div class="displaycontainer" *ngIf="device" [ngSwitch]="device">
        <app-mobile
          *ngSwitchCase="'Mobile'"
          (evEmit)="LikeCount($event)"
          [like]="likeCount"
        ></app-mobile>
        <app-tv
          *ngSwitchCase="'TV'"
          (evEmit)="LikeCount($event)"
          [like]="likeCount"
        ></app-tv>
        <app-laptop
          *ngSwitchCase="'Laptop'"
          (evEmit)="LikeCount($event)"
          [like]="likeCount"
        ></app-laptop>
        <app-ac
          *ngSwitchCase="'AC'"
          (evEmit)="LikeCount($event)"
          [like]="likeCount"
        ></app-ac>
      </div>
    </div>
  `,
  styles: [
    `
      div.btncontainer {
        width: 20%;
        heigth: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      div.displaycontainer {
        width: 70%;
        heigth: auto;
      }
      button {
        width: 200px;
        margin: 10px 10px 10px 10px;
      }
    `
  ]
})
export class ElectronicComponent {
  device: string;
  isActiveTV: boolean = false;
  isActiveAC: boolean = false;
  isActiveMobile: boolean = false;
  isActiveLaptop: boolean = false;
  AddTV() {
    this.device = "TV";
    this.isActiveTV = true;
    this.isActiveAC = this.isActiveMobile = this.isActiveLaptop = false;
  }
  AddAC() {
    this.device = "AC";
    this.isActiveAC = true;
    this.isActiveTV = this.isActiveMobile = this.isActiveLaptop = false;
  }
  AddLaptop() {
    this.device = "Laptop";
    this.isActiveLaptop = true;
    this.isActiveAC = this.isActiveTV = this.isActiveMobile = false;
  }
  AddMobile() {
    this.device = "Mobile";
    this.isActiveMobile = true;
    this.isActiveAC = this.isActiveTV = this.isActiveLaptop = false;
  }
  likeCount: number = 10;
  LikeCount(item) {
    this.likeCount = item;
  }
}
