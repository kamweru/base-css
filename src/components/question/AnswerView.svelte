<script>
  import Icon from "@iconify/svelte";
  import { uuid } from "../../lib/utils";
  import { appStore } from "../../lib/AppStore";
  export let question;
  const addOption = () => {
      let id = uuid(),
        questionIndex = $appStore.questions.findIndex(
          (q) => q.id === question.id
        );
      question.options = [
        ...question.options,
        {
          id,
          title: `Option ${question.options.length + 1}`,
          value: `Option ${question.options.length + 1}`,
        },
      ];
      appStore.updateData({
        collectionName: "questions",
        document: $appStore.questions[questionIndex],
        callback: (data) => {
          console.log(data);
        },
      });
    },
    removeOption = (option) => {
      let questionIndex = $appStore.questions.findIndex(
        (q) => q.id === question.id
      );
      question.options = $appStore.questions[questionIndex].options.filter(
        (o) => o.id !== option.id
      );
      appStore.updateData({
        collectionName: "questions",
        document: $appStore.questions[questionIndex],
        callback: (data) => {
          console.log(data);
        },
      });
    },
    callFocus = (input) => {
      input.focus();
      input.select();
    },
    toggleRequired = (e) => {
      let isChecked = e.target.checked,
        questionIndex = $appStore.questions.findIndex(
          (q) => q.id === question.id
        );
      if (question.validationRules && !question.validationRules.required) {
        question.validationRules.required = isChecked;
      } else {
        question.validationRules.required = isChecked;
      }

      appStore.updateData({
        collectionName: "questions",
        document: $appStore.questions[questionIndex],
        callback: (data) => {
          console.log(data);
        },
      });
    },
    optionChange = (option) => {
      let optionIndex = question.options.findIndex((o) => o.id === option.id),
        splitOptionTitle = option.title.split(" "),
        maxLength = 7,
        tmpValue = splitOptionTitle.join("_"),
        sameValues = question.options.filter(
          (o) => o.value === tmpValue
        ).length;
      if (splitOptionTitle.length >= maxLength) {
        tmpValue = splitOptionTitle.slice(0, maxLength).join("_");
      }
      if (sameValues > 0) {
        tmpValue = `${tmpValue}_${sameValues}`;
      }
      question.options[optionIndex].value = tmpValue;
      appStore.updateData({
        collectionName: "questions",
        document:
          $appStore.questions[
            $appStore.questions.findIndex((q) => q.id === question.id)
          ],
        callback: (data) => {
          console.log(data);
        },
      });
    };
</script>

<div class="flex flex:col gap:8 p:16">
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
            <span>{optionIndex + 1}.</span>
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
              bind:value={option.title}
              id={option.id}
              use:callFocus
              on:change={() => optionChange(option)}
            />
          </div>
          <button
            class="$btn-bg:$(color-error) outline sm icon"
            on:click={() => removeOption(option)}
          >
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
              <span>{question.options.length + 1}.</span>
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
                on:focus={addOption}
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
      on:change={toggleRequired}
    />
    <label for="switch-{question.id}">Required</label>
  </div>
  <div class="flex ai:center gap:16">
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
