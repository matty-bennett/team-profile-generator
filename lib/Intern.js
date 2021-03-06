const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, school) {
        super(name, id);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    }

};

module.exports = Intern;