<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";
  import Popover from "../popover/Popover.svelte";
  export let options = [...Array(10).keys()].map((i) => ({
    title: `Option ${i + 1}`,
    value: `Option ${i + 1}`,
  }));
  export let label = "item label item label item label item label";
  export let selected = "";
  export let matchWidth = false;
  export let id = null;
  export let minW = 200;
  let selectArrowIcon = "chevron-down",
    popoverOptions = {
      placement: "bottom-start",
      autoPlacement: true,
      matchWidth: true,
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

<div class="flex flex:col gap:8">
  <div class="c-select">
    <span class="c-select-selector">
      <span class="c-select-selection">
        <span class="c-select-selection-item" class:open>{label}</span>
      </span>
      <span class="c-select-arrow">
        <Icon icon="tabler:chevron-down" />
      </span>
    </span>
    <input
      type="text"
      class="input c-select-input"
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
  <!-- <div class="c-select c-select-multiple">
    <span class="c-select-selector">
      <span class="c-select-selector-items">
        {#each [...Array(5).keys()] as item}
          <span class="c-select-selector-item-wrap">
            <span class="c-select-selection">
              <span class="c-select-selection-item" class:open>Item {item}</span
              >
              <button class="c-select-selection-remove">
                <Icon icon="ic:baseline-close" />
              </button>
            </span>
          </span>
        {/each}
        <div class="c-select-selector-search">
          <div class="inline-flex rel w:80">
            <input
              type="text"
              class="m:0 p:0 appearance:none w:100% min-w:4 b:1|solid|rgb($(color-border))"
            />
          </div>
        </div>
      </span>
      <span class="c-select-arrow">
        <Icon icon="tabler:chevron-down" />
      </span>
    </span>
  </div> -->
  <Popover options={popoverOptions} {matchWidth} bind:open>
    <!-- <div class="wrapper $popover-padding:calc($(size)/8) w:200"> -->
    <div class="flex flex:col">
      {#each options as { title, value, icon, ...rest }}
        <option
          {value}
          on:click={() => setSelected({ title, value, ...rest })}
          class:active={value === selected}>{title}</option
        >
        <!-- <button
          class={value === selected
            ? "$btn-bg:$(color-border) btn btn-fill"
            : "btn btn-text"}
          on:click={() => setSelected({ title, value, ...rest })}
        >
          <span class="flex ai:center gap:4 w:100% pointer-events:none">
            {#if icon}
              <Icon {icon} class="ml:-4 mr:8 f:18" />
            {/if}
            {title}
            {#if value === selected}
              <Icon icon="lucide:check" class="f:18 ml:auto mr:-4"></Icon>
            {/if}
          </span>
        </button> -->
      {/each}
      <!-- </div> -->
    </div>
  </Popover>
</div>
<!-- <style>
  
</style> -->
