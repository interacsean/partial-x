# Partial-X

Partial-X is a functional programming helper function which allows partial application of arguments to a function at any parameter position.

### Example

The functionality is much better shown as a series of example cases...

```
const { partialX, _ } = require("partial-x");

// Your function 
function subThenMult(nBase, nSub, nMult) {
  return (nBase - nSub) * nMult;
}

// Performing a partial-right with Partial-X:
const subThenMult3 = partialX(subThenMult, [_, _, 3]);
assert(subThenMult3(10, 4) === 18);


// Partially applying a middle argument:
const sub3ThenMult = partialX(subThenMult, [_, 3, _]);
assert(sub3ThenMult(10, 4) === 28);

// Trailing placeholders can be omitted:
const alsoSub3ThenMult = partialX(subThenMult, [_, 3]);
assert(alsoSub3ThenMult(10, 4) === 28);


// The placeholder `X` is also exported, to prevent confusion with lodash:
const { X } = require("partial-x");

// Partially applying a first and third:
const sub3ThenMult = partialX(subThenMult, [10, X, 3]);
assert(inverseOf10By3(5) === 15);

```

## Installation

```
npm install --save partial-x
```

### Use

Use any of the below import, depending on your setup and preference:

```
const { partialX, _ } = require("partial-x");

const { partialX, X } = require("partial-x");

import { partialX, _ } from "partial-x";

import { partialX, X } from "partial-x";
```

## API Documentation

```
partialX(func, [placeHeldArgs])
```
**Returns**: a function which accepts a number of arguments equal to the number of arguments `func` takes, minus the number of values supplied in `placeHeldArgs`.

**Arguments**

 1. `func` _(Function)_: the function to partial.

 2. `[placeHeldArgs]` _(Array<any>)_: a list of arguments that will be used to call `func`.  If a value is used, this argument will not be required in the returned function.  If a *placeholder* is used (`X` or `_`), this argument is to be supplied when calling the returned function.

 ### Placeholders

 Placeholders `X` and `_` are exported for use in `placeHeldArgs`.  

 **These are EXACTLY the same**

Where a placeholder is provided, an argument in the returned function will be expected.

Trailing placeholders can be omitted, as it is implied (as with normal partialling)

 (`_` Is more representative of its purpose, but as this is the generally used variable for lodash, `X` is also provided as an alterative to avoid confusion).
