<script>
  // Import writable store from svelte/store
  import { writable } from "svelte/store";
  //   import Icon from "./icons/Icon.svelte";
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

  // Define a function to toggle the theme
  function toggleTheme() {
    // Get the current theme from the store
    theme.update((current) => {
      // Return the opposite theme
      return current === DARK ? LIGHT : DARK;
    });
  }
  let checked = false;
  const toggleSelection = (e) => {
    let value = e.target.value,
      isChecked = e.target.checked;
    // console.log(value, isChecked, $theme);
    if (isChecked) {
      checked = isChecked;
      $theme = DARK;
    } else {
      checked = isChecked;
      $theme = LIGHT;
    }
    // checked = isChecked;
    // theme.set(value);
  };
  // console.log($theme);
</script>

<!-- Use a button element to trigger the toggleTheme function -->
<!-- <button
  on:click={toggleTheme}
  class="bg:rgb($(muted)) color:white h:40 inline-flex center-content p:7|15 r:6"
>
  {$theme === DARK ? "moon" : "sun"}
</button> -->
<div class="control-group">
  <input
    type="checkbox"
    id="check-3"
    class="switch"
    checked={$theme === DARK}
    bind:value={$theme}
    on:change={toggleSelection}
  />
  <label for="check-3">{$theme === DARK ? "☾" : "☀"}</label>
</div>
<!-- <input
  class="rel h:24 w:48 cursor:pointer appearance:none -webkit-appearance:none r:100 bg:rgb($(muted)) bg:red-70:checked transition:all|.3s|ease abs:before content:'{$theme ===
  DARK
    ? '☾'
    : '☀'}':before v:bottom:before f:14:before text:center:before left:-.5:before top:-.8:before grid:before ai:center:before height:26:before w:26:before cursor:pointer:before b:1|solid|rgb($(neutral)):before r:100:before color:rgb($(text-strong)):before bg:rgb($(muted-2)):before shadow:0|3|10|rgba(100,116,139,0.327):before transition:all|.3s|ease:before box-shadow:0|0|0|8|rgba(0,0,0,.15):hover:before box-shadow:0|0|0|8|rgba(236,72,153,.15):checked:hover:before transform:translateX(100%):checked:before b:red-70:checked:before"
  type="checkbox"
  bind:checked
  on:change={toggleSelection}
/> -->
