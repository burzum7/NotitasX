import { Component, OnInit } from '@angular/core';
import { Notas } from '../../interfaces/notas';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NotasService } from '../../notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})

export class CrearNotaComponent implements OnInit {

  inputTitulo:string = "";
  inputEstado:number = 0;
  inputDescripcion:String = "";
  formulario:FormGroup;

  constructor(public fb:FormBuilder, public nService:NotasService, private router:Router){
    this.formulario = fb.group({
      inputTitulo:new FormControl(''),
      inputEstado:new FormControl(''),
      inputDescripcion:new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let nota:Notas = {titulo:this.formulario.controls['inputTitulo'].value, estado:this.formulario.controls['inputEstado'].value, descripcion:this.formulario.controls['inputDescripcion'].value}
    if (this.formulario.controls['inputTitulo'].value != "" && this.formulario.controls['inputEstado'].value != 0 && this.formulario.controls['inputDescripcion'].value != 0){
      //this.nService.notas.push(nota);
      console.log(nota);
      this.nService.crearNota(nota);
      this.router.navigate(['lista-notas']).then(() => {
        window.location.reload();
      });
    }
    else{
      alert("Rellene po");
    }
  }
}