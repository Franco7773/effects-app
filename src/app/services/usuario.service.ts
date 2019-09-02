import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL_BASE: string = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUsers() {

    const url: string = `${ this.URL_BASE }/users?per_page=7`;

    return this.http.get( url ).pipe( map( (resp: any) => resp.data ));
  }

  getUserById( id: string ) {

    const url: string = `${ this.URL_BASE }/users/${ id }`;

    return this.http.get( url ).pipe( map( (resp: any) => resp.data ));
  }
}
