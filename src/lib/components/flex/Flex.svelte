<script>
  import "../styles/flex.css";
  export let cssVariables = "";
  export let direction = "row";
  export let justify = "flexStart";
  export let align = "flexStart";
  export let gap = "default";
  export let wrap = false;
  let classes = {
    default: "flex",
    directions: {
      row: "flex-row",
      column: "flex-column",
    },
    justifyOptions: {
      flexStart: "flex-justify-flex-start",
      center: "flex-justify-center",
      flexEnd: "flex-justify-flex-end",
      spaceBetween: "flex-justify-space-between",
      spaceAround: "flex-justify-space-around",
      spaceEvenly: "flex-justify-space-evenly",
    },
    alignOptions: {
      flexStart: "flex-align-flex-start",
      center: "flex-align-center",
      flexEnd: "flex-align-flex-end",
      stretch: "flex-align-stretch",
    },
    gaps: {
      sm: "flex-gap-sm",
      default: "flex-gap",
      lg: "flex-gap-lg",
    },
  };
</script>

<div
  class={[
    classes.default,
    classes.directions[direction],
    classes.justifyOptions[justify],
    classes.alignOptions[align],
    classes.gaps[gap] ? classes.gaps[gap] : "flex-gap",
    wrap ? "flex-wrap" : "",
  ]
    .join(" ")
    .trim()
    .replace(/\s+/g, " ")}
  style={[cssVariables, classes.gaps[gap] ? "" : `--flex-gap: ${gap}px;`].join(
    " "
  )}
>
  <slot />
</div>
