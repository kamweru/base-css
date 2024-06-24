<script>
  import { uuid } from "../../utils";
  import "../styles/checkbox.css";
  export let checked = false;
  export let id = uuid(8);
  export let indeterminate = false;
  export let disabled = false;
</script>

<div class="flex ai:center gap:8">
  <input
    type="checkbox"
    {id}
    bind:checked
    value={checked}
    {disabled}
    bind:indeterminate
    class="input checkbox"
  />
  <label for={id} class="f:$(font-size) lh:$(line-height)"
    >I agree to the terms</label
  >
</div>
