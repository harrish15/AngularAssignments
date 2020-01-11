import { Component } from '@angular/core';

@Component({
    selector: "app-mf",
    template: `
    <h1 style="text-decoration:underline">Male or Female</h1>
        <button class="btn btn-outline-primary active col-lg-4 col-md-4 col-sm-12 col-xs-12"
            (click) = "MaleClick()"
            [disabled] = "isActiveMale ? true : false">MALE
        </button>
        <button type="button" class="btn btn-outline-primary active col-lg-4 col-md-4 col-sm-12 col-xs-12"            
            (click) = "FemaleClick()"
            [disabled] = "isActiveFemale ? true : false">FEMALE
        </button>
        <div class="row">
            <div class="male col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                [ngStyle] = "{
                    'display' : isActiveMale ? 'block' : 'none' 
                }">
                    <img class="img-fluid rounded-circle" title = "Male" src="../assets/img/face2.jpg" alt="Male">                    
                            <h4>John Doe</h4>
                            <footer>Angular Devloper</footer>                        
            </div>
            <div class="female col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                [ngStyle] = "{
                    'display' : isActiveFemale ? 'block' : 'none' 
                }">
                    <img class="img-fluid rounded-circle" title = "Female" src="../assets/img/face3.jpg" alt="Female">
                            <h4>Emma Doe</h4>
                            <footer>Angular Developer</footer>
            </div>            
        </div>
    `,
    styles: [`
        div.male, div.female {
            margin-top: 60px;
            margin-left: 30%;
            margin-bottom: 30px; 
        }
        h4 {
            margin-left: 10px;
        }
        button{
            margin: 30px 30px 30px 30px;
        }
    `]
})

export class MFComponent{
    isActiveMale:boolean = false;
    isActiveFemale:boolean = false;
    MaleClick(){
        this.isActiveMale = !this.isActiveMale;
        this.isActiveFemale = !this.isActiveMale;
    }
    FemaleClick(){
        this.isActiveFemale = !this.isActiveFemale;
        this.isActiveMale = !this.isActiveFemale;
    }
}