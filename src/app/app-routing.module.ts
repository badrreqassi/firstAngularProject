import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassWordComponent } from './components/forget-pass-word/forget-pass-word.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard'

const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'forgetPassWord', component:ForgetPassWordComponent},
  {path:'admin',canActivate:[AuthGuard]
  ,loadChildren:() => import('./module/admin/admin.module').then((m)=> m.AdminModule)},
  
  {path:'' ,redirectTo:'login' ,pathMatch:'full'}
 ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 