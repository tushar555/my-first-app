import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { RouterModule, Routes } from '@angular/router';
import { EagerModule } from './eager.module';

const routes: Routes = [
  {
    path:'', component:AppComponent
  },
  {
    path:'child',loadChildren:()=>import('../app/child.module').then(m=>m.ChildModule)
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EagerModule,
    RouterModule.forRoot(routes),

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
