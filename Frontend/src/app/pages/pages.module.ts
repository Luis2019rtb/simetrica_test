import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from '../routes/routing.module';


// //Module
import { ComponentsModule } from '../components/components.module';

//Pages
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RoutingModule,
  ]
})
export class PagesModule { }
