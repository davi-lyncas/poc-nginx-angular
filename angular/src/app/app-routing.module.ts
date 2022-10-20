import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'inicio',
    title: 'Início',
    data: { description: 'Início' },
    loadComponent:
      () => import('./pages/inicio/inicio.component')
        .then(c => c.InicioComponent),
  },
  {
    path: 'administracao',
    title: 'Administração',
    data: { description: 'Administração' },
    loadComponent: 
      () => import('./pages/administracao/administracao.component')
        .then(c => c.AdministracaoComponent),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  { //Fallback to classic app when route doesn't exists or wasn't migrated yet
    path: '**',
    loadComponent:
      () => import('./components/classic-app/classic-app.component')
        .then(c => c.ClassicAppComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
