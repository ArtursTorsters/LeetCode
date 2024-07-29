// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.


class TimeLimitedCache {
    private cache: Map<number, { value: number, expiration: number }>;

    constructor() {
        this.cache = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;

        const existing = this.cache.get(key);
        const alreadyExistsAndValid = existing && existing.expiration > currentTime;

        this.cache.set(key, { value, expiration: expirationTime });

        if (alreadyExistsAndValid) {
            return true;
        } else {
            return false;
        }
    }

    get(key: number): number {
        const currentTime = Date.now();
        const entry = this.cache.get(key);

        if (entry && entry.expiration > currentTime) {
            return entry.value;
        } else {
            this.cache.delete(key); // Clean up expired key
            return -1;
        }
    }

    count(): number {
        const currentTime = Date.now();
        let validCount = 0;

        for (const [key, { expiration }] of this.cache) {
            if (expiration > currentTime) {
                validCount++;
            } else {
                this.cache.delete(key); // Clean up expired key
            }
        }

        return validCount;
    }
}

// Explanation

//     Constructor:
//         Initializes an empty Map to store key-value pairs along with their expiration times.

//     set(key, value, duration):
//         Calculates the expiration time based on the current time and the provided duration.
//         Checks if the key already exists and if it is still valid (not expired).
//         Sets or updates the key with the new value and expiration time in the Map.
//         Returns true if the key existed and was valid before the update, otherwise false.

//     get(key):
//         Retrieves the current time and checks if the key exists in the Map.
//         If the key exists and has not expired, returns the associated value.
//         If the key has expired, it deletes the key from the Map and returns -1.

//     count():
//         Iterates through the Map to count the number of keys that are still valid.
//         Deletes any keys that have expired during the counting process.
//         Returns the count of valid keys.