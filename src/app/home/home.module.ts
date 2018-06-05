import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterModule, Routes } from '@angular/router'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
