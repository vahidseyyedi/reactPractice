var Create = /** @class */ (function () {
    function Create() {
        this._nameRobot = this.createFinally();
    }
    Create.prototype.getName = function () {
        return this._nameRobot;
    };
    Create.prototype.createFinally = function () {
        var result = this.createChar() + this.createChar() + this.createNum().toString();
        return result;
    };
    Create.prototype.createChar = function () {
        var num = Math.floor(Math.random() * 26) + 65;
        var char = String.fromCharCode(num);
        return char;
    };
    Create.prototype.createNum = function () {
        var num = Math.floor(Math.random() * 900) + 100;
        return num;
    };
    return Create;
}());
var arr = [];
function test() {
    var clas = new Create();
    var name = clas.getName();
    var search = arr.map(function (ele) { return ele == name; });
    if (search != undefined) {
        console.log("create : " + name);
    }
    else {
        test();
    }
}
test();


