<script>
  import { appStore } from "../AppStore";
  import { cssUnits } from "../components.config";
  export let currentComponent;
  // console.log($appStore.rootStyles[currentComponent]);
</script>

<div class="flex flex:col gap:8">
  {#each Object.keys($appStore.rootStyles[currentComponent]) as componentKeys}
    <div class="flex flex:col gap:4 p:8">
      <div class="f:semibold f:16 lh:$(line-height) capitalize">
        {$appStore.rootStyles[currentComponent][componentKeys].title}
      </div>
      <div class="flex ai:center gap:8">
        <input
          type="text"
          bind:value={$appStore.rootStyles[currentComponent][componentKeys]
            .value}
          class="input"
        />
        <select
          name=""
          id=""
          class="select"
          bind:value={$appStore.rootStyles[currentComponent][componentKeys]
            .units}
        >
          {#each cssUnits as unit}
            <option value={unit.value}>{unit.title}</option>
          {/each}
        </select>
      </div>
    </div>
  {/each}
</div>
