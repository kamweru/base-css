<script>
  import { appStore } from "../../AppStore";
  export let currentComponent;
</script>

<input
  type="text"
  placeholder={$appStore.properties[currentComponent].placeholder}
  class={$appStore.properties[currentComponent].classes}
/>
