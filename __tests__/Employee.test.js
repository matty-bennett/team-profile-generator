const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const employee = new Employee('John', 'Doe', 1);

test('creates employee object', () => {
    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
});
