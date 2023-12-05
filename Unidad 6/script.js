
//JS asincrono (una linea de codigo)

/*console.log("uno");
console.log("dos");

setTimeout(() =>{
    console.log("Funcion de callback lanzada");
},10000);
//esto es la sincronia, si lo lanzamos tardara en aparecer en la consola

console.log("tres");
console.log("cuatro");*/

//vamos a la pagina web https://jsonplaceholder.typicode.com/ para tener APIs fakes (con resultados falsos)

const obtenerTODOS = (miCallback, source) => {const request =new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState ==4 && request.status == 200){
        //console.log(request, request.readyState);
        //console.log(request.responseText)
        const respuesta = JSON.parse(request.responseText);
        miCallback(undefined, respuesta);
    }
        else if (request.readyState === 4){
           // console.log("No se han podido obtener los datos");
        miCallback("No se han podido obtener los datos", undefined);
        }
    })
    
    // open
    // p1: tipo de solicitud
    // p2 a quien le hacemos la solicitud (a que ente)
    
    request.open('GET', source);
    //si se pone una URL vacia saltara el callback de error
    
    // send
    
    request.send();
    
    }
    
    console.log("uno");
    console.log("dos");
    
    
    //LLAMADA A LA FUNCION
    obtenerTODOS((error, datos) => {
    //PRIMER PARAMETRO, CALLBACK
        console.log("callback disparado");
        //console.log(error, datos);
        gestionaRespuesta(error,datos)
    
        obtenerTODOS((error, datos) => {
                console.log("callback 2 disparado");
                //console.log(error, datos);
                gestionaRespuesta(error,datos)
                obtenerTODOS((error, datos) => {
                        console.log("callback 3  disparado");
                        //console.log(error, datos);
                        gestionaRespuesta(error,datos)
    
                    }, 'Todos/tareas3.json');
                },'Todos/tareas2.json');
    }
    //SEGUNDO PARAMETRO: ENDPOINT
    , 'Todos/tareas1.json');
    
    //con una funcion de callback podemos hacer errores y dar datos
    console.log("tres");
    console.log("cuatro");
    
    function gestionaRespuesta(error,datos){
        if(error){
            console.log(error);
        } else{
            console.log(datos);
        }
    }
    //haciendo esto demostramos que el codigo es asincrono y se ven los clg antes que los datos
    
    //LO DEL REPETIR EL CODIGO LO HA DESCRITO COMO UNA "GUARRADA PERO FUNCIONA"