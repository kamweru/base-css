<script>
  import router from "page";
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
  import { appStore } from "../lib/AppStore";
  import Popover from "../components/Popover.svelte";
  export let params;
  export let viewPath;
  let tabs = [
      { title: "Questions", subview: "FormQuestions", id: uuid() },
      { title: "Responses", subview: "FormResponses", id: uuid() },
      { title: "Settings", subview: "FormSettings", id: uuid() },
    ],
    currentTab = tabs[0],
    view,
    popoverOpen = false,
    form,
    popoverActions = [
      {
        title: "Move to folder",
        action: () => {},
        icon: "iconoir:folder",
      },
      {
        title: "Make a copy",
        action: () => {},
        icon: "mage:copy",
      },
      {
        title: "Delete form",
        action: () => {},
        icon: "fluent:delete-28-regular",
      },
    ];

  const dispatch = createEventDispatcher(),
    changeView = async () => {
      view = (await import(`./FormView/${currentTab.subview}.svelte`)).default;
    },
    onChange = () =>
      appStore.updateData({
        collectionName: "forms",
        document: form,
        callback: (data) => {
          console.log(data);
        },
      });
  changeView();
  (() => {
    form = $appStore.forms.find((f) => f.id === params.id);
  })();
</script>

<Main>
  <Header slot="header">
    <div class="w:xs mx:auto">
      <div class="flex ai:center jc:space-between gap:16">
        <div class="flex ai:center gap:16">
          <button
            class="link md"
            on:click={() => {
              viewPath = "FoldersView";
              dispatch("changeView");
              router.redirect("/admin");
            }}
          >
            <span class="lh:0 mr:8">
              <Icon icon="mynaui:arrow-long-left" class="f:18"></Icon>
            </span>
            All forms
          </button>
          <div class="control-group">
            <input
              type="text"
              name=""
              id=""
              class="underline md"
              bind:value={form.title}
              on:change={onChange}
            />
          </div>
        </div>
        <div class="flex ai:center gap:16">
          <a href="/form/{form.id}" target="_blank">
            <span class="lh:0">
              <Icon icon="mi:eye" class="f:18 color:rgb($(color-primary))"
              ></Icon>
            </span>
          </a>
          <div>
            <button class="text md icon" on:click={() => (popoverOpen = true)}>
              <span class="lh:0">
                <Icon icon="solar:menu-dots-bold" class="f:18"></Icon>
              </span>
            </button>
            <Popover bind:open={popoverOpen}>
              <div class="flex flex:col">
                {#each popoverActions as { title, action, icon }}
                  <button class="text md">
                    <span
                      class="flex ai:center gap:4 w:100% pointer-events:none"
                    >
                      <span class="lh:0 mr:8">
                        <Icon {icon} class="f:18"></Icon>
                      </span>
                      {title}
                    </span>
                  </button>
                {/each}
              </div>
            </Popover>
          </div>
          <button class="text md icon">
            <span class="lh:0">
              <Icon icon="humbleicons:logout" class="f:18"></Icon>
            </span>
          </button>
          <ThemeToggle></ThemeToggle>
        </div>
        <!-- </div>
        <h3>Edit Form</h3> -->
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
  <svelte:component this={view} {params} />
</Main>
