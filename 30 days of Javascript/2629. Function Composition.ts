type F = (x: number) => number;

function compose(functions: F[]): F {
  // Compose the functions
  return (x: number) => {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}
