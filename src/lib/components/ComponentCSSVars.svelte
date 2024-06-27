<script>
  import { appStore } from "../AppStore";
  import { cssUnits } from "../components.config";
  import Select from "./select/Select.svelte";
  import NumberInput from "./numberinput/NumberInput.svelte";
  export let currentComponent;
</script>

<!-- <div class="flex flex:col gap:8"> -->
<div class="flex flex:wrap jc:space-between p:8">
  {#each $appStore.config.component[currentComponent].cssVariables as cssVariable}
    <!-- <div class="flex flex:col p:4|8"> -->
    <!-- <div class="f:$(font-size) lh:$(line-height) capitalize">
        {cssVariable.title}
      </div> -->
    {#if cssVariable.options && cssVariable.options.length > 0}
      {#each cssVariable.options as option}
        <div class="flex flex:col">
          <div class="f:$(font-size-sm) lh:$(line-height-sm)">
            {cssVariable.title}
            {option.title}
          </div>
          <NumberInput
            bind:value={option.value}
            inputSize="sm"
            step={cssVariable.step ? cssVariable.step : 1}
          />
        </div>
      {/each}
    {:else}
      <div class="flex flex:col">
        <div class="f:$(font-size-sm) lh:$(line-height-sm)">
          {cssVariable.title}
        </div>
        <NumberInput
          bind:value={cssVariable.value}
          inputSize="sm"
          step={cssVariable.step ? cssVariable.step : 1}
        />
      </div>
    {/if}
    <!-- </div> -->
    <!-- </div> -->
  {/each}
</div>
