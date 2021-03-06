class Employee {

    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.email = `${name}@email.com`;
        this.role = 'Employee';
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Employee