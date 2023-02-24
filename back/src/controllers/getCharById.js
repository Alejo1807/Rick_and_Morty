var axios = require("axios")

getCharById = (res,id)=>{

    console.log('entré a getChar')
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id:data.id,
            data:data.image,
            name:data.name,
            gender:data.gender,
            species:data.species,
            image:data.image
        }

        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(character))
    })
    .catch(error => {
        res.writeHead(500,{"Content-Type":"text/plain"});
        res.end(error.message);
    })
}

module.exports = getCharById;