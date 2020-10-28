import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector:'app-child-component',
    template:'This is Child component',
    styles:['']
})
export class ChildComponent{
    constructor(private service: SharedService){
        console.log('From Child component', service.number1 )
      }
}