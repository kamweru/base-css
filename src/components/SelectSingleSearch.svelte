<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";
  import Popover from "./Popover.svelte";
  export let options = [];
  export let label = "item label";
  export let selected = "";
  export let matchWidth = false;
  export let id = null;
  export let minW = 200;
  let selectArrowIcon = "chevron-down",
    popoverOptions = {
      placement: "bottom-start",
      autoPlacement: true,
    },
    open = false,
    selectedObj = null;
  const dispatch = createEventDispatcher(),
    setSelected = (obj) => {
      open = false;
      selectedObj = obj;
      selected = obj.value;
      label = obj.title;
      dispatch("onChange", obj);
    };
  $: if (
    selected &&
    !open &&
    selectedObj !== options.find((o) => o.value === selected)
  ) {
    // open = false;
    label = options.find((o) => o.value === selected).title;
    selectedObj = options.find((o) => o.value === selected);
    // dispatch("onChange", { value: selected });
  }
</script>

<div class="control-group min-w:{minW}">
  <span class="combobox">
    <span class="combobox-input">
      <span class="combobox-selection single" class:open>{label}</span>
    </span>
    <span class="combobox-arrow $combobox-arrow-icon:$({selectArrowIcon})">
      <span class="combobox-arrow-icon"></span>
    </span>
  </span>
  <input
    type="text"
    class="outline md"
    {id}
    on:focus={() => {
      open = true;
      selectArrowIcon = "search";
    }}
    on:blur={() => {
      //   open = false;
      selectArrowIcon = "chevron-down";
    }}
  />
</div>

<Popover options={popoverOptions} {matchWidth} bind:open>
  <!-- <div class="wrapper $popover-padding:calc($(size)/8) w:200"> -->
  <div class="flex flex:col">
    {#each options as { title, value, icon, ...rest }}
      <button
        class="{value === selected
          ? '$btn-bg:$(color-neutral) fill'
          : '$btn-bg:$(gray-3) text'} lg"
        on:click={() => setSelected({ title, value, ...rest })}
      >
        <span class="flex ai:center gap:4 w:100% pointer-events:none">
          {#if icon}
            <Icon {icon} class="ml:-4 mr:8 f:18" />
          {/if}
          {title}
          {#if value === selected}
            <Icon icon="lucide:check" class="f:18 ml:auto mr:-4"></Icon>
            <!-- <span class="lucide:check ml:auto"></span> -->
          {/if}
        </span>
      </button>
    {/each}
    <!-- </div> -->
  </div>
</Popover>

<!-- <style>
  :root {
    --wrapper-bg: var(--gray-4);
  }
</style> -->
