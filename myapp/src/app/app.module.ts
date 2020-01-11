import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { gadgetDetail } from "./gadget";
import { GadgetsComponent } from "./gadget.component";
import { TablesComponent } from "./tables.component";
import { tableDetails } from "./tables";
import { HeartComponent } from "./heart.component";
import { MFComponent } from "./malefemale.component";
import { TwitterComponent } from "./twitter.component";
import { LikeComponent } from "./like.component";
import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.component";
import { ElectronicComponent } from "./electronics.component";
import { MobileComponent } from "./mobile.component";
import { TVComponent } from "./tv.component";
import { LaptopComponent } from "./laptop.component";
import { AcComponent } from "./ac.component";
import { lorempixelComponent } from "./lorempixel.component";
import { add_sPipes } from "./add_s.pipes";
import { dropdownComponent } from "./dropdown.component";
import { dropdownDirectiveComponent } from "./dropdownDirectives.component";
import { dropdownDirectives } from "./dropdown.directives";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TemplateComponent } from "./templateForm/template.component";
import { ReactiveComponent } from "./reactiveForm/reactiveForm.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { dropdownParentComponent } from "./dropdownparent.component";
import { dropdownDirectiveParentComponent } from "./dropdownDirectiveParent.component";
import { ProdsComponent } from "./prods/prods.component";
import { ProdComponent } from "./prod/prod.component";
import { HttpClientModule } from "@angular/common/http";
import { searchPipes } from "./prods/prods.pipes";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { GithubSearchEngineComponent } from './github-search-engine/github-search-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    GadgetsComponent,
    TablesComponent,
    HeartComponent,
    MFComponent,
    TwitterComponent,
    LikeComponent,
    ParentComponent,
    ChildComponent,
    ElectronicComponent,
    MobileComponent,
    TVComponent,
    AcComponent,
    LaptopComponent,
    lorempixelComponent,
    add_sPipes,
    dropdownComponent,
    dropdownDirectiveComponent,
    dropdownDirectives,
    TemplateComponent,
    ReactiveComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    dropdownParentComponent,
    dropdownDirectiveParentComponent,
    ProdsComponent,
    ProdComponent,
    searchPipes,
    UserRegistrationComponent,
    UserLoginComponent,
    GithubSearchEngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [gadgetDetail, tableDetails],
  bootstrap: [AppComponent]
})
export class AppModule {}
