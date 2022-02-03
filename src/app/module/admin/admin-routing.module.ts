import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './compononets/about/about.component';
import { DashbordComponent } from './compononets/dashbord/dashbord.component';
import { HomePageComponent } from './compononets/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:DashbordComponent ,children:[
   {path:'homePage',component:HomePageComponent},
   {path:'about', component:AboutComponent},
   {path:'', redirectTo:'homePage' ,pathMatch:'full'}

  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
