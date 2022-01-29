const nextJest = require('next/jest')

const createConfig = nextJest({
    dir: '../',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
      }
})



const customJestconfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdpom',
}

module.exports = createJestConfig(customJestconfig)