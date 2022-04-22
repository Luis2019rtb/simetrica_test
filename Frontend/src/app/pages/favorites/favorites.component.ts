import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/Favorites/Favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favPokemons: Array<any> =[];

  constructor(
    private FavoritesService: FavoritesService

  ) { }

  ngOnInit(): void {
    this.favPokemons = this.FavoritesService.getFavPokemons()
  }

}
