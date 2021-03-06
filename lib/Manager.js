const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, officeNumber) {
        super(name, id);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber
    }
};

module.exports = Manager;