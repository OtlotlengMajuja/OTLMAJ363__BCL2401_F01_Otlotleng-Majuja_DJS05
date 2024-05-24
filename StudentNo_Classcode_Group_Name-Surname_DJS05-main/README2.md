# DJS05 Project: Building a Redux-Inspired Store for a Tally App

## Introduction

In order to complete this challenge, I had to build a Redux-inspired store using the Gherkin Syntax to manage the state of a basic Tally app. I had to concentrate on key functions like incrementing, decrementing, and resetting a counter.

## Disclaimer

The terminal indicates that it cannot locate the module, and the file names are a little mixed up. I made multiple unsuccessful attempts to fix it. I apologize profusely

## Project Overview

The primary objectives were to create a basic, Redux-inspired store, construct a global store, manage the state using **getState**, **dispatch**, and **subscribe**, and maintain and track the status of a counting Tally App. By using console logs, the state updates more successfully illustrated state management than by displaying the changes on the user interface.

## Elements Included

**State Management:** Maintains the current count by using a state object { count: 0 }.

**Listeners:** Incorporates a method for notifying listeners anytime the status changes, both to subscribe and unsubscribe.

**Action Dispatch:** Dispatches actions such as 'ADD', 'SUBTRACT', and 'RESET' to modify the state.

**Counter Class:** Provides a basic counter implementation that includes ways to retrieve the current state, subscribe to changes in the state, and send actions to change the state.

## Reflections

### Areas of Mastery

**Abstraction:** This project enhanced my capacity to encourage modularity and reusability while encapsulating the counter's state and behaviour inside the class.

### Challenges Faced

A challenge I encountered when doing this project was implementing the logic to handle different types of actions, managing the subscription and unsubscription of listeners while ensuring efficient performance, updating the state accordingly, and testing and debugging the code thoroughly with each scenario given.

### Overall Learning Experience

By coding this project in accordance with my comprehension of the declarative approach, I was able to advance my knowledge of object-oriented principles and obtain a deeper understanding of appropriate encapsulation, abstraction, and modularity. I was also able to better understand the various methods for managing state in applications. I experimented with event-driven programming by putting in place a subscription mechanism that manages state changes and alerts viewers.

Above all, to use the theory and expand my skill set by putting these ideas into practice.
