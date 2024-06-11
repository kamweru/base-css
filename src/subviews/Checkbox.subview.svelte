<script>
  const styles = {
    baseClass: "input checkbox",
    sizes: {
      sm: "input-sm",
      default: "",
      lg: "input-lg",
    },
    states: {
      disabled: "input-disabled",
      indeterminate: "input-indeterminate",
    },
  };
  let indeterminate = true;
</script>

<h1>check box</h1>

<input
  type="checkbox"
  class="input checkbox input-sm input-indeterminate"
  bind:indeterminate
/>
<input type="checkbox" class="checkbox" />
<input type="checkbox" class="checkbox input-lg" />
<div class="flex ai:center gap:8">
  <input type="checkbox" class="checkbox" id="checkbox-1" />
  <label for="checkbox-1">Check this box</label>
</div>
