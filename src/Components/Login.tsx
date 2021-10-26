import { useEffect, useReducer } from "react"

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

type LoginPayload = { username: string, nombre: string }

// Prefiere definir acciones como tipos.
type AuthAction = 
    { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

// Como quiero que luzca el reducer?
const authReducer = ( state:AuthState, action:AuthAction ):AuthState => {
    // Debe tener un dato de retorno igual al initialState.
    
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        
        case 'login' :
            const { nombre, username } = action.payload
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username
            }
        default:
            return state;
    }
    
}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    const login = ():void => {
        dispatch({ 
            type: 'login',
            payload: {
                nombre: 'Fernando',
                username: 'Strider'
            } })
    }

    const logout = ():void => {
        dispatch({ 
            type: 'logout',
        })
    }

    if(validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            
            {
                ( token )
                    ?<div className="alert alert-success">Autenticado como: { nombre }</div>
                    :<div className="alert alert-danger">No autenticado</div>
            }
            
            {
                ( token )
                ? (
                    <button className="btn btn-danger"
                            onClick={ logout }>Logout</button>
                )
                : (
                    <button className="btn btn-primary"
                            onClick={ login }>Login</button>
                )

            }
            
            
            
        </>
    )
}
