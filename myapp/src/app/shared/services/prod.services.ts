import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Iprod } from "../model/prod";

@Injectable({ providedIn: "root" })
export class ProdServices {
  private prodApiUrl: string = "../../../assets/productapi.json";
  constructor(private http: HttpClient) {}
  getProds(): Observable<Iprod> {
    return this.http.get<Iprod>(this.prodApiUrl);
  }
}
