<script>
  import Icon from "@iconify/svelte";
  import Card from "./Card.svelte";
  import SelectSingleSearch from "./SelectSingleSearch.svelte";
  import { uuid } from "../lib/utils";
  import { fade } from "svelte/transition";
  //   export let currentView = "QuestionView";
  export let sections;
  export let question;
  export let index;
  export let questionIndex;

  let qView,
    questionTypes = [
      { title: "Short answer", value: "short", icon: "mdi:text-short" },
      { title: "Long answer", value: "long", icon: "mdi:text-long" },
      {
        title: "Select one",
        value: "select-one",
        icon: "eva:radio-button-off-fill",
      },
      {
        title: "Select many",
        value: "multiple",
        icon: "carbon:checkbox",
      },
      {
        title: "Dropdown",
        value: "dropdown",
        icon: "lucide:circle-chevron-down",
      },
      {
        title: "File Upload",
        value: "fileupload",
        icon: "bytesize:upload",
      },
    ],
    collapsed = false,
    tabs = [
      {
        title: "Answer Options",
        settingView: "AnswerView",
        id: uuid(),
      },
      { title: "Skip Logic", settingView: "QuestionConditions", id: uuid() },
      { title: "Validation", settingView: "QuestionValidation", id: uuid() },
    ],
    currentTab = tabs[0];
  const toggleView = async () => {
      // question.currentView =
      question.currentView = currentTab.settingView;
      // async () => {
      qView = (await import(`./question/${currentTab.settingView}.svelte`))
        .default;
      //   console.log("called from toggleView", sections);
      // };
    },
    onChange = (sectionIndex, questionIndex, questionType) => {
      if (["select-one", "multiple", "dropdown"].includes(questionType)) {
        sections[sectionIndex].questions[questionIndex]["questionIcon"] =
          questionType === "select-one"
            ? "eva:radio-button-off-fill"
            : "carbon:checkbox";
        sections[sectionIndex].questions[questionIndex]["options"] = [
          {
            id: uuid(),
            title: "Option 1",
            value: "Option 1",
          },
        ];
      } else {
        if (sections[sectionIndex].questions[questionIndex]["questionIcon"]) {
          delete sections[sectionIndex].questions[questionIndex][
            "questionIcon"
          ];
        }
        if (sections[sectionIndex].questions[questionIndex]["options"]) {
          delete sections[sectionIndex].questions[questionIndex]["options"];
        }
      }
    };

  toggleView();
  // (async () => {
  //   qView = (await import(`./question/${question.currentView}.svelte`)).default;
  //   // console.log("called automatically");
  // })();
</script>

<div class="b:1|solid|rgb($(border)) r:5">
  <div class="flex ai:center gap:8 p:7|11">
    <!-- <div class="flex flex:col ai:center jc:center rel">
      <button class="$btn-bg:$(color-neutral) text sm icon">
        <span>
          <Icon icon="fluent:chevron-up-24-filled"></Icon>
        </span>
      </button>
      <button class="$btn-bg:$(color-neutral) text sm icon">
        <span>
          <Icon icon="fluent:chevron-down-24-filled"></Icon>
        </span>
      </button>
    </div> -->
    <div class="control-group flex:1">
      <input
        type="text"
        class="outline md"
        placeholder={question.placeholder}
        bind:value={question.value}
      />
    </div>
    <div class="rel">
      <SelectSingleSearch
        options={questionTypes}
        id={question.id}
        on:onChange={() =>
          onChange(index, questionIndex, question.questionType)}
        bind:selected={question.questionType}
        label="Type of answer"
      ></SelectSingleSearch>
    </div>
    <button class="$btn-bg:$(color-neutral) outline sm icon">
      <span class="lh:0">
        <Icon icon="mage:copy" class="f:18"></Icon>
      </span>
    </button>
    <button class="$btn-bg:$(gray-8) outline sm icon">
      <span class="lh:0">
        <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
      </span>
    </button>
    <!-- <button class="$btn-bg:$(gray-8) outline sm icon" on:click={toggleView}>
      <span class="lh:0">
        <Icon icon="carbon:settings" class="f:18"></Icon>
      </span>
    </button> -->
    <button
      class="$btn-bg:$(gray-8) outline sm icon"
      on:click={() => (collapsed = !collapsed)}
    >
      <span class="lh:0 chevron-down" class:active={!collapsed}>
        <Icon icon="fluent:chevron-down-24-filled" class="f:18"></Icon>
      </span>
    </button>
  </div>
  {#if !collapsed}
    <!-- transition:fade={{ duration: 150 }} -->
    <div class="bt:1|solid|rgb($(border))">
      <nav class="tabs-wrapper">
        {#each tabs as { title, id }}
          <a
            href="/"
            class="tab-item"
            class:active={currentTab.id === id}
            on:click|preventDefault={() => {
              currentTab = tabs.find((t) => t.id === id);
              toggleView();
            }}
          >
            {title}
          </a>
        {/each}
      </nav>
      <!-- {#if !collapsed} -->
      <div transition:fade={{ duration: 150 }}>
        <svelte:component
          this={qView}
          bind:question
          bind:index
          bind:questionIndex
          bind:sections
        />
      </div>
      <!--  -->
    </div>
  {/if}
</div>
<!-- <div class="flex ai:center rel my:8">
  <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
  <span class="px:8">
    <button
      class="$btn-bg:$(gray-4) dashed md"
      on:click={() => addQuestion(sections[index])}
    >
      <span class="lh:0 mr:8">
        <Icon icon="fluent:add-28-filled"></Icon>
      </span>
      Add question
    </button>
  </span>
  <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
</div> -->
<!-- <div class="bg:rgb($(gray-1)) mx:auto p:16 r:6 mb:16>* mb:0>*:last">
  <div class="$card-bg:$(gray-2) $card-padding:$(size)">
    <Card>
      <div
        class="flex ai:center jc:space-between rel mb:16 pb:8 bb:1|solid|rgb($(border))"
      >
        <div class="rel">
          <SelectSingleSearch
            options={questionTypes}
            id={question.id}
            on:onChange={() =>
              onChange(index, questionIndex, question.questionType)}
            bind:selected={question.questionType}
            label="Type of answer"
          ></SelectSingleSearch>
        </div>
        <button
          class="$btn-bg:$(gray-8) $btn-color:$(gray-8) outline sm icon"
          on:click={toggleView}
        >
          <span class="lh:0">
            <Icon icon="carbon:settings" class="f:18"></Icon>
          </span>
        </button>
      </div>
      <svelte:component
        this={qView}
        bind:question
        bind:index
        bind:questionIndex
        bind:sections
      />
    </Card>
  </div>
</div> -->
