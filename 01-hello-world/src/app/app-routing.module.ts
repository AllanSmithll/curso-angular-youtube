import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent},
  { path: 'list', component: ListRenderComponent},
  { path: 'list/:id', component: ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
