var axios = require("axios")

getCharDetail = (res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            ...data
        }

        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(character))
    })
    .catch(error => {
        res.writeHead(500,{"Content-Type":"text/plain"});
        res.end(error.message);})
}

module.exports = getCharDetail