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
    <button class="tag-close-btn">
      <span class="icon tag-close-icon">
        <Icon icon="tabler:x" />
      </span>
    </button>
  </span>

  <span class={$appStore.properties[currentComponent].classes}>
    <span class="icon">
      <Icon icon="tabler:plus" />
    </span>
    <span>Tag 1</span>
    <!-- <span class="icon tag-close-icon">
      <Icon icon="tabler:x" />
    </span> -->
  </span>
</div>
