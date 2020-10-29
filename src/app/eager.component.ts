import { Component } from "@angular/core";
import { SharedService } from './shared.service';

@Component({
    selector:'app-eager',
    template:'<h6>This is eager Component</h6>',
    styles:[]
})
export class EagerComponent{
    constructor(private service: SharedService){
        console.log('From Eager', service.number1);
    }
}