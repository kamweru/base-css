<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../AppStore";
  import Form from "./form/Form.svelte";
  import Radio from "./radio/Radio.svelte";
  import Range from "./range/Range.svelte";
  import NumberInput from "./numberInput/NumberInput.svelte";
  import Select from "./select/Select.svelte";
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
  </div> 
  
  
    style={Object.keys($appStore?.rootStyles[currentComponent])
      .map(
        (key) =>
          `${key}: ${$appStore.rootStyles[currentComponent][key].value}${$appStore.rootStyles[currentComponent][key].units};`
      )
      .join(" ")}-->
  <div class="w:3/5 flex jc:center">
    {#if currentComponent === "button"}
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
    {/if}
    {#if currentComponent === "input"}
      <input
        type="text"
        placeholder={$appStore.properties[currentComponent].placeholder}
        class={$appStore.properties[currentComponent].classes}
      />
    {/if}
    {#if currentComponent === "checkbox"}
      <div class="flex ai:center gap:8">
        <input
          type="checkbox"
          id="with-label"
          class={$appStore.properties[currentComponent].classes}
        />
        <label for="with-label" class="o:-1">I agree to the terms</label>
      </div>
    {/if}
    {#if currentComponent === "form"}
      <Form bind:currentComponent></Form>
    {/if}
    {#if currentComponent === "progress"}
      <progress
        value="0.5"
        class={$appStore.properties[currentComponent].classes}
      ></progress>
    {/if}
    {#if currentComponent === "numberinput"}
      <NumberInput bind:currentComponent></NumberInput>
    {/if}
    {#if currentComponent === "radio"}
      <Radio bind:currentComponent></Radio>
    {/if}
    {#if currentComponent === "range"}
      <Range bind:currentComponent></Range>
    {/if}
    {#if currentComponent === "select"}
      <div>
        <Select></Select>
      </div>
      <!-- <select class={$appStore.properties[currentComponent].classes}>
        {#each ["Option 1", "Option 2", "Option 3"] as option}
          <option>{option}</option>
        {/each}
      </select> -->
    {/if}
    {#if currentComponent === "switch"}
      <div class="flex ai:center gap:8">
        <input
          type="checkbox"
          id="with-label"
          class={$appStore.properties[currentComponent].classes}
        />
        <label for="with-label" class="o:-1">I agree to the terms</label>
      </div>
    {/if}
  </div>
</div>
