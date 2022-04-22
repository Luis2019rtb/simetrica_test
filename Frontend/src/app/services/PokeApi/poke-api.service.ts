import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { IResponse,IPokemon } from '../../interfaces'

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient,
  ) { }

  getPokemons(pages: number, limit: number): Observable<IResponse> {
    const offset = pages * limit;
    return this.http.get<any>(`${this.url}/pokemon?offset=${offset}&limit=${limit}`).pipe(
      tap(res => {
        res.results.map((resPokemons:IPokemon) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            res =>{
              return resPokemons.sprite = res.sprites.other['official-artwork'].front_default
            }
          );
        })
      })
    )
  }


  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => {

          // console.log(res)
          return res
        }
      )
    )
  }
  // getOnePokemon(pokemonId: number): Observable<IPokemon> {
  //   return this.http.get<IPokemon>(`${this.url}/pokemon/${pokemonId}`)
  // }

}
