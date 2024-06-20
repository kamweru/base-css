<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../../AppStore";
  import "../styles/tag.css";
  export let currentComponent;
</script>

<div class="">
  <span class={$appStore.properties[currentComponent].classes}>Tag 1</span>
  <span class={$appStore.properties[currentComponent].classes}
    >Tag 1
    <button class="icon tag-close-btn">
      <Icon icon="ic:baseline-close"></Icon>
    </button>
  </span>

  <span class={$appStore.properties[currentComponent].classes}>
    <span class="icon">
      <Icon icon="tabler:plus" />
    </span>
    <span>Tag 1</span>
  </span>
</div>
