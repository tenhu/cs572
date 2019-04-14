var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduation " + this.name + " " + this.dept + " " + year + " students");
    };
    return University;
}());
var uni = new University("MUM", "Computer Science");
uni.graduation(2019);
