import { Component, OnInit, Input,
 } from '@angular/core';
import { IPokemon } from '../../interfaces';


@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  constructor() { }

  @Input() pokemons: Array<IPokemon> = [] ;
  @Input() editable: boolean = false;

  ngOnInit(): void {}

  refresh= (currentData:Array<IPokemon>)=>{
    this.pokemons = currentData
  }

}
