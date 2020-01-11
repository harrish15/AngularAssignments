import { Component } from "@angular/core";

@Component({
  selector: "app-dropdown",
  template: `
    <div class="container">
      <div class="row">
        <h3>Dropdown through ngContent</h3>
      </div>
      <br />
      <div class="row">
        <div class="dropdown" [class.dropup]="isActive">
          <button
            type="button"
            class="btn btn-danger dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            (click)="Active()"
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
    `
  ]
})
export class dropdownComponent {
  isActive = false;
  Active() {
    this.isActive = !this.isActive;
  }
}
