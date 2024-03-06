import { expect, test } from 'vitest';
import { add } from "./lib.js";

test("Test de 1+2", () => {
    expect(add(1, 2)).toBe(3);
});

test("Test de -52+2", () => {
    expect(add(-52, 2)).toBe(-50);
});

