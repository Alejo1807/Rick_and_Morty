var fs = require("fs");
var http = require("http");
const { type } = require("os");
var getCharById = require("../controllers/getCharById.js")
var getCharDetail = require("../controllers/getCharDetail.js")

http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('onsearch')){

        const array= req.url.split('/');
        const id=parseInt(array[array.length-1])

        getCharById(res,id)
    }

    if(req.url.includes('detail')){
        const array= req.url.split('/');
        const id=parseInt(array[array.length-1])

        getCharDetail(res,id)
    }
    


}).listen(3001,"localhost")

