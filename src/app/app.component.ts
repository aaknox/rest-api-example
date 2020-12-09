import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Pokemon } from "./pokemon.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";
  readonly POKE_URL = "https://pokeapi.co/api/v2";
  posts: any;
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  //methods
  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + "/posts");
  }

  getPokemon() {
    return this.http
    .get<Pokemon[]>(this.POKE_URL + "/pokemon")
    .pipe(
      catchError(this.handleError<Pokemon[]>('getPokemon', []))
    );
  }


  //error handling method
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
