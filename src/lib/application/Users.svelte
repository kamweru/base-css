<script>
  import { fade } from "svelte/transition";
  import { Tabs } from "../components/tabs";
  export let title, pageData, params;
  let currentTab = Object.keys(pageData)[0];
  console.log(title, pageData, params);
</script>

<div class="bg:rgb($(gray-1)) r:16 p:16" transition:fade={{ duration: 150 }}>
  <h3>{title}</h3>
</div>
<div class="bg:rgb($(gray-1)) r:16 p:16 flex:1 overflow-y:scroll">
  <Tabs>
    {#each Object.keys(pageData) as key}
      <Tabs.Tab active={currentTab === key}>
        <span slot="label" class="capitalize">{key}</span>
      </Tabs.Tab>
    {/each}
  </Tabs>
</div>
