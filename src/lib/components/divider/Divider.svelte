<script>
  export let type = "default";
  let classes = {
      default: "divider",
      types: {
        default: "",
        withText: "divider-with-text",
        vertical: "divider-vertical",
        textRight: "divider-with-text-right",
        textLeft: "divider-with-text-left",
      },
    },
    items = 3;
</script>

{#if type === "vertical"}
  {#each Array(items) as _, i}
    item {i + 1}
    {#if i < items - 1}
      <div
        class={[classes.default, classes.types[type]]
          .join(" ")
          .trim()
          .replace(/\s+/g, " ")}
      ></div>
    {/if}
  {/each}
{:else}
  <div
    class={[classes.default, classes.types[type]]
      .join(" ")
      .trim()
      .replace(/\s+/g, " ")}
  >
    {#if ["withText", "textRight", "textLeft"].includes(type)}
      <span class="divider-text">Divider Text</span>
    {/if}
  </div>
{/if}
