import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS: string = '[USERS] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL: string = '[USERS] Cargar usuarios fail';
export const CARGAR_USUARIOS_SUCCESS: string = '[USERS] Cargar usuarios success';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;

  constructor( public payload: any ) { }
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;

  constructor( public usuarios: Usuario[] ) { }
}

export type UserActions = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
