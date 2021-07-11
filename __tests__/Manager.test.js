const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

const manager = new Manager ('Joanne', 'Doe', 1);

test('creates manager object', () => {
    expect(manager.firstName).toBe('Joanne');
    expect(manager.lastName).toBe('Doe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
});

test('get manager name', () => {
    expect(manager.getName()).toEqual(expect.any(String));
});

test('get manager id', () => {
    expect(manager.getId()).toEqual(expect.any(String));
});

test('get manager email', () => {
    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get manager role', () => {
    expect(manager.getRole()).toEqual(expect.any(String));
});

test('get manager office number', () => {
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});