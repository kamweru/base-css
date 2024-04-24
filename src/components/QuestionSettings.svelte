<script>
  import { uuid } from "../lib/utils";
  export let sections;
  export let index;
  export let questionIndex;
  export let question;
  let tabs = [
      {
        title: "Question options",
        settingView: "QuestionOptions",
        id: uuid(),
      },
      { title: "Condition", settingView: "QuestionConditions", id: uuid() },
      { title: "Validation", settingView: "QuestionValidation", id: uuid() },
    ],
    currentTab = tabs[0],
    settingView;
  const toggleView = async () => {
    settingView = (await import(`./settings/${currentTab.settingView}.svelte`))
      .default;
    // console.log(settingView);
  };
  (async () => {
    settingView = (await import(`./settings/${currentTab.settingView}.svelte`))
      .default;
  })();
</script>

<!-- <div class="flex jc:center"> -->
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
<!-- </div> -->
<div class="p:8">
  {#each tabs as { id }}
    {#if currentTab.id === id}
      <svelte:component
        this={settingView}
        bind:question
        bind:index
        bind:questionIndex
        bind:sections
      />
    {/if}
  {/each}
</div>
