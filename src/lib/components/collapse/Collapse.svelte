<script>
  import Icon from "@iconify/svelte";
  export let cssVariables = "";
  export let size = "default";
  let open = false,
    panels = [
      {
        title: "This is panel header 1",
        description:
          "A dog is a type of domesticated animal.  A dog is a type of domesticated animal.  Known for its loyalty and faithfulness,  it can be found as a welcome guest in many households across the world.",
      },
      {
        title: "This is panel header 2",
        description:
          "Known for its loyalty and faithfulness, it is a cretaceous order of ",
      },
      {
        title: "This is panel header 3",
        description:
          "it can be found as a welcome guest in many households across the world.",
      },
    ],
    classes = {
      default: "collapse",
      sizes: {
        sm: "collapse-sm",
        default: "",
        lg: "collapse-lg",
      },
    };
</script>

<div
  class={[classes.default, classes.sizes[size]]
    .join(" ")
    .trim()
    .replace(/\s+/g, " ")}
  style={cssVariables}
>
  {#each panels as panel}
    <div class="collapse-item" class:open={panel.open}>
      <div class="collapse-header">
        <span class="collapse-title">{panel.title}</span>
        <a
          href="#"
          aria-expanded={open}
          on:click|preventDefault={() => (panel.open = !panel.open)}
          class="color:rgb($(color-text))"
        >
          <span class="icon"> <Icon icon="tabler:chevron-down" /></span>
          <span class="abs inset:0"> </span>
        </a>
      </div>
      <!-- {#if panel.open} -->
      <div class="collapse-body" class:open={panel.open}>
        <slot>{panel.description}</slot>
      </div>
      <!-- {/if} -->
    </div>
  {/each}
</div>
