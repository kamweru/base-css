// Import the writable function from svelte/store
import { writable } from "svelte/store";
import { config, sampleData } from "./components.config";

export const appStore = writable({
  config,
  sampleData,
});
