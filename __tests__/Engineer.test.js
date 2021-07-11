const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Johnny', 'Doe', 1);

test('creates engineer object', () => {
    expect(engineer.firstName).toBe('Johnny');
    expect(engineer.lastName).toBe('Doe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
});