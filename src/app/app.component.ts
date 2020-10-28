import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  constructor(private service: SharedService){
    service.number1 = 1;
    console.log('From App', service.number1 )
  }
}
