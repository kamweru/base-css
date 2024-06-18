<script>
  import { appStore } from "../../AppStore";
  import "../styles/badge.css";
  export let currentComponent;
</script>

<div class={$appStore.properties[currentComponent].classes}>
  <span class="badge-content"></span>
  <sup class="badge-count">
    <span class=""> 12 </span>
  </sup>
</div>
