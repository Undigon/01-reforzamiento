//import { TiposBasicos } from "./typescript/TiposBasicos";
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones'
// import { Contador } from "./Components/Contador";
import { ContadorConHook } from "./Components/ContadorConHook";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a React</h1>
      <hr />
      {/*<TiposBasicos />*/}
      {/*<ObjetosLiterales />*/}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      <ContadorConHook />
    </div>
  )
}

export default App;