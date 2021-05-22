import { Component, OnInit } from '@angular/core';
import { Notas } from '../../interfaces/notas';
import { NotasService } from '../../notas.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  listaNotas:Array<Notas> = [];
  formulario:FormGroup;
  inputTitulo:any;
  inputEstado:any;
  inputDescripcion:any;
  selectedValue: any;

  constructor(public fb:FormBuilder, public notasService: NotasService, private router: Router){
    this.formulario = fb.group({
      inputTitulo: [this.notasService.titulo],
      inputEstado: [this.notasService.estado],
      inputDescripcion: [this.notasService.descripcion],
    })
  }

  ngOnInit(): void {
    this.notasService.obtenerNotas().subscribe(notas => {

      this.listaNotas = notas;
    });
  }

  editarNota(item:string, state:number, descripcion:string) {
    this.notasService.titulo = item;
    // console.log(this.notasService.titulo);
    this.notasService.estado = state;
    // console.log(this.notasService.estado);
    this.notasService.descripcion = descripcion;
    // console.log(this.notasService.descripcion);
    this.router.navigate(['editar-nota']);
  }

  eliminarNota(){
    let notaBorrar:Notas = {titulo:this.inputTitulo, estado:this.inputEstado, descripcion:this.inputDescripcion};
    this.notasService.borrarNota(notaBorrar);
    this.router.navigate(['lista-notas']);
  }
}

