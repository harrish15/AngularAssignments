import { Component } from "@angular/core";

@Component({
  selector: "app-dropdownDirective",
  template: `
    <div class="container">
      <div class="row">
        <h3>Dropdown through ngContent and Custom Directives</h3>
      </div>
      <br />
      <div class="row">
        <div dropdwn class="dropdown">
          <button
            type="button"
            class="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown Action
          </button>
          <ng-content select=".dropdown-menu"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        height: 300px;
      }

      .show {
        display: block;
      }

      .dropdown {
        position: absolute;
      }
    `
  ]
})
export class dropdownDirectiveComponent {
  Active: boolean = false;
}
