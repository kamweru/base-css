<script>
  import { fade } from "svelte/transition";
  import { Tabs } from "../components/tabs/index";
  import { onMount } from "svelte";
  export let title, pageData, params;
  let tabItems = [
      {
        title: "Sections",
        component: "UserSections",
      },
      {
        title: "Roles",
        component: "UserRoles",
      },
      {
        title: "Users",
        component: "UsersList",
      },
    ],
    currentTab = tabItems[0],
    tab;
  pageData.users = pageData.users.map((user) => ({
    ...user,
    section: pageData.sections.find((section) => section.id === user.sectionId)
      .title,
  }));
  const loadTab = async () =>
    (tab = (await import(`./components/tabs/${currentTab.component}.svelte`))
      .default);
  onMount(() => loadTab());
  // console.log(title, pageData, params);
</script>

{#if title === "Users"}
  <div class="bg:rgb($(gray-1)) r:16 p:16" transition:fade={{ duration: 150 }}>
    <h3>{title}</h3>
  </div>
  <div class="bg:rgb($(gray-1)) r:16 p:16 flex:1 scrollbar">
    <Tabs>
      {#each tabItems as tabItem}
        <Tabs.Tab
          active={currentTab === tabItem}
          on:click={() => {
            currentTab = tabItem;
            loadTab();
          }}
        >
          <span slot="label" class="capitalize">{tabItem.title}</span>
        </Tabs.Tab>
      {/each}
      <div slot="content">
        <svelte:component
          this={tab}
          pageData={pageData[currentTab.title.toLocaleLowerCase()]}
          {params}
        />
      </div>
    </Tabs>
  </div>
{/if}
