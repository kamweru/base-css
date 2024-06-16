<script>
  import { appStore } from "../../AppStore";
  export let currentComponent;
</script>

<div class="flex flex:col gap:8">
  <div class="flex ai:center gap:8">
    <input
      type="checkbox"
      id="with-label"
      class={$appStore.properties[currentComponent].classes}
    />
    <label for="with-label" class="o:-1">I agree to the terms</label>
  </div>
  <label class="cursor:pointer user-select:none flex ai:center">
    <input
      type="checkbox"
      class="appearance:none w:16 h:16 b:2|solid|blue-70 r:5 bg:transparent rel mr:10 cursor:pointer content:'':before bg:blue-70:before block:before abs:before top:1:before left:1:before translate(-50%|-50%):before scale(0):before w:10:before h:10:before r:3:before transition:all|0.375s|cubic-bezier(0.27,0.01,0.38,1.06):before translate(-50%|-50%):indeterminate:before scale(1):indeterminate:before"
      indeterminate={true}
    />
    <span> special category </span>
  </label>
</div>
