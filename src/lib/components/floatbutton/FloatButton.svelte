<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../../AppStore";
  import "../styles/floatbutton.css";
  export let currentComponent;
</script>

<button class={$appStore.properties[currentComponent].classes}>
  <div class="floatbutton-content">
    <span class="icon floatbutton-icon">
      <Icon icon="akar-icons:info-fill" />
    </span>
  </div>
</button>
