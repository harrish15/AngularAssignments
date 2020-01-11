import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Ilogin } from "../shared/model/login";
import { Regx } from "./regx";
import { PostsUserLoginRegisterServices } from "../shared/services/userLoginRegistration.services";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  public submitted: boolean = false;
  public userLoginForm: FormGroup;
  constructor(
    private FB: FormBuilder,
    private ps: PostsUserLoginRegisterServices
  ) {}

  ngOnInit() {
    this.userLoginForm = this.FB.group({
      UserLogin: this.FB.group({
        UserName: [""],
        Password: [""]
      })
    });
  }
  Save(data: Ilogin) {
    this.submitted = true;
    if (!this.userLoginForm.valid) {
      return;
    }
    console.log(data);
    this.ps.postUserLogin(data).subscribe((item: Ilogin) => {
      console.log(item);
      let response: any = item;
      if (response.Error != undefined) {
        alert(response.Error);
      } else {
        alert(JSON.stringify(response));
      }
    });
  }
}
