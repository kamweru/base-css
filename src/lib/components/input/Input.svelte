<script>
  export let placeholder = "placeholder";
  export let value = "";
  export let size = "md";
  let sizes = {
    sm: "input-sm",
    md: "",
    lg: "input-lg",
  };
</script>

<input type="text" {placeholder} class="input {sizes[size]}" bind:value />
