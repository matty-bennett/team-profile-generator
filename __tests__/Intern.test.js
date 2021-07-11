const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

const intern = new Intern('Johnathan', 'Doe', 1);

test('creates intern object', () => {
    expect(intern.firstName).toBe('Johnathan');
    expect(intern.lastName).toBe('Doe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
});