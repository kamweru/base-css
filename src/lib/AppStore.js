// Import the writable function from svelte/store
import { writable } from "svelte/store";
import { components, properties } from "./components.config";

export const appStore = writable({
  components,
  properties,
});
