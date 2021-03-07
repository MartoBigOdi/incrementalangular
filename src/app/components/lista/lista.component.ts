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


  mostrarTareas(){
    let resultado = '<ul>';

    for(let tarea of this.tareas){
      resultado += `<li>${tarea.titulo} <br> 
      ${tarea.descripcion} </li>`;
    }

    resultado += '</ul>';
    return resultado;
  }


}
