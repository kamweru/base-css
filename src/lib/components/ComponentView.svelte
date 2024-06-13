<script>
  import { appStore } from "../AppStore";
  export let currentComponent;
</script>

<div
  class="p:32 flex ai:center jc:center diagonal b:1|solid|rgb($(color-border)) h:100%"
>
  <div>
    {#if currentComponent === "button"}
      <button class={$appStore.properties[currentComponent].classes}
        >Button</button
      >
    {/if}
    {#if currentComponent === "input"}
      <input
        type="text"
        name=""
        id=""
        placeholder={$appStore.properties[currentComponent].placeholder}
        class={$appStore.properties[currentComponent].classes}
      />
    {/if}
  </div>
</div>
