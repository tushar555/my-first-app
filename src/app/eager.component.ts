import { Component } from "@angular/core";
import { SharedService } from './shared.service';

@Component({
    selector:'app-eager',
    template:'',
    styles:[]
})
export class EagerComponent{
    constructor(private service: SharedService){
        console.log('From Eager', service.number1);
    }
}