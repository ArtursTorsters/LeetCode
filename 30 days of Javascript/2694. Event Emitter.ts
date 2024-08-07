// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

//     subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
//     An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed.
//     An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
//     The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. 
//     When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.

//     emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.


type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    // Use an object to keep track of events and their associated callbacks. The keys of this object will be event names, and the values will be arrays of callback functions.
    private events: { [key: string]: Callback[] } = {};

    subscribe(eventName: string, callback: Callback): Subscription {
        // Initialize the event's callback array if it does not exist
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // Add the callback to the event's callback array
        this.events[eventName].push(callback);

        // Return an object with an unsubscribe method
        return {
            unsubscribe: () => {
                // Find the index of the callback and remove it
                const index = this.events[eventName]?.indexOf(callback);
                if (index !== undefined && index > -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        // Get the callbacks for the event
        const callbacks = this.events[eventName] || [];
        // Call each callback with the provided arguments and collect results
        return callbacks.map(callback => callback(...args));
    }
}
