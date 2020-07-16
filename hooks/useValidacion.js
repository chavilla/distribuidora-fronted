import React, { useState,useEffect } from 'react';

const useValidacion = (state,fn) => {
    
    const [valores, setValores]=useState(state);
    const [errores, setErrores]=useState({});
    const [submit, setSubmit] = useState(false);
    
    const handleChange=e=>{
        setValores({
            ...valores,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        fn();
    }

    return {
        valores,
        handleChange,
        handleSubmit,
        setValores
    }
}
 
export default useValidacion;