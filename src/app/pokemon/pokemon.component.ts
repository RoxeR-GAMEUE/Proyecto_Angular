import { Component, OnInit, HostListener } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  offset: number = 0;
  limit: number = 20;
  results: any[] = [];
  onLoad: boolean = false;
  
  private urlImg: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";


  constructor(private pokemonService: PokemonService) {
    pokemonService.getAllPokemons(this.offset, this.limit).subscribe((data: any) => {
      this.results = data.results;
    })
  }

  ngOnInit(): void {

  }

  getPokemons(offset: number, limit: number){
    this.pokemonService.getAllPokemons(offset, limit).subscribe((data: any) => {
      this.results = this.results.concat(data.results)
      this.onLoad = false;
    })
  }

  getUrl(pokemon: any){
    var splitted = pokemon.url.toString().split("/");
    var id = splitted[splitted.length - 2];
    return `${this.urlImg}/${id}.png`;
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if(!this.onLoad){
        this.onLoad = true;
        this.offset += 20;
        this.getPokemons(this.offset, this.limit);
      }
    }
  }

}
