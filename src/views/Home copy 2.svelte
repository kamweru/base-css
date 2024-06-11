<script>
  import { components } from "../lib/components.config";
  import ComponentCss from "../subviews/ComponentCss.svelte";
  import ComponentHtml from "../subviews/ComponentHtml.svelte";
  import ComponentProperties from "../lib/components/ComponentProperties.svelte";
  import ComponentView from "../subviews/ComponentView.svelte";
  let currentComponent = Object.values(components)[0];
</script>

<div class="h:100% flex" style="">
  <div class="col-3 br:1|solid|rgb($(color-border))">
    <ul class="p:2|8">
      {#each Object.values(components) as component}
        <li class="flex mb:4 mb:0:last">
          <button
            class="btn btn-text flex:1"
            class:active={currentComponent.title === component.title}
            on:click={() => (currentComponent = component)}
          >
            <span class="text:left flex:1">{component.title}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex:1 flex flex:col p:20">
    <div class="flex gap:8">
      <div class="col-7">
        <div class="flex flex:col gap:16 b:1|solid|rgb($(color-border)) r:5">
          <div class="bt:1|solid|rgb($(color-border))>* b:none>*:first">
            <ComponentView bind:currentComponent></ComponentView>
            <ComponentHtml bind:currentComponent></ComponentHtml>
            <ComponentCss bind:currentComponent></ComponentCss>
          </div>
        </div>
      </div>
      <div class="col-4 b:1|solid|rgb($(color-border))">
        <ComponentProperties bind:currentComponent></ComponentProperties>
      </div>
    </div>
  </div>
</div>
