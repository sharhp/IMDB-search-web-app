const express = require('express');
const router = express.Router();
const axios = require('axios')  // library that allows me to do a rest call, you can use curl also

const apiKey = "d97f86ff";
const baseURL = "http://www.omdbapi.com/"

router.get('/search', function(req, res, next) {
    // Query parameters - /omdb/search?title=harry
    const search = req.query.title;
    const url = `${baseURL}?apikey=${apiKey}&s=${search}`

    axios.get(url)
    .then(function (response) {
    // handle success
    res.send(response.data);
    })
    .catch(function (error) {
    // handle error
    res.send(error);
    })
    .finally(function () {
    // always executed
    res.send(search)
    })
});


router.get('/result/:imdbID', function(req, res, next) {
    // Route parameter - /omdb/result/3
    const imdb = req.params.imdbID;
    // res.send('result endpoint');
    // res.send(ImdbID)    // 3

    const url = `${baseURL}?apikey=${apiKey}&i=${imdb}`

    axios.get(url)
    .then(function (response) {
    // handle success
    res.send(response.data);    //  Only response will crash - because of cyclic dependency
    // by default res.send(data) will deserialize data into json (except primitive types)
    // default everywhere in the web
    })
    .catch(function (error) {
    // handle error
    res.send(error);
    })
    .finally(function () {
    // always executed
    res.send(search)
    })

});

module.exports = router;
