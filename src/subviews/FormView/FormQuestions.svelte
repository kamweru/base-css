<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../../lib/AppStore";
  import Question from "../../components/Question.svelte";
  import Section from "../../components/Section.svelte";
  import { uuid } from "../../lib/utils";
  export let params;
  const addSection = () => {
      appStore.update((s) => {
        if (!s.sections) s.sections = [];
        s.sections = [
          ...s.sections,
          {
            id: uuid(),
            title: "untitled section",
            description: "",
          },
        ];
        return s;
      });
    },
    addQuestion = (section) => {
      appStore.update((s) => {
        if (!s.questions) s.questions = [];
        s.questions = [
          ...s.questions,
          {
            id: uuid(),
            sectionId: section.id,
            type: "input",
            dataType: "text",
            placeholder: "untitled question",
            label: "Name of Secondary School Attended",
            hint: "",
            value: "untitled question",
            defaultValue: "untitled question",
            questionType: "short",
            currentView: "AnswerView",
            valid: false,
            validationRules: {
              // required: false,
              // minLength: 5,
            },
            errors: {
              messages: [],
            },
          },
        ];
        return s;
      });
    };
</script>

<div class="flex flex:col gap:16 mt:16">
  <div class="flex">
    <img
      src="https://f4.bcbits.com/img/0014753839_100.png"
      alt=""
      class="obj:cover min-w:full"
    />
  </div>
  {#if $appStore.sections && $appStore.sections.length > 0}
    {#each $appStore.sections as section, index}
      <Section
        index={index + 1}
        total={$appStore.sections.length}
        bind:title={section.title}
        bind:description={section.description}
      ></Section>
      {#if $appStore.questions && $appStore.questions.length > 0}
        {#each $appStore.questions as question, questionIndex}
          {#if question.sectionId === section.id}
            <Question {index} {question} {questionIndex}></Question>
          {/if}
        {/each}
        <div class="flex ai:center rel my:8">
          <span class="flex:1 bt:1|solid|rgb($(border))"></span>
          <span class="px:8">
            <button
              class="$btn-bg:$(gray-4) dashed md"
              on:click={() => addQuestion(section)}
            >
              <span class="lh:0 mr:8">
                <Icon icon="fluent:add-28-filled"></Icon>
              </span>
              Add question
            </button>
          </span>
          <span class="flex:1 bt:1|solid|rgb($(border))"></span>
        </div>
      {:else}
        <div class="flex ai:center rel my:8">
          <span class="flex:1 bt:1|solid|rgb($(border))"></span>
          <span class="px:8">
            <button
              class="$btn-bg:$(gray-4) dashed md"
              on:click={() => addQuestion(section)}
            >
              <span class="lh:0 mr:8">
                <Icon icon="fluent:add-28-filled"></Icon>
              </span>
              Add question
            </button>
          </span>
          <span class="flex:1 bt:1|solid|rgb($(border))"></span>
        </div>
      {/if}
    {/each}
    <div class="flex ai:center rel">
      <span class="flex:1 bt:1|solid|rgb($(border))"></span>
      <span class="px:8">
        <button class="$btn-bg:$(gray-4) dashed md" on:click={addSection}>
          <span class="lh:0 mr:8">
            <Icon icon="fluent:add-28-filled"></Icon>
          </span>
          Add section
        </button>
      </span>
      <span class="flex:1 bt:1|solid|rgb($(border))"></span>
    </div>
  {:else}
    <div class="flex ai:center rel">
      <span class="flex:1 bt:1|solid|rgb($(border))"></span>
      <span class="px:8">
        <button class="$btn-bg:$(gray-4) dashed md" on:click={addSection}>
          <span class="lh:0 mr:8">
            <Icon icon="fluent:add-28-filled"></Icon>
          </span>
          Add section
        </button>
      </span>
      <span class="flex:1 bt:1|solid|rgb($(border))"></span>
    </div>
  {/if}
</div>
