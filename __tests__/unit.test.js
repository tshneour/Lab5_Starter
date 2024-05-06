// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('valid number 1', () => {
  expect(isPhoneNumber("360-590-2800")).toBe(true);
});

test('valid number 2', () => {
  expect(isPhoneNumber("760-900-5800")).toBe(true);
});

test('no hyphens', () => {
  expect(isPhoneNumber("7609005800")).toBe(false);
});

test('one hyphen', () => {
  expect(isPhoneNumber("-76090058000")).toBe(false);
});

// isEmail
test('valid email 1', () => {
  expect(isEmail("skibidi@gmail.com")).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail("fanumtax@yahoo.com")).toBe(true);
});

test('no @ symbol', () => {
  expect(isEmail("fanumtaxyahoo.com")).toBe(false);
});

test('no .com', () => {
  expect(isEmail("fanumtax@yahoo")).toBe(false);
});

// isStrongPassword
test('valid password 1', () => {
  expect(isStrongPassword("EmbraceTheRot")).toBe(true);
});

test('valid password 2', () => {
  expect(isStrongPassword("YesIAm_Sigma")).toBe(true);
});

test('too small', () => {
  expect(isStrongPassword("bru")).toBe(false);
});

test('number first', () => {
  expect(isStrongPassword("12bucklemyshoes")).toBe(false);
});

// isDate
test('valid date 1', () => {
  expect(isDate("04/20/4206")).toBe(true);
});

test('valid date 2', () => {
  expect(isDate("4/20/4206")).toBe(true);
});

test('invalid year', () => {
  expect(isDate("04 / 20 / 42000")).toBe(false);
});

test('no slashes', () => {
  expect(isDate("12252009")).toBe(false);
});

// isHexColor
test('valid hex color 1', () => {
  expect(isHexColor("#042FFF")).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor("#045")).toBe(true);
});

test('extra hashtag', () => {
  expect(isHexColor("##420")).toBe(false);
});

test('invalid hex length', () => {
  expect(isHexColor("#4206")).toBe(false);
});