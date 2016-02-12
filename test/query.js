var assert = require("chai").assert;
var tvmaze = require("../");

describe('Query search', function () {
    it('should return multiple results', function(done) {
        tvmaze.getByQuery('girls', false, [], function(result) {
            assert(result.length > 2);

            done();
        });
    });

    it('should return a single results', function(done) {
        tvmaze.getByQuery('girls', true, [], function(result) {
            assert(result.id == 139);

            done();
        });
    });

    it('should return a single results with embed types', function(done) {
        tvmaze.getByQuery('girls', true, ['cast', 'episodes'], function(result) {
            assert(result.id == 139);
            assert(result._embedded.episodes);
            assert(result._embedded.cast);

            done();
        });
    });
});