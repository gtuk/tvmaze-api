var assert = require("chai").assert;
var tvmaze = require("../");

describe('search', function () {
    it('perform a multiple search by query', function(done) {
        tvmaze.getByQuery('girls', false, function(result) {
            assert(result.length > 2);

            done();
        });
    });

    it('perform a single search by query', function(done) {
        tvmaze.getByQuery('girls', true, function(result) {
            assert(result.id == 139);

            done();
        });
    });

    it('perform a search by imdb id', function(done) {
        tvmaze.getById('tt0944947', 'imdb', function(result) {
            assert(result.id == 82);

            done();
        });
    });

    it('perform a search by thetvdb id', function(done) {
        tvmaze.getById('81189', 'thetvdb', function(result) {
            assert(result.id == 169);

            done();
        });
    });

    it('perform a search by tvrage id', function(done) {
        tvmaze.getById('24493', 'tvrage', function(result) {
            assert(result.id == 82);

            done();
        });
    });
});