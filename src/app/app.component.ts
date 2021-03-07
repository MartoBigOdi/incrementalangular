import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrTareas: Tarea[];

  onTareaCreada($event){
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

  constructor(){
    this.arrTareas = [];
  }
}
