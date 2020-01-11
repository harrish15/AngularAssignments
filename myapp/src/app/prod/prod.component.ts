import { Component, OnInit, Input } from "@angular/core";
import { ProdServices } from "../shared/services/prod.services";
import { Iprod } from "../shared/model/prod";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-prod",
  templateUrl: "./prod.component.html",
  styleUrls: ["./prod.component.css"]
})
export class ProdComponent implements OnInit {
  public prodData: Iprod[];
  // @Input() id:number;
  constructor(
    private ps: ProdServices,
    private AR: ActivatedRoute,
    private router: Router
  ) {
    this.AR.params.subscribe(item => {
      console.log(item);
      this.ps.getProds().subscribe((data: any) => {
        this.prodData = data;
        this.prodData.find((da: any) => {
          if (da.productId.toString() == item["productId"].toString()) {
            alert(JSON.stringify(da));
            this.prodData.length = 0;
            this.prodData.push(da);
            return true;
          } else {
            return false;
          }
        });
      });
    });
  }

  ngOnInit() {
    // console.log(this.id);
  }

  backBtnClicked() {
    this.router.navigateByUrl("/prods");
  }
}
