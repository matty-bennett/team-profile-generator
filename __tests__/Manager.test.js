const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

const manager = new Manager ('Joanne', 'Doe', 1);

test('creates manager object', () => {
    expect(manager.firstName).toBe('Joanne');
    expect(manager.lastName).toBe('Doe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
});