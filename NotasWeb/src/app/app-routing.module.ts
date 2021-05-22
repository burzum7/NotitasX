import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNotaComponent } from '../app/pages/crear-nota/crear-nota.component';
import { ListaNotasComponent } from '../app/pages/lista-notas/lista-notas.component';
import { EditarNotaComponent } from '../app/pages/editar-nota/editar-nota.component';
import { FooterComponent } from '../app/pages/footer/footer.component';

const routes: Routes = [
  {path:"",component:CrearNotaComponent},
  {path:"crear-nota",component:CrearNotaComponent},
  {path:"lista-notas",component:ListaNotasComponent},
  {path:"editar-nota",component:EditarNotaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
