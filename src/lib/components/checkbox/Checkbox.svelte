<script>
  import { uuid } from "../../utils";
  import "../styles/checkbox.css";
  export let cssVariables = "";
  export let checked = false;
  export let id = uuid(8);
  export let indeterminate = true;
  export let disabled = false;
  export let size = "default";
  let classes = {
    default: "checkbox",
    sizes: {
      sm: "checkbox-sm",
      default: "",
      lg: "checkbox-lg",
    },
  };
</script>

<div class="flex ai:center gap:8">
  <label for={id} class="checkbox-wrapper">
    <input
      type="checkbox"
      {id}
      bind:checked
      value={checked}
      {disabled}
      bind:indeterminate
      class={[classes.default, classes.sizes[size]]
        .join(" ")
        .replace(/\s+/g, " ")}
      style={cssVariables}
    />
    <span>I agree to the terms</span>
  </label>
  <!-- <label class="checkbox-wrapper">
    <input type="checkbox" class="checkbox" />
    <span>checkbox label text</span>
  </label>
  <label class="checkbox-wrapper">
    <input type="checkbox" class="checkbox checkbox-sm" />
    <span>checkbox label text</span>
  </label>
  <label class="checkbox-wrapper">
    <input type="checkbox" class="checkbox checkbox-lg" />
    <span>checkbox label text</span>
  </label> -->
</div>
