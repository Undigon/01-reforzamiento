export const TiposBasicos = () => {
    
    const nombre:string = 'Fernando';
    const edad:number = 35;
    const estaActivo:boolean = true;

    const poderes:string[] = [];

    poderes.push("1")
    
    return (
        <>
         <h3>Tipos básicos</h3>
         { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
         <br/>
         {poderes.join(', ')}
        </>
    )
}
