import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProdsComponent } from "./prods/prods.component";
import { AboutComponent } from "./about/about.component";

import { GadgetsComponent } from "./gadget.component";
import { TablesComponent } from "./tables.component";
import { HeartComponent } from "./heart.component";
import { MFComponent } from "./malefemale.component";
import { TwitterComponent } from "./twitter.component";
import { ParentComponent } from "./parent.component";
import { ElectronicComponent } from "./electronics.component";
import { lorempixelComponent } from "./lorempixel.component";
import { dropdownComponent } from "./dropdown.component";
import { dropdownDirectiveComponent } from "./dropdownDirectives.component";
import { TemplateComponent } from "./templateForm/template.component";
import { ReactiveComponent } from "./reactiveForm/reactiveForm.component";
import { dropdownParentComponent } from "./dropdownparent.component";
import { dropdownDirectiveParentComponent } from "./dropdownDirectiveParent.component";
import { ProdComponent } from "./prod/prod.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";

export const routes: Route[] = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "prods",
    component: ProdsComponent
  },
  {
    path: "prod/:productId",
    component: ProdComponent
  },
  {
    path: "user-registration",
    component: UserRegistrationComponent
  },
  {
    path: "user-login",
    component: UserLoginComponent
  },
  {
    path: "gadget",
    component: GadgetsComponent
  },
  {
    path: "table",
    component: TablesComponent
  },
  {
    path: "heart",
    component: HeartComponent
  },
  {
    path: "malefemale",
    component: MFComponent
  },
  {
    path: "twitter",
    component: TwitterComponent
  },
  {
    path: "parent",
    component: ParentComponent
  },
  {
    path: "electronic",
    component: ElectronicComponent
  },
  {
    path: "lorempixel",
    component: lorempixelComponent
  },
  {
    path: "dropdownParent",
    component: dropdownParentComponent,
    children: [{ path: "dropdownng", component: dropdownComponent }]
  },
  {
    path: "dropdownDirectiveParent",
    component: dropdownDirectiveParentComponent,
    children: [
      { path: "dropdownDirective", component: dropdownDirectiveComponent }
    ]
  },
  {
    path: "template",
    component: TemplateComponent
  },
  {
    path: "reactive",
    component: ReactiveComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];
