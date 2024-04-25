<script>
  import { appStore } from "../lib/AppStore";
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import SelectSingleSearch from "./SelectSingleSearch.svelte";
  import { uuid } from "../lib/utils";
  import { deleteDocument } from "../lib/firebase";
  export let question;
  let collapsed = false,
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
    tabs = [
      {
        title: "Answer Options",
        settingView: "AnswerView",
        id: uuid(),
      },
      { title: "Skip Logic", settingView: "QuestionConditions", id: uuid() },
      { title: "Validation", settingView: "QuestionValidation", id: uuid() },
    ],
    currentTab = tabs[0],
    view;
  const onChange = () => {
      let questionIndex = $appStore.questions.findIndex(
        (q) => q.id === question.id
      );
      if (
        ["select-one", "multiple", "dropdown"].includes(question.questionType)
      ) {
        $appStore.questions[questionIndex]["questionIcon"] =
          question.questionType === "select-one"
            ? "eva:radio-button-off-fill"
            : "carbon:checkbox";
        $appStore.questions[questionIndex]["options"] = [
          {
            id: uuid(),
            title: "Option 1",
            value: "Option 1",
          },
        ];
      } else {
        if (
          $appStore.questions[questionIndex] &&
          $appStore.questions[questionIndex]["questionIcon"]
        ) {
          delete $appStore.questions[questionIndex]["questionIcon"];
        }
        if (
          $appStore.questions[questionIndex] &&
          $appStore.questions[questionIndex]["options"]
        ) {
          delete $appStore.questions[questionIndex]["options"];
        }
      }
      appStore.updateData({
        collectionName: "questions",
        document: $appStore.questions[questionIndex],
        callback: (data) => {
          console.log(data);
        },
      });
    },
    toggleView = async () => {
      view = (await import(`./question/${currentTab.settingView}.svelte`))
        .default;
    },
    removeQuestion = () => {
      $appStore.questions = $appStore.questions.filter(
        (q) => q.id !== question.id
      );
      deleteDocument("questions", question.id, () => {
        console.log("question deleted");
      });
    };
  toggleView();
</script>

<div class="b:1|solid|rgb($(border)) r:5">
  <div class="flex ai:center gap:8 p:7|11">
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
        on:onChange={onChange}
        bind:selected={question.questionType}
        label="Type of answer"
      ></SelectSingleSearch>
    </div>
    <button class="$btn-bg:$(color-neutral) outline sm icon">
      <span class="lh:0">
        <Icon icon="mage:copy" class="f:18"></Icon>
      </span>
    </button>
    <button class="$btn-bg:$(gray-8) outline sm icon" on:click={removeQuestion}>
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
      <div transition:fade={{ duration: 150 }}>
        <svelte:component this={view} bind:question />
      </div>
    </div>
  {/if}
</div>
