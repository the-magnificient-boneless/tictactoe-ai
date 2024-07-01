module.exports = {
    preset: 'ts-jest',
    globals: {},
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/utils/*'],
    coverageThreshold: {
        global: {
            statements: 98.01,
            branches: 93.18,
            functions: 97.27,
            lines: 97.99,
        },
    },
    testPathIgnorePatterns: ['/node_modules/*', '/dist/'],
    testMatch: ['**/?(*.)+(spec|test).+(ts)'],
    transform: {
        '^.+\\.(ts|js)$': [
            'ts-jest',
            {
                babel: true,
                tsconfig: 'tsconfig.test.json',
            },
        ],
    }
};
