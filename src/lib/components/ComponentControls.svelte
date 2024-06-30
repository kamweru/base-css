<script>
  import Select from "./select/Select.svelte";
  import { appStore } from "../AppStore";
  import Switch from "./switch/Switch.svelte";
  import Input from "./input/Input.svelte";
  import NumberInput from "./numberinput/NumberInput.svelte";
  import Radio from "./radio/Radio.svelte";
  export let currentComponent;
</script>

<div class="flex flex:col">
  {#each $appStore.config.component[currentComponent].classProps as classProp}
    <div class="flex flex:col p:4|8">
      <div class="f:$(font-size) lh:$(line-height) capitalize">
        {classProp.title}
      </div>
      {#if classProp.options && classProp.options.length > 0}
        <Select
          bind:selected={classProp.value}
          options={classProp.options}
          inputSize="sm"
        />
      {:else}
        <Input size="sm" bind:value={classProp.value} />
      {/if}
    </div>
  {/each}
  {#each $appStore.config.component[currentComponent].otherProps as otherProp}
    <div class="flex flex:col p:4|8">
      {#if otherProp.controlType === "switch"}
        <Switch
          size="sm"
          bind:value={otherProp.value}
          label={otherProp.title}
        />
      {/if}
      {#if otherProp.controlType === "input"}
        <div class="f:$(font-size) lh:$(line-height) capitalize">
          {otherProp.title}
        </div>
        <Input size="sm" bind:value={otherProp.value} />
      {/if}
      {#if otherProp.controlType === "number"}
        <div class="f:$(font-size) lh:$(line-height) capitalize">
          {otherProp.title}
        </div>
        <NumberInput bind:value={otherProp.value} inputSize="sm" />
      {/if}
      {#if otherProp.controlType === "radio"}
        <div class="f:$(font-size) lh:$(line-height) capitalize">
          {otherProp.title}
        </div>
        {#each otherProp.options as option}
          <Radio
            bind:group={otherProp.value}
            value={option.value}
            label={option.title}
          />
        {/each}
      {/if}
    </div>
  {/each}
  <!-- <div class="flex flex:col p:4|8 gap:8">
    <div class="flex ai:center b:1|solid|rgb($(color-border)) r:5">
      {#each ["info", "success", "warning", "danger"] as color}
        <button
          class="p:0|7 f:$(font-size-sm) lh:$(line-height-sm) br:1|solid|rgb($(color-border)) br:none:last w:100% bg:rgb($(gray-2)):hover
          rl:4:first rr:4:last">{color}</button
        >
      {/each}
    </div>
    <div class="button-group">
      {#each ["info", "success", "warning", "danger"] as color}
        <button class="button button-text button-sm">{color}</button>
      {/each}
    </div>
  </div> -->
</div>
