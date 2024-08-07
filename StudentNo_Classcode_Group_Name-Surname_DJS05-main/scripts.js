function createCounter() {
    // Initial state of counter
    let state = { count: 0 };
    // List of subscribed listeners
    let listeners = [];

    // Get the current state of the counter
    function getState() {
        return state;
    }

    // Subscribe listener function to be called when state changes
    function subscribe(listener) {
        listeners.push(listener);
        // Return unsubscribe function to remove listener
        return () => {
            listeners = listeners.filter(listenerItem => listenerItem !== listener);
        };
    }

    // Reducer function to handle actions and update the state
    function reducer(action) {
        switch (action.type) {
            case 'ADD':
                return { count: state.count + 1 };
            case 'SUBTRACT':
                return { count: state.count - 1 };
            case 'RESET':
                return { count: 0 };
            default:
                return state;
        }
    }

    // Dispatch action to the counter, which will update the state based on the action type
    function dispatch(action) {
        const newState = reducer(action);
        if (newState !== state) {
            state = newState;
            // Call all subscribed listener functions with updated state
            listeners.forEach(listener => listener(state));
        }
    }

    return {
        getState,
        subscribe,
        dispatch
    };
}

// Create a new counter instance
const counter = createCounter();

// Subscribe a listener to the counter that will log the state whenever it changes
const unsubscribe = counter.subscribe((state) => console.log(state));

// Dispatch an 'add' action to the counter, which will increment the count to 1
counter.dispatch({ type: 'ADD' });

// Dispatch another 'add' action to the counter, which will increment the count to 2
counter.dispatch({ type: 'ADD' });

// Dispatch a 'subtract' action to the counter, which will decrement the count to 1
counter.dispatch({ type: 'SUBTRACT' });

// Dispatch a 'reset' action to the counter, which will set the count to 0
counter.dispatch({ type: 'RESET' });

// Unsubscribe for the state changes
unsubscribe();

/*class Counter {
    // Constructor initializes the counter with an initial state
    constructor() {
        this.state = { count: 0 };
        // List of subscribed listeners
        this.listeners = [];
    }

    // Get the current state of the counter
    getState() {
        return this.state;
    }

    // Subscribe a listener function to be called whenever the state changes
    subscribe(listener) {
        this.listeners.push(listener);
        // return an unsubscribe function to remove the listener
        return () => {
            this.listeners = this.listeners.filter(listenerItem => listenerItem !== listener);
        };
    }

    // Dispatch action to the counter, which will update the state based on the action type
    dispatch(action) {
        switch (action.type) {
            case 'ADD':
                this.state = { count: this.state.count + 1 };
                break;
            case 'SUBTRACT':
                this.state = { count: this.state.count - 1 };
                break;
            case 'RESET':
                this.state = { count: 0 };
                break;
            default:
                // If an unknown action type is dispatched, do nothing
                return;
        }

        // Call all subscribed listener functions with the updated state
        this.listeners.forEach((listener) => listener());
    }
} */