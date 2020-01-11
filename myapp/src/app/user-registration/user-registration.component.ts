import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Iregistration } from "../shared/model/userRegistration";
import { Ilogin } from "../shared/model/login";
import { Regx } from "./regx";
import { PostsUserLoginRegisterServices } from "../shared/services/userLoginRegistration.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  public submitted: boolean = false;
  public userForm: FormGroup;
  public userData: string;
  constructor(
    private FB: FormBuilder,
    private ps: PostsUserLoginRegisterServices,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.FB.group({
      FirstName: [""],
      LastName: [""],
      MobileNo: [""],
      EmailId: [""],
      UserLogin: this.FB.group({ UserName: [""], Password: [""] })
    });
  }
  Save(data: Iregistration) {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    console.log(data);
    this.userData = JSON.stringify(data);
    this.ps
      .postUserRegistration(this.userData)
      .subscribe((item: Iregistration) => {
        console.log(item);
        let response: any = item;
        if (response == true) {
          this.router.navigateByUrl("/user-login");
        } else if (response.Error != undefined) {
          alert(response.Error);
        }
      });
  }
}
