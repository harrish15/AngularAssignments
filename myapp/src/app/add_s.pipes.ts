import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'add_s'
})

export class add_sPipes implements PipeTransform{
    transform(val,arg){
        if(arg === undefined){ return val;}
        if(arg != undefined){ //return val.substring(0,arg)+"s"+ val.substring(4,val.length);
        return val.replace('http','https');
    }
    }
}