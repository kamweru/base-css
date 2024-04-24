<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";
  import SelectSingleSearch from "../components/SelectSingleSearch.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import { formControls } from "../lib/repo";
  import Card from "../components/Card.svelte";
  import { uuid } from "../lib/utils";
  import Section from "../components/Section.svelte";
  import Question from "../components/Question.svelte";
  import Main from "../layout/Main.svelte";
  import Header from "../layout/Header.svelte";
  export let params;
  export let viewPath;
  let tabs = [
      { title: "Questions", subview: "FormQuestions", id: uuid() },
      { title: "Responses", subview: "FormResponses", id: uuid() },
      { title: "Settings", subview: "FormSettings", id: uuid() },
    ],
    currentTab = tabs[0],
    sections = [],
    view;
  const dispatch = createEventDispatcher(),
    addSection = () => {
      sections = [
        ...sections,
        {
          title: "untitled section",
          description: "",
          id: uuid(),
          questions: [],
        },
      ];
    },
    addQuestion = (section) => {
      sections[sections.findIndex((s) => s.id === section.id)].questions = [
        ...sections[sections.findIndex((s) => s.id === section.id)].questions,
        {
          id: uuid(),
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
    };
  let collapsed = false;
  const changeView = async () => {
    view = (await import(`./FormView/${currentTab.subview}.svelte`)).default;
  };
  changeView();
</script>

<Main>
  <Header slot="header">
    <div class="w:xs mx:auto">
      <div class="flex ai:center jc:space-between gap:16">
        <!-- <div> -->
        <button
          class="link md"
          on:click={() => {
            viewPath = "FoldersView";
            dispatch("changeView");
          }}
        >
          <span class="lh:0 mr:8">
            <Icon icon="mynaui:arrow-long-left" class="f:18"></Icon>
          </span>
          All forms
        </button>
        <!-- </div> -->
        <h3>Edit Form</h3>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  </Header>
  <div class="flex jc:center">
    <nav class="tabs-wrapper">
      {#each tabs as { title, id }}
        <a
          href="/"
          class="tab-item"
          class:active={currentTab.id === id}
          on:click|preventDefault={() => {
            currentTab = tabs.find((t) => t.id === id);
            changeView();
          }}
        >
          {title}
        </a>
      {/each}
    </nav>
  </div>
  <svelte:component this={view} />
</Main>
