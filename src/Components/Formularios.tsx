import { useState } from "react"
import { Formulario } from '../interfaces/formulario';

export const Formularios = () => {

    const [formulario, setFormulario] = useState<Formulario>({
        email: 'test@test.com',
        password: '123456',
    });

    const onChange = (value:string, campo: string) => {
        setFormulario({
            ...formulario,
            [campo]: value,
        });
    }

    return (
        <>
            <h3>Formularios</h3>
            <form action="/" method="POST" name="ejemplo">
                <input type="text"
                    className="form-control mt-2 mb-2"
                    placeholder="Email"
                    name="email"
                    value={ formulario.email }
                    onChange={ ({target}) => onChange( target.value, 'email')}></input>
                <input type="text"
                    className="form-control mt-2 mb-2"
                    placeholder="Password claro"
                    name="passwd"
                    value={ formulario.password }
                    onChange={ ({target}) => onChange( target.value, 'password')}></input>
                <input type="submit" className="btn btn-primary" />
            </form>

            <code>
                <pre>{ JSON.stringify( formulario, null, 2 ) }</pre>
            </code>
        </>
    )
}
