import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',
    title: 'Início',
    data: { description: 'Início' },
    loadComponent:
      () => import('./pages/home/home.component')
        .then(c => c.HomeComponent),
  },
  {
    path: 'administracao',
    title: 'Administração',
    data: { description: 'Administração' },
    loadComponent: 
      () => import('./pages/administracao/administracao.component')
        .then(c => c.AdministracaoComponent),
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
