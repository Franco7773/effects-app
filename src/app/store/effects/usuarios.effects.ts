import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

  constructor( private actions$: Actions, private usuarioService: UsuarioService ) { }

  @Effect({ dispatch: true })
  cargarUsuarios$ = this.actions$.pipe( ofType( usuariosActions.CARGAR_USUARIOS ), switchMap( () => {
    return this.usuarioService.getUsers().pipe( map( users => new usuariosActions.CargarUsuariosSuccess( users )),
                                                catchError( err => of(new usuariosActions.CargarUsuariosFail( err )))
    );
  }));
}
