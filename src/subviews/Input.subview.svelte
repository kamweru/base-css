<script>
  import { capitalizeFirstLetter } from "../lib/utils";
  import { appStore } from "../lib/AppStore";
  export let currentComponent;
  let styleVariables = "",
    previewBox;
  const styles = {
      baseClass: "input",
      variants: {
        default: "input-outline",
        outline: "input-outline",
        fill: "input-fill",
        borderless: "input-borderless",
        underline: "input-underline",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: { disabled: "input-disabled", invalid: "input-invalid" },
    },
    controls = {
      ...Object.entries(["variants", "sizes"]).reduce(
        (acc, [key, value]) => (
          (acc[value] = {
            title: capitalizeFirstLetter(value),
            defaultValue: "default",
            controlType: "select",
            options: Object.keys(styles[value]).map((key) => ({
              title: key,
              value: key,
            })),
          }),
          acc
        ),
        {}
      ),
      ...Object.keys(styles.states).reduce(
        (acc, key) => (
          (acc[key] = {
            title: capitalizeFirstLetter(key),
            defaultValue: false,
            controlType: "switch",
          }),
          acc
        ),
        {}
      ),
    },
    inputProperties = {
      classes: styles.baseClass,
      placeholder: "placeholder",
      disabled: false,
      invalid: false,
    },
    onChange = (controlKey) => {
      console.log(controls[controlKey]);

      inputProperties[controlKey] = controls[controlKey].defaultValue;

      inputProperties.classes = styles.baseClass;
      for (let controlKey in controls) {
        if (Object.keys(styles.states).includes(controlKey)) {
          inputProperties[controlKey] = controls[controlKey].defaultValue;
          if (controls[controlKey].defaultValue) {
            inputProperties.classes += ` ${styles.states[controlKey]}`;
          }
        } else {
          inputProperties.classes += ` ${styles[controlKey][controls[controlKey].defaultValue]}`;
        }
      }
    };
  // $: if (currentComponent) {
  //   styleVariables = Object.values(currentComponent)
  //     .map((c) => `${c.cssVar}: ${c.value}${c.units};`)
  //     .join(" ");
  //   console.log(styleVariables);
  // }
  // console.log(
  //   currentComponent.cssVars
  //     .map((c) => `${c.cssVar}: ${c.value}${c.units}`)
  //     .join(",\n")
  // );
</script>

<div class="flex gap:8">
  <div class="col-7 b:1|solid|rgb($(color-border)) diagonal r:6">
    <div class="flex ai:center jc:center h:100%">
      <div
        style={Object.values($appStore[currentComponent])
          .map((c) => `${c.cssVar}: ${c.value}${c.units};`)
          .join(" ")}
        class="bg:rgb($(color-bg))"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder={inputProperties.placeholder}
          class={inputProperties.classes}
          disabled={inputProperties.disabled}
        />
      </div>
    </div>
  </div>
  <div class="col-4 b:1|solid|rgb($(color-border)) r:6">
    {#each Object.keys(controls) as controlKey}
      <div class="p:8 flex flex:col gap:8">
        {#if controls[controlKey].controlType === "switch"}
          <div class="flex gap:8">
            <input
              type="checkbox"
              class="input switch"
              bind:checked={controls[controlKey].defaultValue}
              value={controls[controlKey].defaultValue}
              on:change={() => onChange(controlKey)}
            />
            <div>{controls[controlKey].title}</div>
          </div>
        {:else}
          <div>{controls[controlKey].title}</div>
          <select
            name=""
            id=""
            class="select input-outline"
            bind:value={controls[controlKey].defaultValue}
            on:change={() => onChange(controlKey)}
          >
            {#each controls[controlKey].options as option}
              <option value={option.value}>{option.title}</option>
            {/each}
          </select>
        {/if}
      </div>
    {/each}
  </div>
</div>
<div>
  <h3>Input</h3>
</div>
<div class="flex gap:8">
  <div class="col-7 b:1|solid|rgb($(color-border)) r:6">
    <div class="flex b:1|solid|rgb($(color-border))">
      {#each ["Preview", "HTML", "CSS"] as item}
        <div class="bg:red p:4|8">
          <span class="rel">{item}</span>
        </div>
      {/each}
    </div>
  </div>
  <div class="col-4">
    <div class="flex b:1|solid|rgb($(color-border))">
      {#each ["Controls", "CSS Variables"] as item}
        <div class="bg:red p:4|8">
          <span class="rel">{item}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="flex ai:center flex:wrap gap:16">
  <input
    type="text"
    name=""
    id=""
    placeholder="fill"
    class="input input-fill"
  />
  <input
    type="text"
    name=""
    id=""
    placeholder="borderless"
    class="input input-borderless"
  />
  <input
    type="text"
    name=""
    id=""
    placeholder="underline"
    class="input input-underline"
  />
  <textarea
    name=""
    class="input textarea input-outline"
    placeholder="textarea outline"
    id=""
  ></textarea>
</div>
