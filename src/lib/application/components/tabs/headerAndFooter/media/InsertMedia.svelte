<script>
  import { createEventDispatcher } from "svelte";
  import Flex from "../../../../../components/flex/Flex.svelte";
  let images = [...Array(10).keys()].map(
      (i) => `https://picsum.photos/${(i + 1) * 100}`
    ),
    group = [];
  const dispatch = createEventDispatcher(),
    insert = () => dispatch("insert", { key: "media", items: group });
</script>

<Flex direction="column">
  <Flex wrap={true}>
    {#each images as url}
      <Flex
        direction="column"
        gap="sm"
        class="border border-rounded-lg padding-xs col-3"
      >
        <label class="checkbox-wrapper">
          <input type="checkbox" class="checkbox" value={url} bind:group />
          <span>Select</span>
        </label>
        <img
          src={url}
          class="object:cover w:full square border-rounded"
          alt=""
        />
      </Flex>
    {/each}
  </Flex>
  <Flex align="center" justify="spaceBetween">
    <Flex align="center">
      <span>Selected: 0</span>
      <button class="button button-fill button-sm button-danger">
        <span>clear</span>
      </button>
    </Flex>
    <button class="button button-fill button-sm" on:click={insert}>
      <span>Insert Selected</span>
    </button>
  </Flex>
</Flex>
