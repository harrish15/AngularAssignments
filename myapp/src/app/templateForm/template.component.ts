import {Component} from '@angular/core';
import {TemplateUser} from '../shared/model/templateuser';
@Component({
    selector: 'app-template',
    templateUrl:'./template.component.html',
    styleUrls:['./template.component.css']
})

export class TemplateComponent {
    model = new TemplateUser();
    constructor(){}
    Save(data){
        console.log(data);
    }
}