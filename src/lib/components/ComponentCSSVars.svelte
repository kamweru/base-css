<script>
  import { appStore } from "../AppStore";
  import { cssUnits } from "../components.config";
  import Select from "./select/Select.svelte";
  import NumberInput from "./numberinput/NumberInput.svelte";
  export let currentComponent;
</script>

<div class="flex flex:col gap:8">
  {#each $appStore.config.component[currentComponent].cssVariables as cssVariable}
    <div class="flex flex:col p:4|8">
      <div class="flex ai:center jc:space-between">
        <div class="f:semibold f:$(font-size) lh:$(line-height) capitalize">
          {cssVariable.title}
        </div>
        <Select
          bind:selected={cssVariable.units}
          options={cssUnits}
          inputSize="sm"
        ></Select>
      </div>
      <div class="grid grid-cols:3 gap:8">
        {#each cssVariable.options as option}
          <div class="flex flex:col">
            <div class="f:$(font-size) lh:$(line-height)">{option.title}</div>
            <NumberInput bind:value={option.value} inputSize="sm" />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
