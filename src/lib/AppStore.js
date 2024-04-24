// Import the writable function from svelte/store
import { writable } from "svelte/store";

// Create a writable store with an initial value of null
const app = writable({});

// Export the store object with subscribe, set, and update methods
export const appStore = {
  subscribe: app.subscribe, // subscribe to the store value
  set: (value) => app.set(value), // set the store value
  update: (callback) => app.update(callback), // update the store value with a callback
};
