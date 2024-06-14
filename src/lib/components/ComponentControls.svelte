<script>
  import { controls, componentTypes, styles } from "../components.config";
  import { appStore } from "../AppStore";
  export let currentComponent;
  const onChange = () => {
    let classesArray = [styles[currentComponent].baseClass.default];
    for (let controlKey in controls[currentComponent]) {
      if (controlKey === "types") {
        if (controls[currentComponent][controlKey].defaultValue !== "default") {
          $appStore.properties[currentComponent].componentType = controls[
            currentComponent
          ][controlKey].defaultValue
            .split(" ")
            .join("-");
        } else {
          $appStore.properties[currentComponent].componentType =
            controls[currentComponent][controlKey].defaultValue;
        }
      }
      if (controlKey === "states") {
        for (let option of controls[currentComponent][controlKey].options) {
          if (option.value) {
            classesArray.push(
              styles[currentComponent][controlKey][option.title]
            );
          }
        }
      } else {
        if (
          controls[currentComponent][controlKey].defaultValue &&
          styles[currentComponent][controlKey][
            controls[currentComponent][controlKey].defaultValue
          ] !== ""
        ) {
          classesArray.push(
            styles[currentComponent][controlKey][
              controls[currentComponent][controlKey].defaultValue
            ]
          );
        }
      }
    }
    $appStore.properties[currentComponent].classes = classesArray.join(" ");
    // console.log($appStore.properties[currentComponent].classes);
  };
</script>

<div class="flex flex:col">
  <!-- <div class="flex flex:col gap:4 p:8">
    <div class="f:semibold f:16 lh:$(line-height) capitalize">
      {componentTypes[currentComponent].title}
    </div>
    <select
      class="select input-outline"
      bind:value={$appStore.properties[currentComponent].componentType}
    >
      {#each componentTypes[currentComponent].options as option}
        <option value={option.value}>{option.title}</option>
      {/each}
    </select>
  </div> -->
  {#each Object.keys(controls[currentComponent]) as controlKey}
    <div class="flex flex:col gap:4 p:8">
      <div class="f:semibold f:16 lh:$(line-height) capitalize">
        {controls[currentComponent][controlKey].title}
      </div>
      {#if controls[currentComponent][controlKey].controlType === "select"}
        <select
          name=""
          id=""
          class="select input-outline"
          bind:value={controls[currentComponent][controlKey].defaultValue}
          on:change={onChange}
        >
          {#each controls[currentComponent][controlKey].options as option}
            <option value={option.value}>{option.title}</option>
          {/each}
        </select>
      {:else}
        {#each controls[currentComponent][controlKey].options as option}
          <div class="flex ai:center gap:8">
            <input
              type="checkbox"
              class="input switch"
              value={option.value}
              bind:checked={option.value}
              on:change={onChange}
            />
            <div class="capitalize">{option.title}</div>
          </div>
        {/each}
      {/if}
      <!-- <div>
        {controls[currentComponent][controlKey].controlType}
      </div> -->
      <!-- <label>{controls[currentComponent][controlKey].title}</label>
      <input
        type="number"
        bind:value={controls[currentComponent][controlKey].defaultValue}
      /> -->
      <!-- <span>{field.units}</span> -->
    </div>
  {/each}
</div>
