var School = Class.create({
        initialize: function (name, town, classes) {
            this.name = name;
            this.town = town;
            this.classes = classes;
        }
    });

var Student = Class.create({
    initialize: function (firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    },

    introduce: function(){
        console.log("Student introducement - " +
            this.firstName + " " + this.lastName + ", " +
            "Age: " + this.age + ", " +
            "Grade: " + this.grade
            );
    }
});

var Teacher = Class.create({
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
            "Grade: " + this.speciality
            );
    }
});

var Class = Class.create({
    initialize: function (name, capacity, students, formTeacher) {
        this.name = name;
        this.capacity = capacity;
        this.students = students;
        this.formTeacher = formTeacher;
    }
});


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