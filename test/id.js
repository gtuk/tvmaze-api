var assert = require("chai").assert;
var tvmaze = require("../");

describe('ID search', function () {
    it('should return search result by imdb id', function (done) {
        tvmaze.getById('tt0944947', 'imdb', function (result) {
            assert(result.id == 82);

            done();
        });
    });

    it('should return search result by thetvdb id', function (done) {
        tvmaze.getById('81189', 'thetvdb', function (result) {
            assert(result.id == 169);

            done();
        });
    });

    it('should return search result by tvrage id', function (done) {
        tvmaze.getById('24493', 'tvrage', function (result) {
            assert(result.id == 82);

            done();
        });
    });

    it('should return search result by tvmaze show id', function (done) {
        tvmaze.getShow('82', [], function (result) {
            assert(result.id == 82);

            done();
        });
    });

    it('should return "not found" error', function (done) {
        tvmaze.getShow('8989879926', [], function (result) {
            assert(result.message == 'Not Found');

            done();
        });
    });

    it('should return search result by tvmaze show id with embed types', function (done) {
        tvmaze.getShow('82', ['cast', 'episodes'], function (result) {
            assert(result.id == 82);
            assert(result._embedded.episodes);
            assert(result._embedded.cast);

            done();
        });
    });
});