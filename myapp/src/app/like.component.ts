import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: "app-like",
    template: `
    <i class="fa" aria-hidden="true" title="Like"
    (click) = "Action()"
    [class.fa-heart-o] = "!isActive"
    [class.fa-heart] = "isActive"    
    ></i><span class= "like" *ngIf="like > 0">{{like}}</span>        
    `,
    styles: [`
    i {
        padding: 5px 5px 5px 5px;
    }

    i.fa-heart{
        color: red;
    }

    span.like{
        margin-left: 5px;
    }
    `]
})

export class LikeComponent{
    isActive:boolean = false;
    @Input() like:number;
    
    @Output() evEmit = new EventEmitter();
    Action(){
        this.isActive = !this.isActive;
        if(this.isActive){
            this.like += 1;
        }
        if(!this.isActive){
            this.like -= 1;
        }
        this.evEmit.emit(this.like);        
    }    
}