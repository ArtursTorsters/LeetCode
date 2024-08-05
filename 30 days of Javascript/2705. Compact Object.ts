// Given an object or array obj, return a compact object.
// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: JSONValue): JSONValue {
    if (Array.isArray(obj)) {
        // For arrays: recursively compact and filter out falsy values
        return obj
            .map((item: JSONValue) => compactObject(item))  // Recursively process each item
            .filter((item: JSONValue) => Boolean(item))     // Remove falsy values
    } else if (typeof obj === 'object' && obj !== null) {
        // For objects: recursively compact values and filter out falsy entries
        return Object.fromEntries(
            Object.entries(obj)
                .map(([key, value]) => [key, compactObject(value)]) // Recursively process each value
                .filter(([key, value]) => Boolean(value))           // Remove falsy values
        ) as Record<string, JSONValue>;
    } else {
        // For primitive values (null, boolean, number, string), return as is
        return obj;
    }
}


//  filtering an object's properties is typically done using methods like 
// Object.entries(), 
// Object.fromEntries(), and 
// Array.prototype.filter()