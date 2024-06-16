<script>
  // Import writable store from svelte/store
  import { writable } from "svelte/store";
  // Define constants for dark and light themes
  const DARK = "dark";
  const LIGHT = "light";

  // Create a writable store for the theme
  const theme = writable(
    // Get the stored theme from localStorage or use the default one
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT)
  );

  // Subscribe to the theme store and update the document class list and localStorage accordingly
  theme.subscribe((value) => {
    document.documentElement.classList.toggle(DARK, value === DARK);
    document.documentElement.classList.toggle(LIGHT, value === LIGHT);
    localStorage.setItem("theme", value);
  });
  let checked = false;
  const toggleSelection = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      checked = isChecked;
      theme.update((current) => (current = DARK));
    } else {
      checked = isChecked;
      theme.update((current) => (current = LIGHT));
    }
  };
</script>

<input
  type="checkbox"
  id="check-3"
  class="input switch input-sm"
  checked={$theme === DARK}
  bind:value={$theme}
  on:change={toggleSelection}
/>
