import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[dropdwn]"
})
export class dropdownDirectives {
  className: string = "";
  item: any;
  constructor(public el: ElementRef) {
    this.item = this.el.nativeElement;
  }

  @HostBinding("class.dropup") isActive: boolean = false;
  @HostListener("click", ["$event"]) onClick(event) {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.className = "dropup show";
    }
    if (!this.isActive) {
      this.className = "dropdown";
    }
    this.item.addEventListener("click", event.stopPropagation());
    document.getElementById("myDropdown").classList.toggle("show");
  }
}
