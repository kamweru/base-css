<script>
  import { uuid } from "../../utils";
  export let id = uuid(8);
  export let group;
  export let value = "";
  export let label = "";
</script>

<div class="flex ai:center gap:8">
  <input type="radio" {id} class="input radio" {value} bind:group />
  <label for={id} class="label">{label}</label>
</div>
