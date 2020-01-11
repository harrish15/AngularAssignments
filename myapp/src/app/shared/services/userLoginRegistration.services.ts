import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Ilogin } from "../model/login";
import { Iregistration } from "../model/userRegistration";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsUserLoginRegisterServices {
  private postsUserLoginUrl: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userloginasync";
  private postsUserRegistrationUrl: string =
    "http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync";
  public headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
  }
  postUserLogin(data): Observable<Ilogin> {
    return this.http.post<Ilogin>(this.postsUserLoginUrl, data, {
      headers: this.headers
    });
  }
  postUserRegistration(data): Observable<Iregistration> {
    console.log(data);
    // let userData = JSON.stringify(data);
    return this.http.post<Iregistration>(this.postsUserRegistrationUrl, data, {
      headers: this.headers
    });
  }
}
