import { useState } from 'react';
import { Formulario } from '../interfaces/formulario';

export const useForm = <T extends Object>( formulario: T ) => {
    
    const [state, setState] = useState( formulario );

    const onFormChange = (value:string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value,
        });
    }
    
    return {
        ...state,
        formulario: state,
        onFormChange
    };
}
