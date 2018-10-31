import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ContactComponent } from 'src/app/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
