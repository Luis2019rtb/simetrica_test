import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private storage = localStorage;
  private key = 'favoritesPokemons';

  constructor() { }

  setNewItem = (elem: any) => this.storage.setItem(this.key, elem);
  getCurrentItem = () => this.storage.getItem(this.key) || '[]';

  getFavPokemons = (): Array<any> => {
    return JSON.parse(this.getCurrentItem());
  }

  setFavPokemon = (newFav: any) => {
    const currentFav = this.getFavPokemons();
    let obj = { key: uuidv4(), ...newFav };
    console.log(currentFav)
    if (currentFav.length > 0) {
      return this.setNewItem(JSON.stringify([...currentFav, obj]))
    }
    return this.setNewItem(JSON.stringify([obj]))
  }
  removeFromFav = (key: string | number) => {
    const currentFav = this.getFavPokemons();
    if (currentFav.length > 0) {
      const newPokemons = currentFav.filter(pokemon => pokemon.key !== key)
      this.setNewItem(JSON.stringify([...newPokemons]))
      return newPokemons
    }
    return []
  }

  editFromFav = (edited: any) => {
    const currentFav = this.getFavPokemons();
    if (currentFav.length > 0) {
      const newPokemons = currentFav.map(pokemon => pokemon.key === edited.key ? edited : pokemon)
      this.setNewItem(JSON.stringify([...newPokemons]))
      return newPokemons
    }
    return [];
  }

}
