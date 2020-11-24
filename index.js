var express = require('express');
var app = express();
const request = require('request');

function requestUrl(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err) reject(err);
            resolve(body);
        });
    });
}

app.get('/api/confinamiento', async function (req, res) {

    let ccaa = req.query.ccaa;

    let resultado = await requestUrl('https://confinamientopandemium.azurewebsites.net/api/Confinamiento?ccaa='+ccaa);

    res.json(resultado);
})

app.get('/api/total_contagios', async function (req, res) {

    let ccaa = req.query.ccaa;

    let resultado = await requestUrl('https://c-t.vercel.app/api?ccaa='+ccaa);

    res.send(resultado);
})

var server = app.listen(8081);