import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

  constructor( private actions$: Actions, private usuarioService: UsuarioService ) { }

  @Effect({ dispatch: true })
  cargarUsuario$ = this.actions$.pipe( ofType( usuarioActions.CARGAR_USUARIO ), switchMap( (action: any) => {
    return this.usuarioService.getUserById( action.id ).pipe(
      map( user => {
        // console.log(user);
        return new usuarioActions.CargarUsuarioSuccess( user );
      }),
      catchError( err => of(new usuarioActions.CargarUsuarioFail( err )))
    );
  }));
}
