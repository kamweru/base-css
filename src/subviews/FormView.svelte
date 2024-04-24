<script>
  import Icon from "@iconify/svelte";
  import SelectSingleSearch from "../components/SelectSingleSearch.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import { formControls } from "../lib/repo";
  import Card from "../components/Card.svelte";
  import { uuid } from "../lib/utils";
  import Section from "../components/Section.svelte";
  import Question from "./Question.svelte";
  import Main from "../layout/Main.svelte";
  import Header from "../layout/Header.svelte";
  let tabs = [
      { title: "Questions", id: uuid() },
      { title: "Responses", id: uuid() },
      { title: "Settings", id: uuid() },
    ],
    currentTab = tabs[0],
    sections = [];
  const addSection = () => {
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
</script>

<Main>
  <Header slot="header">
    <div class="w:xs mx:auto">
      <div class="flex ai:center jc:center gap:16">
        <h3>Admin</h3>
        <ThemeToggle></ThemeToggle>
      </div>
      <div class="flex jc:center">
        <nav class="tabs-wrapper">
          {#each tabs as { title, id }}
            <a
              href="/"
              class="tab-item"
              class:active={currentTab.id === id}
              on:click|preventDefault={() =>
                (currentTab = tabs.find((t) => t.id === id))}
            >
              {title}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </Header>
  <div class="flex mt:16">
    <img
      src="https://f4.bcbits.com/img/0014753839_100.png"
      alt=""
      class="obj:cover min-w:full"
    />
  </div>
  {#if !sections.length}
    <div class="flex ai:center rel">
      <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
      <span class="px:8">
        <button class="$btn-bg:$(gray-4) dashed md" on:click={addSection}>
          <span class="lh:0 mr:8">
            <Icon icon="fluent:add-28-filled"></Icon>
          </span>
          Add section
        </button>
      </span>
      <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
    </div>
  {:else}
    {#each sections as section, index}
      <Section
        index={index + 1}
        total={sections.length}
        bind:title={section.title}
        bind:description={section.description}
      ></Section>
      {#if !section.questions.length}
        <div class="flex ai:center rel my:8">
          <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
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
          <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
        </div>
      {:else}
        {#each section.questions as question, questionIndex}
          <!-- {#if question} -->
          <Question bind:question bind:sections {index} {questionIndex}
          ></Question>
        {/each}
        <div class="flex ai:center rel my:8">
          <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
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
          <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
        </div>
      {/if}
      <div class="flex ai:center rel my:8">
        <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
        <span class="px:8">
          <button class="$btn-bg:$(gray-4) dashed md" on:click={addSection}>
            <span class="lh:0 mr:8">
              <Icon icon="fluent:add-28-filled"></Icon>
            </span>
            Add section
          </button>
        </span>
        <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
      </div>
    {/each}
  {/if}
</Main>
