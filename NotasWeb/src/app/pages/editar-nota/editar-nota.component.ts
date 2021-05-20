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
  selectedValue: any;
  disabledName = true;
  

  constructor(public fb:FormBuilder, public notasService: NotasService, private router: Router,) { 
    this.formulario = fb.group({
      inputTitulo: [this.notasService.titulo],
      inputEstado: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.inputTitulo = this.formulario.controls["inputTitulo"] as FormGroup;
    this.selectedValue = this.formulario.controls["inputEstado"] as FormGroup;
    this.formulario.get('inputTitulo')?.disable();
  }

  delete(titulo:string, estado:number) {

  }

  onSubmit1() {
    let nota:Notas = {titulo:this.formulario.controls['inputTitulo'].value, estado:this.formulario.controls['inputEstado'].value}
    if ( this.formulario.controls['inputTitulo'].value != "" && this.formulario.controls['inputEstado'].value != 0 ) {
      this.notasService.cambiarEstado(this.inputTitulo.value, this.selectedValue.value);
      console.log(this.inputTitulo.value);
      this.router.navigate(['lista-notas']);
    }
  }
}
