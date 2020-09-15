import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path: 'search', redirectTo:'', pathMatch: 'full'},
  {path: '', component: SearchComponent},
  {path: 'display', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
