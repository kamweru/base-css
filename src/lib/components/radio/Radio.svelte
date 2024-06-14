<script>
  import { appStore } from "../../AppStore";
  export let currentComponent;
</script>

<div class="flex ai:center gap:16">
  <div class="flex ai:center gap:8">
    <input
      type="radio"
      id="with-label"
      class={$appStore.properties[currentComponent].classes}
    />
    <label for="with-label" class="o:-1">I Disagree</label>
  </div>
  <div class="flex ai:center gap:8">
    <input
      type="radio"
      id="with-label"
      class={$appStore.properties[currentComponent].classes}
    />
    <label for="with-label" class="o:-1">I Agree</label>
  </div>
</div>
