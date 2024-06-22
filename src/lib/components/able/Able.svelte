<script>
  import "../styles/able.css";
  export let rootStyles = "";
  export let size = "md";
  export let direction = "horizontal";
  let classes = {
    default: "able",
    sizes: {
      xs: "able-xs",
      sm: "able-sm",
      md: "able-md",
      lg: "able-lg",
      xl: "able-xl",
    },
    direction: {
      horizontal: "able-horizontal",
      vertical: "able-vertical",
    },
  };
</script>

<div
  class="{classes.default} {classes.sizes[size]} {classes.direction[direction]}"
  style={rootStyles}
>
  <div class="able-content">
    <span>first span content of element</span>
    <span>second span content of element</span>
  </div>
</div>
