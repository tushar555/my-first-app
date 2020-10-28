import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child-component';
import { SharedService } from './shared.service';


@NgModule({
    declarations:[ChildComponent],
    imports:[
        RouterModule.forChild([
            {
                path:'', component:ChildComponent
            }
        ])
    ],
    providers:[SharedService]
})
export class ChildModule{

}