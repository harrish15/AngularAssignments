import { Component, OnInit } from "@angular/core";
import { ProdServices } from "../shared/services/prod.services";
import { Iprod } from "../shared/model/prod";
import { Router } from "@angular/router";

@Component({
  selector: "app-prods",
  templateUrl: "./prods.component.html",
  styleUrls: ["./prods.component.css"]
})
export class ProdsComponent implements OnInit {
  public allData: Iprod;
  // public productId: number;
  public isActive: boolean; //bydefault value is false
  public btnText: string = "hide";
  constructor(private ps: ProdServices, private router: Router) {}

  ngOnInit() {
    this.ps.getProds().subscribe(data => {
      return (this.allData = data);
    });
  }

  btnClicked() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.btnText = "show";
    } else {
      this.btnText = "hide";
    }
  }

  backBtnClicked() {
    this.router.navigateByUrl("/home");
  }

  // linkClicked() {
  //   this.productId = this.allData.productId;
  // }
}
