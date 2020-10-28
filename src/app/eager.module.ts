import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerComponent } from './eager.component';
import { SharedService } from './shared.service';

const routes: Routes = [
    {
        path: 'eager', component:EagerComponent
    }
]

@NgModule({
    declarations:[EagerComponent],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EagerModule{

}