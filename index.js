var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, code) {
        var _this = _super.call(this, name) || this;
        _this.devCode = code;
        return _this;
    }
    Developer.prototype.find = function (name) {
        return new Developer(name, 1);
    };
    return Developer;
}(Person));
var dev = new Developer("Vanya", 100);
dev.display();
var dev2 = dev.find("Nikita");
dev2.display();
