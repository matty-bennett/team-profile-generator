const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, github) {
        super(name, id);
        this.github = github
        this.role = 'Engineer'
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;