# JS Math Utils
This library contains mathematical utilities for JavaScript development.

The functions are not exported as default, so you can import them in one of the following ways:
```javascript
// ES6
import { functionName } from '@ptolemy2002/js-math-utils';
// CommonJS
const { functionName } = require('@ptolemy2002/js-math-utils');
```

## Type Reference
```typescript
type ClampOptions = {
    min?: number;
    max?: number;
};
```

## Functions
The following functions are available in the library:

### clamp
#### Description
Clamps a number between a minimum and maximum value.

#### Parameters
- `value` (`number`): The value to be clamped.
- `args` - An object containing the following properties:
  - `min` (`number?`): The minimum value. If not specified, the value is not clamped on the minimum side.
  - `max` (`number?`): The maximum value. If not specified, the value is not clamped on the maximum side.

#### Returns
`number` - The clamped value.

### wrapNumber
#### Description
Wraps a number between a minimum and maximum value, inclusive on the maximum side (so `min - 1` gets converted to `max` and `max + 1` gets converted to `min`).

#### Parameters
- `n` (`number`): The number to be wrapped.
- `min` (`number`): The minimum value.
- `max` (`number`): The maximum value.

#### Returns
`number` - The wrapped value.

## Peer Dependencies
This project does not have any peer dependencies (they are all bundled with the library), so it should work out of the box.

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