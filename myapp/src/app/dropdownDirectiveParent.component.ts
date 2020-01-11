import { Component } from "@angular/core";

@Component({
  selector: "app-dropdownDirectiveParent",
  template: `
    <app-dropdownDirective>
      <ul class="dropdown-menu" id="myDropdown">
        <!-- Dropdown menu links -->
        <li class="dropdown-item" href="#">Action</li>
        <li class="dropdown-item" href="#">Another action</li>
        <li class="dropdown-item" href="#">Something else here</li>
        <li class="dropdown-divider"></li>
        <li class="dropdown-item" href="#">Separated link</li>
      </ul>
    </app-dropdownDirective>
    <br />
    <br />
    <br />
  `,
  styles: [
    `
      .dropdown-menu {
        float: inherit;
        position: relative;
      }
    `
  ]
})
export class dropdownDirectiveParentComponent {}
