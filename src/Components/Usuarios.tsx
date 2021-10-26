import { useEffect, useState } from "react"
import { idText } from "typescript";
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        // llamado a la API.
        reqResApi.get<ReqResListado>('/users')
            .then( resp => {
                console.log(resp.data.data[0].last_name);
                setUsuarios( resp.data.data )
            })
            .catch( console.log );
    }, [])

    const renderItem = ( usuario: Usuario) => {
        // Destructurando el objeto usuario.
        const {avatar, first_name, last_name, email, id} = usuario
        return (
            <tr key={ id.toString() }>
                <td><img src={avatar}
                         alt={first_name +" avatar"}
                         style={{
                             width: 35,
                             borderRadius: 100
                         }} /></td>
                <td>{first_name + " " + last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary">
                    Siguientes
            </button>
        </>
    )
}
