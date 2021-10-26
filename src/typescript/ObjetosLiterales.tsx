interface Persona {
    nombreCompleto:string;
    edad:number;
    dirección:Dirección;
}

interface Dirección {
    casaNo: number;
    país: string;
}

// La interface no genera instancias ¡No es un constructor!
//let persona = new Persona(); #Fails!

export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        dirección: {
            país: 'Canadá',
            casaNo: 615
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
