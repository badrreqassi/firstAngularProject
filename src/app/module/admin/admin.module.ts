import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './compononets/dashbord/dashbord.component';
import { FooterComponent } from './compononets/footer/footer.component';
import { HeaderComponent } from './compononets/header/header.component';
import { HomePageComponent } from './compononets/home-page/home-page.component';
import { AboutComponent } from './compononets/about/about.component';


@NgModule({
  declarations: [
    DashbordComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
