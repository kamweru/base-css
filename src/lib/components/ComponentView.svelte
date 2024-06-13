<script>
  import { appStore } from "../AppStore";
  export let currentComponent;
</script>

<div
  class="p:32 flex ai:center jc:center diagonal b:1|solid|rgb($(color-border)) h:100% r:6"
>
  <!-- <div>
    {Object.keys($appStore.rootStyles[currentComponent])
      .map(
        (key) =>
          `${key}: ${$appStore.rootStyles[currentComponent][key].value}${$appStore.rootStyles[currentComponent][key].units};`
      )
      .join(" ")}
  </div> -->
  <div
    class=""
    style={Object.keys($appStore.rootStyles[currentComponent])
      .map(
        (key) =>
          `${key}: ${$appStore.rootStyles[currentComponent][key].value}${$appStore.rootStyles[currentComponent][key].units};`
      )
      .join(" ")}
  >
    {#if currentComponent === "button"}
      <button class={$appStore.properties[currentComponent].classes}
        >Button</button
      >
    {/if}
    {#if currentComponent === "input"}
      <input
        type="text"
        placeholder={$appStore.properties[currentComponent].placeholder}
        class={$appStore.properties[currentComponent].classes}
      />
    {/if}
    {#if currentComponent === "checkbox"}
      <input
        type="checkbox"
        class={$appStore.properties[currentComponent].classes}
      />
      <!-- <div class="flex ai:center gap:8">
          <input
            type="checkbox"
            id="with-label"
            class={$appStore.properties[currentComponent].classes}
          />
          <label for="with-label">I agree to the terms</label>
        </div> -->
    {/if}
  </div>
</div>
