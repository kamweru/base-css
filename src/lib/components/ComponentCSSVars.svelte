<script>
  import { cssUnits } from "../components.config";
  export let currentComponent;
  const onChange = (cssVar) => {
    let cssVars = Object.keys(currentComponent).map((c) => {
      if (c === cssVar.cssVar) {
        currentComponent[c].value = cssVar.value;
        currentComponent[c].units = cssVar.units;
      }
      //   console.log(currentComponent[c].cssVar, c, cssVar.cssVar);
      return c;
    });
    // currentComponent["cssVars"] = cssVars;
    // currentComponent = cssVars;
    console.log(cssVars, cssVar, currentComponent);
  };
</script>

<div class="flex flex:col gap:8 w:3xs">
  <!-- {JSON.stringify(currentComponent.cssVars, null, 2)} -->
  {#each Object.keys(currentComponent) as componentKeys}
    <!-- {#each currentComponent.cssVars as cssVar} -->
    <div class="flex flex:col gap:8">
      <div class="capitalize">{currentComponent[componentKeys].title}</div>
      <div class="flex ai:center gap:8">
        <input
          type="text"
          bind:value={currentComponent[componentKeys].value}
          class="input"
          on:change={() => onChange(currentComponent[componentKeys])}
        />
        <select
          name=""
          id=""
          class="select"
          bind:value={currentComponent[componentKeys].units}
          on:change={() => onChange(currentComponent[componentKeys])}
        >
          {#each cssUnits as unit}
            <option value={unit.value}>{unit.title}</option>
          {/each}
        </select>
      </div>
    </div>
    <!-- {/each} -->
  {/each}
</div>
