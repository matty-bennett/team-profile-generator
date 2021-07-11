const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(firstName, lastName, id, github) {
        super(firstName, lastName, id);
        this.github = github;
        this.role = 'Engineer';
    };
}

module.exports = Engineer;