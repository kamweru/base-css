<script>
  import Icon from "@iconify/svelte";
  import Flex from "../../../../../../components/flex/Flex.svelte";
  import Select from "../../../../../../components/select/Select.svelte";
  import { uuid } from "../../../../../../utils";
  export let question;
  const callFocus = (input) => {
      input.focus();
      input.select();
    },
    addOption = () => {
      let id = uuid();
      question.options = [
        ...question.options,
        {
          id,
          title: `Option ${question.options.length + 1}`,
          value: `Option ${question.options.length + 1}`,
        },
      ];
    },
    addOtherOption = () => {
      let id = uuid();
      question.options = [
        ...question.options,
        {
          id,
          title: `Other`,
          value: `Other`,
        },
      ];
    };
</script>

<Flex direction="column">
  <Flex justify="spaceBetween" align="center" gap="sm">
    <Flex gap="sm">
      <div>Select &amp; use existing options</div>
      <Select></Select>
      <button class="button button-fill button-sm">Add</button>
    </Flex>
    {#if question && question.options && question.options.length > 0}
      <Flex direction="column" align="flexEnd" gap="sm">
        <button
          class="button button-fill button-danger button-icon-only button-sm"
        >
          <span class="button-icon">
            <span class="icon">
              <Icon icon="ic:baseline-minus" class="f:18"></Icon>
            </span>
          </span>
        </button>
      </Flex>
    {/if}
  </Flex>
  {#if question && question.options && question.options.length > 0}
    {#each question.options as option, optionIndex}
      <Flex>
        <span>{optionIndex + 1}</span>
        <input
          type="text"
          class="input input-underline"
          placeholder={option.title}
          bind:value={option.title}
          id={option.id}
          use:callFocus
        />
        <button
          class="button button-outline button-icon-only button-danger button-sm"
        >
          <span class="button-icon">
            <span class="icon">
              <Icon icon="ic:baseline-minus" class="f:18"></Icon>
            </span>
          </span>
        </button>
      </Flex>
    {/each}
  {/if}
  <Flex align="center">
    <span>{question?.options.length + 1}.</span>
    <input
      type="text"
      placeholder="add option"
      class="input input-underline"
      on:focus={addOption}
    />
    <Flex align="center">
      <span>or</span>
      <button class="button button-link" on:click={addOtherOption}>
        <span>add "Other"</span>
      </button>
    </Flex>
  </Flex>
</Flex>
