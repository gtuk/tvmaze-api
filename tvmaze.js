var request = require('request');

var apiBaseUrl = 'http://api.tvmaze.com/';

var endpoints = {
    'query': {
        'single': 'singlesearch/shows?q=',
        'multi': 'search/shows?q='
    },
    'id': {
        'tvrage': 'lookup/shows?tvrage=',
        'thetvdb': 'lookup/shows?thetvdb=',
        'imdb': 'lookup/shows?imdb='
    },
    'schedule': 'schedule?country=$1&date=$2',
    'show': 'shows/',
    'people': 'people/'
};

/**
 * Search by query string
 *
 * @param query
 * @param single
 * @param callback
 */
function querySearch( query, single, callback ) {
    var url = apiBaseUrl + ( single ? endpoints['query']['single'] : endpoints['query']['multi'] ) + query;

    fetch(url, function(result) {
        callback(result);
    });
}

/**
 * Search by imdb, tvrage or tvdb id
 *
 * @param id
 * @param type
 * @param callback
 */
function idSearch( id, type, callback ) {
    if ( ! endpoints['id'].hasOwnProperty(type) ) {
        return callback(new Error('No valid type'));
    }

    var url = apiBaseUrl+endpoints['id'][type] + id;

    fetch(url, function(result) {
        callback(result);
    });
}

/**
 * Get show infos by id
 *
 * @param id
 * @param callback
 */
function showSearch( id, callback ) {
    var url = apiBaseUrl+endpoints['show'] + id;

    fetch(url, function(result) {
        callback(result);
    });
}

/**
 * Get people main information by id
 *
 * @param id
 * @param callback
 */
function showPeople( id, callback ) {
    var url = apiBaseUrl+endpoints['people'] + id;

    fetch(url, function(result) {
        callback(result);
    });
}

/**
 * Search schedule for specific country and date
 *
 * @param country
 * @param date
 * @param callback
 */
function scheduleSearch( country, date, callback ) {
    var url = apiBaseUrl+endpoints['schedule'].replace('$1', country).replace('$2', date);

    fetch(url, function(result) {
        callback(result);
    });
}

/**
 * Actual request against the tvmaze api
 *
 * @param url
 * @param callback
 */
function fetch( url, callback ) {
    request({ url: url, json: true }, function( err, resp, data ) {
        if (err) {
            return callback(err);
        }

        if ( 200 != resp.statusCode ) {
            return callback(new Error(resp.statusMessage));
        }

        callback(data);
    });
}

exports.getByQuery = querySearch;
exports.getById = idSearch;
exports.getSchedule = scheduleSearch;
exports.getShow = showSearch;
exports.getPerson = showPeople;