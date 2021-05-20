import { Injectable } from '@angular/core';
import { Notas } from './interfaces/notas';


@Injectable({
  providedIn: 'root'
})

export class NotasService {

  notas:Array<Notas> = [];
  titulo:string = "";
  estado:number = 0;

  constructor() { }

  cambiarEstado(t:string, s:number) {
    this.notas.map(nota => {       
      if (nota.titulo === t) nota.estado = s
    })
  }
}
