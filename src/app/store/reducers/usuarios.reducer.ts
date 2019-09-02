import { Usuario } from '../../models/usuario.model';
import * as fromUsuariosActions from '../actions';


export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usuariosReducer( state: UsuariosState = initState, action: fromUsuariosActions.UsersActions ): UsuariosState {

  switch ( action.type ) {
    case fromUsuariosActions.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsuariosActions.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        // tslint:disable: no-string-literal
        users: [...action['usuarios']]
      };
    case fromUsuariosActions.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action['payload'].status,
          message: action['payload'].message,
          url: action['payload'].url
        }
      };
    default:
      return state;
  }
}
