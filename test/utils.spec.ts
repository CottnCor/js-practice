/* eslint-disable no-undef */
import { isStatic } from '../src/utils.js';
describe('utils', () => {
    test('it should utils', () => {
        const input = [1, 2, 3, 4];
        const output = true;
        expect(isStatic(input)).toBe(output);
    });
});
