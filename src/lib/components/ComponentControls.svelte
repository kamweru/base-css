<script>
  import Select from "./select/Select.svelte";
  import { appStore } from "../AppStore";
  import Switch from "./switch/Switch.svelte";
  import Input from "./input/Input.svelte";
  import NumberInput from "./numberinput/NumberInput.svelte";
  export let currentComponent;
</script>

<div class="flex flex:col">
  <!-- <div class="flex flex:col gap:4 p:8">
    <div class="f:16 lh:$(line-height) capitalize">
      {$appStore.config.view.title}
    </div>
    <Select
      bind:selected={$appStore.config.view.value}
      options={$appStore.config.view.options}
      inputSize="sm"
    />
  </div> -->
  {#each $appStore.config.component[currentComponent].classProps as classProp}
    <div class="flex flex:col p:4|8">
      <div class="f:$(font-size) lh:$(line-height) capitalize">
        {classProp.title}
      </div>
      <Select
        bind:selected={classProp.value}
        options={classProp.options}
        inputSize="sm"
      />
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
      <!-- <Select
        bind:selected={otherProp.value}
        options={otherProp.options}
        inputSize="sm"
      /> -->
    </div>
  {/each}
</div>
