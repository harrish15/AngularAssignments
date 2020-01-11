import {Component} from '@angular/core';

@Component({
    selector: "app-heart",
    template: `
    <h1>Task Doosra</h1><br>
    <h2>Heart Beat</h2>
    <i class="fa" aria-hidden="true"
    (click) = "Action()"
    [class.fa-heart-o] = "!isActive"
    [class.fa-heart] = "isActive"
    ></i>        
    `,
    styles: [`
    h1{
        text-decoration: underline;
    }
    i {
        margin-left: 60px;
    }
    i.fa-heart{
        color:red;
    }
    `]
})

export class HeartComponent{
    isActive:boolean = false;
    Action(){
        this.isActive = !this.isActive;
    }
}