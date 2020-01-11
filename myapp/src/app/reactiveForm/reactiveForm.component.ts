import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {Iuser} from '../shared/model/reactiveuser';
import {Regx} from './regx';
@Component({
    selector: 'app-reactive',
    templateUrl: './reactiveForm.component.html',
    styleUrls: ['./reactiveForm.component.css']
})
export class ReactiveComponent implements OnInit {
    public userForm:FormGroup;
    public submitted:boolean = false;
    constructor(private FB:FormBuilder) { }

    ngOnInit(): void { 
        this.userForm = this.FB.group({
 'username': ['',[Validators.required,Validators.minLength(5),Regx.Username]],
 'password': ['', Validators.required],
 'email': ['', Validators.required]
        })
    };
    Save(data:Iuser){
        this.submitted = true;
        if(!this.userForm.valid){return;}
console.log(data);
    }
}
