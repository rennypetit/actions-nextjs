const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@posts/(.*)$': '<rootDir>/src/posts/$1',
		'^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
		'^@cui/(.*)$': '<rootDir>/src/components/custom-ui/$1',
		'^@styles/(.*)$': '<rootDir>/src/styles/$1',
		'^@api/(.*)$': '<rootDir>/src/app/api/$1',
	},
};

module.exports = createJestConfig(customJestConfig);
