<script>
  import { appStore } from "../../AppStore";
  import "../styles/card.css";
  export let currentComponent;
</script>

<div class="flex flex:col gap:8">
  <div class={$appStore.properties[currentComponent].classes}>
    <div class="card-head">
      <div class="card-head-content">
        <div class="card-title">Card Title</div>
        <div class="card-head-extra">more</div>
      </div>
    </div>
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
    <div class="card-footer">
      <div class="card-footer-content">
        <button class="btn btn-outline"> cancel </button>
        <button class="btn btn-fill"> action </button>
      </div>
    </div>
  </div>

  <div class={$appStore.properties[currentComponent].classes}>
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
  </div>
  <div class={$appStore.properties[currentComponent].classes}>
    <div class="card-head">
      <div class="card-head-content">
        <div class="card-title">Card Title</div>
        <div class="card-head-extra">more</div>
      </div>
    </div>
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
  </div>
</div>
