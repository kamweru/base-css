<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../AppStore";
  import { sampleData } from "../components.config";
  import Form from "./form/Form.svelte";
  import Radio from "./radio/Radio.svelte";
  import Range from "./range/Range.svelte";
  import NumberInput from "./numberInput/NumberInput.svelte";
  import Select from "./select/Select.svelte";
  import Table from "./table/Table.svelte";
  import Tabs from "./tabs/Tabs.svelte";
  import Details from "./details/Details.svelte";
  import Upload from "./upload/Upload.svelte";
  export let currentComponent;
</script>

<div
  class="p:32 flex ai:center jc:center diagonal b:1|solid|rgb($(color-border)) h:100% r:6"
>
  <!-- <div class="flex gap:8">
    <div class="spinner"></div>
    <div class="loader"></div>
    <div class="loading-loop"></div>
  </div> -->
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
  <div class="w:50% flex jc:center">
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
    {:else if currentComponent === "input"}
      <input
        type="text"
        placeholder={$appStore.properties[currentComponent].placeholder}
        class={$appStore.properties[currentComponent].classes}
      />
    {:else if currentComponent === "checkbox"}
      <div class="flex flex:col gap:8">
        <div class="flex ai:center gap:8">
          <input
            type="checkbox"
            id="with-label"
            class={$appStore.properties[currentComponent].classes}
          />
          <label for="with-label" class="o:-1">I agree to the terms</label>
        </div>
        <label class="cursor:pointer user-select:none flex ai:center">
          <input
            type="checkbox"
            class="appearance:none w:16 h:16 b:2|solid|blue-70 r:5 bg:transparent rel mr:10 cursor:pointer content:'':before bg:blue-70:before block:before abs:before top:1:before left:1:before translate(-50%|-50%):before scale(0):before w:10:before h:10:before r:3:before transition:all|0.375s|cubic-bezier(0.27,0.01,0.38,1.06):before translate(-50%|-50%):indeterminate:before scale(1):indeterminate:before"
            indeterminate={true}
          />
          <span> special category </span>
        </label>
      </div>
    {:else if currentComponent === "form"}
      <Form bind:currentComponent></Form>
    {:else if currentComponent === "progress"}
      <progress
        value="0.5"
        class={$appStore.properties[currentComponent].classes}
      ></progress>
    {:else if currentComponent === "numberinput"}
      <NumberInput bind:currentComponent></NumberInput>
    {:else if currentComponent === "radio"}
      <Radio bind:currentComponent></Radio>
    {:else if currentComponent === "range"}
      <Range bind:currentComponent></Range>
    {:else if currentComponent === "select"}
      <!-- <div> -->
      <Select></Select>
      <!-- </div> -->
      <!-- <select class={$appStore.properties[currentComponent].classes}>
        {#each ["Option 1", "Option 2", "Option 3"] as option}
          <option>{option}</option>
        {/each}
      </select> -->
    {:else if currentComponent === "switch"}
      <div class="flex ai:center gap:8">
        <input
          type="checkbox"
          id="with-label"
          class={$appStore.properties[currentComponent].classes}
        />
        <label for="with-label" class="o:-1">I agree to the terms</label>
      </div>
    {:else if currentComponent === "table"}
      <Table></Table>
    {:else if currentComponent === "tabs"}
      <Tabs menuItems={sampleData["tabs"]}></Tabs>
    {:else if currentComponent === "details"}
      <Details></Details>
    {:else if currentComponent === "upload"}
      <Upload></Upload>
    {/if}
  </div>
</div>
