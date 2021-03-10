/* eslint-disable @typescript-eslint/no-var-requires */

const tsPreset = require('ts-jest/jest-preset')

const path = require('path')
const root = path.resolve(__dirname)

module.exports = {
  rootDir: root,
  roots: ['<rootDir>/src'],

  ...tsPreset,

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
}
