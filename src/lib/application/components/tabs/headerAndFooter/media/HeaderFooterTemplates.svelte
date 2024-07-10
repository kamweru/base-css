<script>
  import { createEventDispatcher } from "svelte";
  import Flex from "../../../../../components/flex/Flex.svelte";
  let templates = [
    `<p>This is some slotted content</p>`,
    `<div><div>This is an image</div><img src="https://picsum.photos/200" /></div>`,
  ];
  const dispatch = createEventDispatcher(),
    insert = (content) =>
      dispatch("insert", { key: "template", items: content });
</script>

<Flex wrap={true}>
  {#each templates as template}
    <Flex direction="column" gap="sm" class="border border-rounded-lg">
      <div class="padding-xs flex flex-column">
        <button class="button button-fill" on:click={() => insert(template)}>
          <span>Use Template</span>
        </button>
      </div>
      <div class="padding-xs border-top">
        <div bind:innerHTML={template} contenteditable="false"></div>
      </div>
    </Flex>
  {/each}
</Flex>
