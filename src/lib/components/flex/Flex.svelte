<script>
  import "../styles/flex.css";
  export let cssVariables = "";
  export let direction = "row";
  export let justify = "flexStart";
  export let align = "flexStart";
  export let gap = "default";
  let classes = {
    default: "flex",
    directions: {
      row: "flex-row",
      column: "flex-column",
    },
    justifyOptions: {
      flexStart: "flex-start",
      center: "center",
      flexEnd: "flex-end",
      spaceBetween: "space-between",
      spaceAround: "space-around",
      spaceEvenly: "space-evenly",
    },
    alignOptions: {
      flexStart: "flex-start",
      center: "center",
      flexEnd: "flex-end",
      stretch: "stretch",
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
