import { useForm } from "../hooks/useForm";

export const Formularios = () => {

    const {onFormChange, formulario, email, password} = useForm({
        email: 'test@test.com',
        password: '12345',
    })

    return (
        <>
            <h3>Formularios</h3>
            <form action="/" method="POST" name="ejemplo">
                <input type="text"
                    className="form-control mt-2 mb-2"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ ({target}) => onFormChange( target.value, 'email') }></input>
                <input type="text"
                    className="form-control mt-2 mb-2"
                    placeholder="Password claro"
                    name="passwd"
                    value={ password }
                    onChange={ ({target}) => onFormChange( target.value, 'password')}></input>
                <input type="submit" className="btn btn-primary" />
            </form>

            <code>
                <pre>{ JSON.stringify( formulario, null, 2 ) }</pre>
            </code>
        </>
    )
}
