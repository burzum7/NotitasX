import { Component, OnInit } from '@angular/core';
//import { Notas } from '../../interfaces/notas';
import { NotasService } from '../../notas.service';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  constructor(public notasService: NotasService) { }

  ngOnInit(): void {
  }

  editarNota(item:string, state:number) {
    this.notasService.titulo = item;
    console.log(this.notasService.titulo);
    this.notasService.estado = state;
    console.log(this.notasService.estado);
  }
}
