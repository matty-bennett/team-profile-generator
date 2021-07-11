const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Johnny', 2, 'johnnygithub');

test('creates engineer object', () => {
    expect(engineer.name).toBe('Johnny');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('johnnygithub');
});

test('get engineer name', () => {
    expect(engineer.getName()).toEqual(expect.any(String));
});

test('get engineer id', () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('get engineer email', () => {
    expect(engineer.getEmail()).toEqual(expect.stringContaining('@'));
});

test('get engineer role', () => {
    expect(engineer.getRole()).toEqual(expect.any(String));
});

test('get engineer github', () => {
    expect(engineer.github).toEqual(expect.any(String));
});