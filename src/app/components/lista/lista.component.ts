import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
