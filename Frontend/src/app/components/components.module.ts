import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeListComponent } from './poke-list/poke-list.component';

@NgModule({
  declarations: [
    PokeCardComponent,
    PokeHeaderComponent,
    PokeListComponent
  ],
  exports: [
    PokeCardComponent,
    PokeHeaderComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
