export const Id = <T>(x: T[] | T) => ({
  // functor mapping
  // preserve the wrapping for .map() by
  // passing the mapped value int the type lift
  map: (f: Function) => Id.of(f(x)),

  // monad chaining
  // discard one level of wrapping
  // by omitting the .of() type lift
  chain: (f: Function) => f(x),

  // just a convenient way to inspect
  // the values
  toString: () => `Id(${x})`,
});

// the type lift for this monad is just
// a reference to the factory
Id.of = Id;
