import { Component, OnInit } from '@angular/core';
import { Notas } from '../../interfaces/notas';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { NotasService } from '../../notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss']
})
export class EditarNotaComponent implements OnInit {

  formulario:FormGroup;
  inputTitulo:any;
  inputEstado:any;
  inputDescripcion:any;
  selectedValue: any;

  constructor(public fb:FormBuilder, public notasService: NotasService, private router: Router,) { 
    this.formulario = fb.group({
      inputTitulo: [this.notasService.titulo],
      inputEstado: [this.notasService.estado],
      inputDescripcion: [this.notasService.descripcion],
    })
  }

  ngOnInit(): void {
    this.inputTitulo = this.formulario.controls["inputTitulo"] as FormGroup;
    this.selectedValue = this.formulario.controls["inputEstado"] as FormGroup;
    this.inputDescripcion = this.formulario.controls["inputDescripcion"] as FormGroup;
    this.formulario.get('inputTitulo')?.disable();
    console.log(this.notasService.descripcion);
  }

  onSubmit1() {
    let nota:Notas = {titulo:this.formulario.controls['inputTitulo'].value, estado:this.formulario.controls['inputEstado'].value, descripcion:this.formulario.controls['inputDescripcion'].value}
    let notaX:Notas = {titulo:this.inputTitulo, estado:this.inputEstado, descripcion:this.inputDescripcion};

    if ( this.formulario.controls['inputTitulo'].value != "" && this.formulario.controls['inputEstado'].value != 0 && this.formulario.controls['inputDescripcion'].value != '') {
      
      let notitaEdit:Array<Notas> = [nota, notaX];
      this.notasService.editarNota(notitaEdit);
      
      // this.router.navigate(['lista-notas']).then(() => {
      //   window.location.reload();
      // });
      // this.notasService.cambiarEstado(this.inputTitulo.value, this.selectedValue.value);
      // console.log(this.inputTitulo.value);
      // this.notasService.cambiarDescripcion(this.inputTitulo.value, this.formulario.controls['inputDescripcion'].value)
      // this.router.navigate(['lista-notas']);
    }
  }
}
