var assert = require("assert");
var Majorca = require("../");

describe("Majorca", function() {
    it("should exist", function() {
        assert.equal(typeof Majorca, "function");
    });
    it("should encrypt a string properly", function() {
        assert.equal(new Majorca(13).encrypt("test"), "1508?1313?1495?1508");
    });
    it("should decrypt a string properly", function() {
        assert.equal(new Majorca(13).decrypt("1508?1313?1495?1508"), "test");
    });
});
