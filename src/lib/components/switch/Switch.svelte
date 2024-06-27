<script>
  import { uuid } from "../../utils";
  import "../styles/switch.css";
  export let id = uuid(8);
  export let label = "label";
  export let value = false;
  export let size = "sm";
  let sizes = {
    sm: "switch-sm",
    md: "",
    lg: "switch-lg",
  };
</script>

<div class="flex ai:center gap:8">
  <input
    type="checkbox"
    {id}
    class="switch switch-sm"
    bind:checked={value}
    {value}
  />
  <label for={id} class="f:$(font-size) lh:$(line-height) capitalize"
    >{label}</label
  >

  <!-- <input type="checkbox" {id} class="switch" bind:checked={value} {value} />
  <label for={id} class="f:$(font-size) lh:$(line-height) capitalize"
    >{label}</label
  > -->
</div>
