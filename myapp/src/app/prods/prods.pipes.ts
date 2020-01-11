import { Pipe, PipeTransform } from "@angular/core";
import { Iprod } from "../shared/model/prod";
@Pipe({
  name: "search"
})
export class searchPipes implements PipeTransform {
  transform(val: Iprod[], arg: string) {
    if (!val) {
      return [];
    }
    if (!arg) {
      return val;
    }
    return val.filter((item: Iprod) =>
      item.product.toLowerCase().includes(arg.toLowerCase())
    );
  }
}
