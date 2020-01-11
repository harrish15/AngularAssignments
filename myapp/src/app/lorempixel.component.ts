import { Component } from "@angular/core";

@Component({
  selector: "app-lorempixel",
  template: `
    <div class="container">
      <br /><br /><br /><br /><br />
      <h3>LoremPixel Art</h3>
      <img src="{{ imgURL | add_s: 4 }}" title="lorempixel" alt="Lorempixel" />
    </div>
    <br /><br />
  `,
  styles: [``]
})
export class lorempixelComponent {
  imgURL = "http://lorempixel.com/400/200";
}
