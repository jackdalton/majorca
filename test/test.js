var assert = require("assert");
var Majorca = require("../");

var testPrime = 13;

describe("Majorca", function() {
    it("should exist", function() {
        assert.equal(typeof Majorca, "function");
    });
    it("should encrypt a string properly", function() {
        assert.equal(new Majorca(testPrime).encrypt("test"), "sJNIQXJL2C2FsMRN2FxPD");
    });
    it("should decrypt a string properly", function() {
        assert.equal(new Majorca(testPrime).decrypt("sJNIQXJL2C2FsMRN2FxPD"), "test");
    });
});
