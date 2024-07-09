<script>
  import { onMount } from "svelte";
  import { Tabs } from "../../components/tabs/index";
  export let form;
  let tabItems = [
      { title: "Basic Details", component: "BasicDetails" },
      { title: "Questions", component: "Questions" },
      { title: "Responses", component: "Responses" },
      { title: "Settings", component: "Settings" },
    ],
    currentTab = tabItems[0],
    tab;
  const loadTab = async () =>
    (tab = (await import(`./tabs/${currentTab.component}.svelte`)).default);
  onMount(() => loadTab());
</script>

<Tabs>
  {#each tabItems as tabItem}
    <Tabs.Tab
      active={currentTab === tabItem}
      on:click={() => {
        currentTab = tabItem;
        loadTab();
      }}
    >
      <span slot="label">{tabItem.title}</span>
    </Tabs.Tab>
  {/each}
  <div slot="content">
    <svelte:component this={tab} {form} />
  </div>
</Tabs>
