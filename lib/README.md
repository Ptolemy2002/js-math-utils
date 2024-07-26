# JS Math Utils
This library contains mathematical utilities for JavaScript development.

The functions are not exported as default, so you can import them in one of the following ways:
```
// ES6
import { functionName } from '@ptolemy2002/js-math-utils';
// CommonJS
const { functionName } = require('@ptolemy2002/js-math-utils');
```

## Functions
The following functions are available in the library:

### clamp
#### Description
Clamps a number between a minimum and maximum value.

#### Parameters
- `value` (Number): The value to be clamped.
- `min` (Number): The minimum value.
- `max` (Number): The maximum value.

#### Returns
Number - The clamped value.

### wrapNumber
#### Description
Wraps a number between a minimum and maximum value, non-inclusive on the maximum side (so `min - 1` gets converted to `max - 1` and `max` gets converted to `min`).

#### Parameters
- `n` (Number): The number to be wrapped.
- `min` (Number): The minimum value.
- `max` (Number): The maximum value.

#### Returns
Number - The wrapped value.

## Meta
This is a React Library Created by Ptolemy2002's [cra-template-react-library](https://www.npmjs.com/package/@ptolemy2002/cra-template-react-library) template in combination with [create-react-app](https://www.npmjs.com/package/create-react-app). It contains methods of building and publishing your library to npm.
For now, the library makes use of React 18 and does not use TypeScript.

## Peer Dependencies
These should be installed in order to use the library, as npm does not automatically add peer dependencies to your project.
- @ptolemy2002/js-utils: ^1.0.1

## Commands
The following commands exist in the project:

- `npm run uninstall` - Uninstalls all dependencies for the library
- `npm run reinstall` - Uninstalls and then Reinstalls all dependencies for the library
- `npm run example-uninstall` - Uninstalls all dependencies for the example app
- `npm run example-install` - Installs all dependencies for the example app
- `npm run example-reinstall` - Uninstalls and then Reinstalls all dependencies for the example app
- `npm run example-start` - Starts the example app after building the library
- `npm run build` - Builds the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump