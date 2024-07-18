type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: (...args: JSONValue[]) => JSONValue): OnceFn {
  let called = false;
  let result: JSONValue | undefined;

  return function (...args: JSONValue[]): JSONValue | undefined {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    }
    return undefined;
  };
}
