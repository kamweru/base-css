<script>
  export let cssVariables = "";
  export let placeholder = "placeholder";
  export let value = "";
  export let size = "md";
  export let type = "outline";
  let classes = {
    default: "input",
    sizes: {
      sm: "input-sm",
      md: "",
      lg: "input-lg",
    },
    types: {
      outline: "input-outline",
      fill: "input-fill",
      underline: "input-underline",
      borderless: "input-borderless",
    },
  };
</script>

<input
  type="text"
  {placeholder}
  class={[classes.default, classes.sizes[size], classes.types[type]]
    .join(" ")
    .trim()
    .replace(/\s+/g, " ")}
  style={cssVariables}
  bind:value
/>
