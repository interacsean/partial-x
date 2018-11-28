const { _, X, partialX } = require('./index');

describe('partialX', function() {
  
  function subMult(nBase, nSub, nMult) {
    return (nBase - nSub) * nMult;
  }
  
  it('can partial first and last argument', () => {
    const expected = 15;
    
    const actual = partialX(subMult, [10, X, 3])

    const result = actual(5);
    
    expect(result).toEqual(expected);
  });
  
  it('can partial middle argument', () => {
    const expected = 15;
    
    const actual = partialX(subMult, [_, 5, _])

    const result = actual(10, 3);
    
    expect(result).toEqual(expected);
  });
  
  it('can leave off last argument', () => {
    const expected = 15;
    
    const actual = partialX(subMult, [_, 5])

    const result = actual(10, 3);
    
    expect(result).toEqual(expected);
  });
  
  it('can partial first arg as per normal partial', () => {
    const expected = 15;
    
    const actual = partialX(subMult, [10])

    const result = actual(5, 3);
    
    expect(result).toEqual(expected);
  });
  
});
