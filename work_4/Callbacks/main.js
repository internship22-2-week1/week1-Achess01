const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const OPTS = {crossDomain: true}   
function obtenerPersonaje(id ){
    return new Promise((resolve, reject) =>{
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
         .get(URL, OPTS, function(data){
            resolve(data)
         })
         .fail(()=> reject(id))            
    })
}

function onError(id){
    console.log(`Error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas);
        console.log(personajes)
    }
    catch(id){
        onError(id)
    }    
}

obtenerPersonajes()
/* En paralelo
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id)) 
    Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)
 */
/* En serie
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje =>{
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)        
    })
    .then(personaje =>{
        console.log(`El personaje 3 es ${personaje.name}`)
    })
    .catch(function(id){
        console.log(`Suceduió un error al obtener el personaje ${id}`)
    }) */