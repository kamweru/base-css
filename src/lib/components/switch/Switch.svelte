<script>
  export let label = "label";
  export let value = false;
  export let size = "md";
  let sizes = {
    sm: "input-sm",
    md: "",
    lg: "input-lg",
  };
</script>

<div class="flex ai:center gap:8">
  <input
    type="checkbox"
    id="with-label"
    class="input switch {sizes[size]}"
    bind:checked={value}
    {value}
  />
  <label for="with-label" class="o:-1">{label}</label>
</div>
