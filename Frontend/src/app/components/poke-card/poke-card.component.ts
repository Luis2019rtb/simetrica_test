import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { IPokemon, IFavorite } from '../../interfaces';
import { FavoritesService } from '../../services/Favorites/Favorites.service';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  constructor(
    private FavoritesService: FavoritesService
  ) { }

  @Input() editable: boolean = false;
  @Output() wasEdited = new EventEmitter<Array<any>>();

  @Input() pokemon: IFavorite = {
    key:'',
    sprite: '',
    name: '',
    url: ''
  };

  ngOnInit(): void { }

  addToFavorites = () => {
    let newFav: IFavorite = { ...this.pokemon, alias: this.pokemon.name, createdAt: new Date() }
    this.FavoritesService.setFavPokemon(newFav)
    alert("Pokemon successfully saved");
  }

  editFavorite = (newAlias:any)=>{
    this.FavoritesService.editFromFav({ ...this.pokemon ,alias:newAlias.target.value})
  }

  removeFromFavorites = ()=>{
    let currentPokemons = this.FavoritesService.removeFromFav(this.pokemon.key);
    this.wasEdited.emit(currentPokemons);
  }
}
