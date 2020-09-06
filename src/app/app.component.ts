import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  mybutton="btn btn-warning";
  path="/assets/papa.jpg";
  myfunction(){
    console.log("Hello world");
  }

}
