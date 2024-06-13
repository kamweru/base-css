// Import the writable function from svelte/store
import { writable } from "svelte/store";
import { components, properties, rootStyles } from "./components.config";

export const appStore = writable({
  components,
  properties,
  rootStyles,
});
