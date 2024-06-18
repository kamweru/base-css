<script>
  import { appStore } from "../../AppStore";
  import Icon from "@iconify/svelte";
  export let currentComponent;
</script>

<button class={$appStore.properties[currentComponent].classes}>
  {#if $appStore.properties[currentComponent].componentType === "icon-only"}
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
  {:else if $appStore.properties[currentComponent].componentType === "icon-left"}
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
    <span>{$appStore.properties[currentComponent].text}</span>
  {:else if $appStore.properties[currentComponent].componentType === "icon-right"}
    <span>{$appStore.properties[currentComponent].text}</span>
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
  {:else}
    {$appStore.properties[currentComponent].text}
  {/if}
</button>
