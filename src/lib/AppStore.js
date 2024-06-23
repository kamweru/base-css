// Import the writable function from svelte/store
import { writable } from "svelte/store";
import { config } from "./components.config";

export const appStore = writable({
  config,
});
