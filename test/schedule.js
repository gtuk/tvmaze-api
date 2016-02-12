var assert = require("chai").assert;
var tvmaze = require("../");

describe('Schedule search', function () {
    it('should return schedule by country and date', function (done) {
        tvmaze.getSchedule('US', '2016-02-11', function (result) {
            assert(result.length > 2);

            done();
        });
    });

    it('should return error', function (done) {
        tvmaze.getSchedule('UK', '2016-02-11', function (result) {
            assert(result.message == 'Unprocessable entity');

            done();
        });
    });
});