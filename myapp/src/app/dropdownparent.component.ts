import { Component } from "@angular/core";

@Component({
  selector: "app-dropdownparent",
  template: `
    <app-dropdown>
      <ul class="dropdown-menu">
        <!-- Dropdown menu links-->
        <li class="dropdown-item" href="#">Action</li>
        <li class="dropdown-item" href="#">Another action</li>
        <li class="dropdown-item" href="#">Something else here</li>
        <li class="dropdown-divider"></li>
        <li class="dropdown-item" href="#">Separated link</li>
      </ul>
    </app-dropdown>
    <br />
    <br />
    <br />
  `,
  styles: [``]
})
export class dropdownParentComponent {}
