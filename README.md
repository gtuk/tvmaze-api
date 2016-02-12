# tvmaze-api
Node wrapper for tvmaze

[![Build Status](https://travis-ci.org/gtuk/tvmaze-api.svg?branch=master)](https://travis-ci.org/gtuk/tvmaze-api)

## Installation
```
npm install tvmaze-api --save
```

## Tests
```
npm test
```

## Usage

```js
var tvmaze = require("tvmaze-api");

// Search by query (single, multiple)
tvmaze.getByQuery('girls', true, [], function(result){
    console.log(result);
});

// Search by query (single, multiple) and include additional result values (possible embed types are episodes, cast, nextepisode and previousepisode. Only works with single search)
tvmaze.getByQuery('girls', true, ['episodes', 'cast'], function(result){
    console.log(result);
});

// Search by id (possible types imdb, thetvdb, tvrange)
tvmaze.getById('tt0944947', 'imdb', function(result){
    console.log(result);
});

// Get show details by tvmaze id
tvmaze.getShow('82', [], function(result){
    console.log(result);
});

// Get show details by tvmaze id and include additional result values (possible embed types are episodes, cast, nextepisode and previousepisode)
tvmaze.getShow('82', ['episodes', 'cast', 'nextepisode', 'previousepisode'], function(result){
    console.log(result);
});

// Get schedule by country (ISO 3166-1) and date (ISO 8601) 
tvmaze.getSchedule('US', '2016-02-11', function(result){
    console.log(result);
});

// Get people details by id
tvmaze.getPerson('1', function(result){
    console.log(result);
});
```