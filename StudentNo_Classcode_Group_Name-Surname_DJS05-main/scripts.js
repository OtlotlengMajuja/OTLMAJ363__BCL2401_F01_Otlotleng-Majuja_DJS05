class Counter {
    // Constructor initializes the counter with an initial state
    constructor() {
        this.state = { count: 0 };
        this.listeners = [];
    }

    // Get the current state of the counter
    getState() {
        return this.state;
    }

    // Subscribe a listener function to be called whenever the state changes
    subscribe(listener) {
        this.listeners.push(listener);
    }

    // Dispatch action to update the state
    dispatch(action) {
        // Check the type of the action and update the state accordingly
        if (action.type === 'add') {
            this.state = { count: this.state.count + 1 };
        } else if (action.type === 'subtract') {
            this.state = { count: this.state.count - 1 };
        }

        // Call all subscribed listener functions with the updated state
        this.listeners.forEach((listener) => listener());
    }
}

// Create a new counter instance
const counter = new Counter();

/* { type: 'ADD' }
{ type: 'SUBTRACT' }
{ type: 'RESET' } 

function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBTRACT':
      return state - 1;
    default:
      return state;
  }
}

let store = Redux.createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'ADD' }); 

    add() {
        this.state.value++;
    }

    subtract() {
        this.state.value--;
    }

    reset() {
        this.state.value = 0;
    }

 */