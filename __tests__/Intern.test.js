const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

const intern = new Intern('Johnathan', 'Doe', 1);

test('creates intern object', () => {
    expect(intern.firstName).toBe('Johnathan');
    expect(intern.lastName).toBe('Doe');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
});

test('get intern name', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});

test('get intern id', () => {
    expect(intern.getId()).toEqual(expect.any(String));
});

test('get intern email', () => {
    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get intern role', () => {
    expect(intern.getRole()).toEqual(expect.any(String));
});

test('get intern school', () => {
    expect(intern.getSchool()).toEqual(expect.any(String));
});