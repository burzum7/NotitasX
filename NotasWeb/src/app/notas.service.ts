import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notas } from './interfaces/notas';


@Injectable({
  providedIn: 'root'
})

export class NotasService {

  servicioURL: string = "http://127.0.0.1:3003/"

  notas:Array<Notas> = [];
  titulo:string = "";
  estado:number = 0;
  descripcion = "";

  constructor(private servicio: HttpClient) { }

  // crearNota(notita:Notas){
  //   return this.servicio.post(this.servicioURL, notita);
  // }

  // cambiarEstado(text:string, s:number){
  //   this.notas.map(nota => {       
  //     if (nota.titulo === text) nota.estado = s})
  // }

  // cambiarDescripcion(text:string, desc:string){
  //   this.notas.map(nota => {
  //     if (nota.titulo == text) nota.descripcion = desc})
  // }
  
  borrarNota(notita:any){
    return this.servicio.post(`${this.servicioURL}notaBorrar`, notita).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
  );
  }

  editarNota(notita: any) {
    console.log("X", notita);
    return this.servicio.put(`${this.servicioURL}notasEdit`, notita).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }

  obtenerNotas():Observable<any>{
    return this.servicio.get(`${this.servicioURL}notas`);
  }

  crearNota(notita:any) {
    return this.servicio.post(`${this.servicioURL}notas`, notita).subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err)
    );
  }
}
