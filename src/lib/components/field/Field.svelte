<script>
  import "../styles/field.css";
  export let cssVariables = "";
  export let size = "default";
  export let type = "vertical";
  let classes = {
    default: "field",
    sizes: {
      sm: "field-sm",
      default: "",
      lg: "field-lg",
    },
    types: {
      horizontal: "field-horizontal",
      vertical: "field-vertical",
    },
  };
</script>

<div
  class={[classes.default, classes.sizes[size], classes.types[type], "col-5"]
    .join(" ")
    .trim()
    .replace(/\s+/g, " ")}
  style={cssVariables}
>
  <div class="field-label">
    <label for=""> Username </label>
  </div>
  <div class="field-input">
    <input type="text" class="input" />
  </div>
</div>
