// jest.config.cjs
/** @type {import('jest').Config} */
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',

	// Grab the transform config from the ts-jest preset:
	transform: tsjPreset.transform,

	moduleNameMapper: {
		'^\\$lib/(.*)$': '<rootDir>/src/lib/$1'
	},

	transformIgnorePatterns: ['/node_modules/']
};
