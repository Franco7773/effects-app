import { Usuario } from '../../models/usuario.model';
import * as fromUsuarioActions from '../actions';


export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usuarioReducer( state: UsuarioState = initState, action: fromUsuarioActions.UserActions ): UsuarioState {

  switch ( action.type ) {
    case fromUsuarioActions.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsuarioActions.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        // tslint:disable: no-string-literal
        user: { ...action['usuario'] }
      };
    case fromUsuarioActions.CARGAR_USUARIO_FAIL:
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
