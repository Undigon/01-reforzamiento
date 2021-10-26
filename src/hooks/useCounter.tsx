import { useState } from "react";

export const useCounter = (inicial: number = 10) => {
    
    const [valor, setValor] = useState(inicial);
    
    const acumular = (numero: number):void => {
        setValor( valor + numero );
    }

    return {
        valor,
        acumular
    };
}
