const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

const intern = new Intern('Johnathan', 3, 'the internet');

test('creates intern object', () => {
    expect(intern.name).toBe('Johnathan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('the internet');
});

test('get intern name', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});

test('get intern id', () => {
    expect(intern.getId()).toEqual(expect.any(Number));
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