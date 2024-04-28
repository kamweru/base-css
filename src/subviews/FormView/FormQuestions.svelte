<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../../lib/AppStore";
  import Question from "../../components/Question.svelte";
  import Section from "../../components/Section.svelte";
  import { uuid } from "../../lib/utils";
  import { addDocument } from "../../lib/firebase";
  import { derived } from "svelte/store";
  export let params;
  let MmuLogo =
      "https://students-personal-details-form.web.app/static/images/mmu-logo-download-C9wO1TvD.webp",
    collapsed = false;
  const addSection = () => {
      let section = {
        id: uuid(),
        formId: params.id,
        title: "untitled section",
        description: "",
        placementOrder:
          $appStore.sections.filter((s) => s.formId === params.id).length + 1,
        createdAt: Date.now(),
      };
      $appStore.sections = [...$appStore.sections, section];
      addDocument("sections", section, () => {
        console.log("section added");
      });
    },
    addQuestion = (section) => {
      let question = {
        id: uuid(),
        formId: params.id,
        sectionId: section.id,
        type: "input",
        dataType: "text",
        placeholder: "untitled question",
        label: "untitled question",
        createdAt: Date.now(),
        hint: "",
        value: "",
        isParent: false,
        isChild: false,
        defaultValue: null,
        questionType: "short",
        currentView: "AnswerView",
        placementOrder:
          $appStore.questions.filter((q) => q.sectionId === section.id).length +
          1,
        valid: false,
        validationRules: {
          required: false,
        },
        errors: {
          messages: [],
        },
      };
      $appStore.questions = [...$appStore.questions, question];
      addDocument("questions", question, () => {
        console.log("question added");
      });
    },
    sections = derived(appStore, ($appStore) => {
      let result = [];
      if (!$appStore.sections) return result;
      for (let section of $appStore.sections) {
        if (section.formId === params.id) {
          result = [...result, section];
        }
      }
      result.sort((a, b) => a.placementOrder - b.placementOrder);
      return result;
    }),
    questions = derived(appStore, ($appStore) => {
      let result = [];
      if (!$appStore.questions) return result;
      for (let question of $appStore.questions) {
        if (question.formId === params.id) {
          result = [...result, question];
        }
      }
      result.sort((a, b) => a.placementOrder - b.placementOrder);
      return result;
    });
</script>

<div class="flex flex:col gap:16 mt:16">
  <div class="b:1|solid|rgb($(border)) r:5">
    <div class="flex ai:center jc:space-between p:7|11">
      <div>Form Header</div>
      <div class="flex ai:center gap:8">
        <button class="$btn-bg:$(color-neutral) outline sm icon">
          <span class="lh:0">
            <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
          </span>
        </button>
        <button
          class="$btn-bg:$(gray-8) outline sm icon"
          on:click={() => (collapsed = !collapsed)}
        >
          <span class="lh:0 chevron-down" class:active={!collapsed}>
            <Icon icon="fluent:chevron-down-24-filled" class="f:18"></Icon>
          </span>
        </button>
      </div>
    </div>
    {#if !collapsed}
      <div class="p:16 bg:rgb($(beige)) r:5" contenteditable="true">
        <div class="mb:8">
          <div
            class="mx:auto h:120 mb:8 aspect:1/1 p:20 bg:transparent|url({MmuLogo})|no-repeat|top|left/cover bg:url({MmuLogo})!"
          ></div>
        </div>
        <div class="mb:8 text:center flex flex:col gap:8">
          <h1 class="f:30">MAASAI MARA UNIVERSITY</h1>
          <h2>
            <div>OFFICE OF THE REGISTRAR</div>
            <div>(ACADEMIC AFFAIRS)</div>
          </h2>
          <h3>STUDENT’S PERSONAL DETAILS FORM</h3>
          <p class="f:16 text:justify t-balance">
            Information provided in this form is intended to assist the Office
            of the Registrar Academic to understand the student better. It will
            be used for the purposes of improving the student’s welfare while at
            the University.
          </p>
        </div>
      </div>
    {/if}
  </div>

  {#if $sections && $sections.length > 0}
    {#each $sections as section, index}
      <Section
        total={$sections.length}
        bind:section={$appStore.sections[
          $appStore.sections.findIndex((s) => s.id === section.id)
        ]}
      ></Section>
      {#if $questions && $questions.length > 0}
        {#each $questions as question}
          {#if question.sectionId === section.id}
            <Question
              bind:question={$appStore.questions[
                $appStore.questions.findIndex((q) => q.id === question.id)
              ]}
            ></Question>
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
