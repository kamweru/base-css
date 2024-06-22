<script>
  import { appStore } from "../../AppStore";
  import "../styles/able.css";
  export let currentComponent;
</script>

<div class={$appStore.properties[currentComponent]["classes"]}>
  <div class="able-content">text content of element</div>
</div>
