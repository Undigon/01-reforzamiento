import { useReducer } from "react"

// interface del estado inicial.
interface AuthState {
    validando: boolean,
    token: null | string,
    username: string,
    nombre: string
}

// Como quiero que luzca el estado inicial?
const initialState:AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

// Prefiere definir acciones como tipos.
type AuthAction = { type: 'logout' }

// Como quiero que luzca el reducer?
const authReducer = ( state:AuthState, action:AuthAction ):AuthState => {
    // Debe tener un dato de retorno igual al initialState.
    return (); // Pendiente para la próxima lección.
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);
    //reducer: una función.

    return (
        <>
            <h3>Login</h3>
        
            <div className="alert alert-info">Validando</div>
            <div className="alert alert-danger">No autenticado</div>
            <div className="alert alert-success">Autenticado</div>
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-danger">Logout</button>
        </>
    )
}
