import { useEffect, useRef, useState } from "react"
import { idText } from "typescript";
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        // llamado a la API.
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if( resp.data.data.length > 0){
            setUsuarios( resp.data.data );
            paginaRef.current++;
        }else{
            alert('No hay mas registros');
        }

        setUsuarios( resp.data.data )
    }

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
                className="btn btn-primary"
                onClick={ cargarUsuarios }>
                    Siguientes
            </button>
        </>
    )
}
