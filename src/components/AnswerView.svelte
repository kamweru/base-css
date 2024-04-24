<script>
  import Icon from "@iconify/svelte";
  import { uuid } from "../lib/utils";
  export let sections;
  export let index;
  export let questionIndex;
  export let question;
  const addOption = (sectionIndex, questionIndex) => {
      let id = uuid();
      sections[sectionIndex].questions[questionIndex].options = [
        ...sections[sectionIndex].questions[questionIndex].options,
        {
          id,
          title: `Option ${sections[sectionIndex].questions[questionIndex].options.length + 1}`,
          value: `Option ${sections[sectionIndex].questions[questionIndex].options.length + 1}`,
        },
      ];
    },
    callFocus = (input) => {
      input.focus();
      input.select();
    };
</script>

<div class="flex flex:col gap:8 p:16">
  <!--   <div>
    <div class="control-group">
      <input
        type="checkbox"
        id="check-required"
        class="switch"
        value={question.validationRules.required}
        bind:checked={question.validationRules.required}
      />
      <label for="check-required">Required</label>
    </div>
  </div>
 <div class="control-group">
    <input
      type="text"
      name="title"
      id="title"
      class="underline lg"
      placeholder={question.placeholder}
      bind:value={question.title}
    />
  </div> -->
  {#if question.questionType === "short" || question.questionType === "long"}
    <div class="control-group">
      <input
        type="text"
        class="underline lg"
        placeholder="{question.questionType} answer text"
      />
    </div>
  {:else}
    <div class="flex flex:col gap:8" id="options">
      {#each question.options as option, optionIndex}
        <div class="flex ai:center r:4 gap:8">
          {#if question.questionType === "dropdown"}
            <span>{index + 1}.</span>
          {:else}
            <Icon
              icon={question.questionIcon}
              class="f:18 color:rgb($(text-light))"
            ></Icon>
          {/if}
          <div class="control-group flex:1">
            <input
              type="text"
              class="underline md"
              placeholder={option.title}
              bind:value={option.value}
              id={option.id}
              use:callFocus
            />
          </div>
          <button class="$btn-bg:$(color-error) outline sm icon">
            <span class="lh:0">
              <Icon icon="ic:baseline-minus" class="f:18"></Icon>
            </span>
          </button>
        </div>
      {/each}
      <div class="flex ai:center r:4 gap:8" id="add-option">
        {#if question.questionType === "select-one" || question.questionType === "multiple" || question.questionType === "dropdown"}
          <div class="flex ai:center gap:8">
            {#if question.questionType === "dropdown"}
              <span>{sections[index].questions.length + 1}.</span>
            {:else}
              <Icon
                icon={question.questionIcon}
                class="f:18 color:rgb($(text-light))"
              ></Icon>
            {/if}
            <div class="control-group flex:1">
              <input
                type="text"
                class="underline md"
                placeholder="Add option"
                value=""
                on:focus={() => addOption(index, questionIndex)}
              />
            </div>
          </div>
          {#if question.questionType !== "dropdown"}
            <div class="flex ai:center gap:8">
              <span>or</span>
              <button class="$btn-color:$(color-primary) link md">
                add "Other"
              </button>
            </div>
          {/if}
        {/if}
      </div>
    </div>
  {/if}
</div>
<div class="flex ai:center jc:space-between p:7|11 bt:1|solid|rgb($(border))">
  <div class="control-group">
    <input
      type="checkbox"
      id="switch-{question.id}"
      class="switch"
      value={question.validationRules.required}
      bind:checked={question.validationRules.required}
    />
    <label for="switch-{question.id}">Required</label>
  </div>
  <!-- <button class="$btn-bg:$(gray-8) $btn-color:$(color-error) fill sm icon">
    <span class="lh:0">
      <Icon icon="mage:copy" class="f:18"></Icon>
    </span>
  </button>
  <button
    class="$btn-bg:$(color-error) $btn-color:$(color-error) ml:auto outline sm icon"
  >
    <span class="lh:0">
      <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
    </span>
  </button> -->
  <div class="flex ai:center gap:16">
    <!-- <button class="$btn-bg:$(color-neutral) outline sm icon">
      <span class="lh:0">
        <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
      </span>
    </button> -->
    <div class=" rel">
      <button class="$btn-bg:$(color-neutral) text sm icon">
        <span class="lh:0">
          <Icon icon="line-md:arrow-up" class="f:18"></Icon>
        </span>
      </button>
      <button class="$btn-bg:$(color-neutral) text sm icon">
        <span class="lh:0">
          <Icon icon="line-md:arrow-down" class="f:18"></Icon>
        </span>
      </button>
    </div>
  </div>
</div>

<!-- <div class="flex ai:center rel my:8">
  <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
  <span class="px:8">
    <button class="$btn-bg:$(gray-4) dashed md">
      <span class="lh:0 mr:8">
        <Icon icon="fluent:add-28-filled"></Icon>
      </span>
      Add question
    </button>
  </span>
  <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
</div> -->
