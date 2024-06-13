<script>
  import { rootStyles } from "../components.config";
  export let currentComponent;
  let unitPixels = 16,
    calcItems = [
      {
        title: "unit size",
        value: 1,
        units: "rem",
        cssVar: "--default-size",
      },
      {
        title: "input height",
        value: 32,
        units: "px",
        cssVar: "--input-height",
      },
    ];
  const createCalc = (defaultObj, cssVarObj) => {
    return CSS[defaultObj.units](defaultObj.value).mul(
      CSS[cssVarObj.units](cssVarObj.value).div(CSS.px(unitPixels))
    );
  };
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(rootStyles[currentComponent]);
  let currentRules = [...sheet.cssRules].find(
    (r) => r.selectorText === ":root"
  );
  for (let item of currentRules.style) {
    // console.log(item, currentRules.style.getPropertyValue(item));
    // const newBorder = `1px solid red`;
    // currentRules.style.setProperty(
    //   item,
    //   createCalc($appStore[currentComponent]["--default-size"], cssVar)
    // );
    console.log(item, currentRules.style.getPropertyValue(item));
  }
  console.log(createCalc(calcItems[0], calcItems[1]));
</script>

<div class="flex flex:col gap:8">
  {sheet.cssRules[0].style.cssText}
  <!-- {JSON.stringify(sheet.cssRules[0].style.cssText.split(",")[0], null, 2)} css vars -->
  <!-- {#each Object.keys($appStore[currentComponent]) as componentKeys}
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
  {/each} -->
</div>
