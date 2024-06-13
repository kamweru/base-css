<script>
  import { cssUnits } from "../components.config";
  import { appStore } from "../AppStore";
  import { onMount } from "svelte";
  import Button from "../../components/Button.svelte";
  export let currentComponent;
  let testDiv,
    unitPixels = 16;
  const createCalc = (defaultObj, cssVarObj) => {
    return CSS[defaultObj.units](defaultObj.value)
      .mul(CSS[cssVarObj.units](cssVarObj.value).div(CSS.px(unitPixels)))
      .toString();
  };
  let shadowRootOne;
  const sheet = new CSSStyleSheet();
  const onChange = (cssVar) => {
    // $appStore[currentComponent][cssVar.cssVar].value = createCalc(
    //   $appStore[currentComponent]["--default-size"],
    //   cssVar
    // );
    // let cssVars = Object.keys(currentComponent).map((c) => {
    //   if (c === cssVar.cssVar) {
    //     currentComponent[c].value = cssVar.value;
    //     currentComponent[c].units = cssVar.units;
    //   }
    //   //   console.log(currentComponent[c].cssVar, c, cssVar.cssVar);
    //   return c;
    // });
    // // currentComponent["cssVars"] = cssVars;
    // // currentComponent = cssVars;
    // console.log($appStore[currentComponent]);
    // let currentRules = [...sheet.cssRules].find(
    //   (r) => r.selectorText === ":root"
    // );
    // for (let item of currentRules.style) {
    //   // console.log(item, currentRules.style.getPropertyValue(item));
    //   // const newBorder = `1px solid red`;
    //   currentRules.style.setProperty(
    //     item,
    //     createCalc($appStore[currentComponent]["--default-size"], cssVar)
    //   );
    // }
    // shadowRootOne.adoptedStyleSheets = [sheet];
    // console.log(currentRules.cssText);
  };
  // console.log($appStore);
  // Create an empty "constructed" stylesheet
  // Apply a rule to the sheet
  sheet.replaceSync(
    ".highlight  { color: rgb(var(--color-success)); } :root{ --input-height: calc(var(--default-size) * 3); --input-height-sm: calc(var(--default-size) * 1.5); --input-height-lg: calc(var(--default-size) * 2.5); --input-padding: calc(var(--default-size) * 0.25) calc(var(--default-size) * 0.6875); --input-padding-sm: 0 calc(var(--default-size) * 0.4375); --input-padding-lg: calc(var(--default-size) * 0.4375) calc(var(--default-size) * 0.6875); --input-border-radius: calc(var(--default-size) * 0.375); --input-border-radius-sm: calc(var(--default-size) * 0.25); --input-border-radius-lg: calc(var(--default-size) * 0.5);} .input{border-color: rgb(var(--color-border)); border-width: var(--border-width); border-style: var(--border-style); height: var(--input-height);}"
  );
  // Create an element in the document and then create a shadow root:
  onMount(() => {
    shadowRootOne = testDiv.attachShadow({ mode: "open" });
    // console.log(testDiv.cloneNode(true));
    shadowRootOne.append(testDiv.cloneNode(true)); // (*)
    const paragraphElement = document.createElement("p");
    paragraphElement.setAttribute("class", "highlight");
    paragraphElement.innerText = "This is a Shadow DOM paragraph";
    shadowRootOne.appendChild(paragraphElement);
    // shadowRootOne.innerHTML = Button;
    shadowRootOne.adoptedStyleSheets = [sheet];
    sheet.insertRule(".highlight { background-color: blue; }");
  });
</script>

<div class="flex flex:col gap:8 w:3xs">
  <div bind:this={testDiv}>
    <p class="highlight">This is a test</p>
    <Button></Button>
    <input type="text" name="" id="" class="input" />
  </div>
  <!-- {JSON.stringify(currentComponent.cssVars, null, 2)} -->
  {#each Object.keys($appStore[currentComponent]) as componentKeys}
    <!-- {#each currentComponent.cssVars as cssVar} -->
    <div class="flex flex:col gap:8">
      <div class="capitalize">
        {$appStore[currentComponent][componentKeys].title}
      </div>
      <div class="flex ai:center gap:8">
        <input
          type="text"
          bind:value={$appStore[currentComponent][componentKeys].value}
          class="input"
          on:change={() => onChange($appStore[currentComponent][componentKeys])}
        />
        <select
          name=""
          id=""
          class="select"
          bind:value={$appStore[currentComponent][componentKeys].units}
          on:change={() => onChange($appStore[currentComponent][componentKeys])}
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
