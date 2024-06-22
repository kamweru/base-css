// Import the writable function from svelte/store
import { writable } from "svelte/store";
import {
  properties,
  rootStyles,
  componentProperties,
  config,
} from "./components.config";

export const appStore = writable({
  properties,
  rootStyles,
  componentProperties,
  config,
});
