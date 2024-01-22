import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [nota, setNotas] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url) 
            .then(res => {
                if (!res.ok) {
                    throw Error("No se ha podido recuperar la información");
                }
                return res.json();  
            })
            .then(datos => {
                setNotas(datos);
                setCargando(false);
                setError(null);
            })
            .catch(err => {   
                setError(err.message);
                setCargando(false); 
            });
    }, );
    return {
        nota,cargando,error
    }
}

export default useFetch ;