<script>
  import { appStore } from "../../AppStore";

  export let currentComponent;
</script>

<div class="flex ai:center gap:8">
  <input
    type="checkbox"
    id="with-label"
    class={$appStore.properties[currentComponent].classes}
  />
  <label for="with-label" class="o:-1">I agree to the terms</label>
</div>
