<script>
  import { uuid } from "../../utils";
  export let id = uuid(8);
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
    {id}
    class="input switch {sizes[size]}"
    bind:checked={value}
    {value}
  />
  <label for={id} class="f:$(font-size) lh:$(line-height) capitalize"
    >{label}</label
  >
</div>
