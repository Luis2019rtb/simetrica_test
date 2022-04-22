import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/PokeApi/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPokemons: any;

  constructor(
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.PokeApiService.getPokemons(0,100).subscribe(
      res=>{
        this.allPokemons =  res.results
      }
    );
  }

}
