// Given an object or an array, return if it is empty.

//     An empty object contains no key-value pairs.
//     An empty array contains no elements.

// You may assume the object or array is the output of JSON.parse.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Record<string, any> | any[]): boolean {
    if (JSON.stringify(obj).length <= 2) {
      return true;
    } else {
      return false;
    }
  }

//   When you stringify an object using JSON.stringify(), the resulting JSON string will represent the object's key-value pairs as a string. In this context, 
//   the "length" property of the resulting 
//   string will represent the number of characters in the string, not the number of key-value pairs in the original object.