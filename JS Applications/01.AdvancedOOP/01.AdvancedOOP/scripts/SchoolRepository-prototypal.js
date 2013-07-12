/*
 *   Object create extension
 */
if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

Object.prototype.extend = function (properties) {
    function f() { };
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
}


var School = {
    initialize: function (name, town, classes) {
        this.name = name;
        this.town = town;
        this.classes = classes;
    }
};

var Student = {
    initialize: function (firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    },

    introduce: function () {
        console.log("Student introducement - " +
            this.firstName + " " + this.lastName + ", " +
            "Age: " + this.age + ", " +
            "Grade: " + this.grade
            );
    }
};

var Teacher = {
    initialize: function (firstName, lastName, age, speciality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.speciality = speciality;
    },

    introduce: function () {
        console.log("Teacher introducement - " +
            this.firstName + " " + this.lastName + ", " +
            "Age: " + this.age + ", " +
            "Speciality: " + this.speciality
            );
    }
};

var Class = {
    initialize: function (name, capacity, students, formTeacher) {
        this.name = name;
        this.capacity = capacity;
        this.students = students;
        this.formTeacher = formTeacher;
    }
};


/*
 *   Local storage object storage extend
 */
(function () {
    if (!Storage.prototype.setObject) {
        Storage.prototype.setObject = function (key, obj) {
            this.setItem(key, JSON.stringify(obj));
        };
    }

    if (!Storage.prototype.getObject) {
        Storage.prototype.getObject = function (key) {
            return JSON.parse(this.getItem(key));
        };
    }
}());