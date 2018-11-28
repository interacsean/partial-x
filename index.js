const X = {};
const _ = X;

function partialX(func, placeHeldArgs) {
  return function() {
    const replacementArgs = Array.from(arguments);
    return func.apply(null, placeHeldArgs.map(
      function(givenArg) {
        return givenArg === X
          ? replacementArgs.shift()
          : givenArg;
      }
    ).concat(replacementArgs));
  };
}

module.exports = {
  partialX,
  X: X,
  _: _,
}
