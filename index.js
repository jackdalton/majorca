module.exports = (function(key) {
    var _key;
    function Majorca(key) {
        if (isNaN(key)) {
            throw new TypeError("Key must be a (prime) number.");
        }
        _key = key;
    }
    Majorca.prototype.encrypt = function(str) {
        var bytes = [];
        var out = "";
        for (var i = 0; i < str.length; i++) {
            bytes.push(str.charCodeAt(i));
        }
        bytes.map(Number);
        for (i = 0; i < bytes.length; i++) {
            bytes[i] = bytes[i] * _key;
        }
        bytes.forEach(function(v) {
            out += v + "?";
        });
        out = out.slice(0, -1);
        return out;
    };
    Majorca.prototype.decrypt = function(str) {
        var bytes = str.split("?");
        var out = "";
        bytes.forEach(function(v) {
            out += String.fromCharCode(v / _key);
        });
        return out;
    };
    return Majorca;
})();
