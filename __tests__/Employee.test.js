const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

const employee = new Employee('John', 1);

test('creates employee object', () => {
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.role).toBe('Employee');
});

test('gets employees name', () => {
    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id number', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get employee role', () => {
    expect(employee.getRole()).toEqual(expect.any(String));
});