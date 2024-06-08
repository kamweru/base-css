<script>
  import Icon from "@iconify/svelte";
  const buttons = {
      variants: {
        default: {
          classes: "btn",
          text: "Default Button",
        },
        fill: {
          classes: "btn-fill",
          text: "Fill Button",
        },
        dashed: {
          classes: "btn-dashed",
          text: "Dashed Button",
        },
        text: {
          classes: "btn-text",
          text: "Text Button",
        },
        link: {
          classes: "btn-link",
          text: "Link Button",
        },
      },
      sizes: {
        sm: {
          classes: "btn-sm",
          text: "Small Button",
        },
        default: {
          classes: "btn",
          text: "Default Size Button",
        },
        lg: {
          classes: "btn-lg",
          text: "Large Button",
        },
      },
      colors: {
        default: {
          classes: "btn",
          text: "Default Button",
        },
        success: {
          classes: "btn-success",
          text: "Success Button",
        },
        danger: {
          classes: "btn-danger",
          text: "Danger Button",
        },
        warning: {
          classes: "btn-warning",
          text: "Warning Button",
        },
        info: {
          classes: "btn-info",
          text: "Info Button",
        },
      },
      children: {
        default: {
          classes: "",
          text: "Text",
        },
        iconOnly: {
          classes: "btn-icon-only",
          text: "Icon Only",
        },
        iconLeft: {
          classes: "btn-icon-left",
          text: "Icon Left",
        },
        iconRight: {
          classes: "btn-icon-right",
          text: "Icon Right",
        },
      },
      disabled: {
        classes: "btn-disabled",
        text: "Disabled",
      },
    },
    controls = {
      variants: {
        title: "Variants",
        inputType: "select",
        defaultValue: "default",
      },
      sizes: {
        title: "Sizes",
        inputType: "select",
        defaultValue: "default",
      },
      colors: {
        title: "Colors",
        inputType: "select",
        defaultValue: "default",
      },
      children: {
        title: "Children",
        inputType: "text",
        defaultValue: "default",
      },
      disabled: {
        title: "Disabled",
        inputType: "switch",
        defaultValue: false,
      },
    },
    buttonProperties = {
      classes: "btn",
      childrenType: "default",
      text: "Settings",
    },
    onChange = () => {
      let buttonClassesArray = ["btn"];
      for (let controlKey in controls) {
        if (controlKey === "disabled") {
          if (controls[controlKey].defaultValue) {
            buttonClassesArray.push(buttons[controlKey].classes);
          }
          buttonProperties.disabled = controls[controlKey].defaultValue;
        } else {
          if (controlKey === "children") {
            buttonProperties.childrenType = controls[controlKey].defaultValue;
          }
          if (controls[controlKey].defaultValue !== "default") {
            buttonClassesArray.push(
              buttons[controlKey][controls[controlKey].defaultValue].classes
            );
          }
        }
      }
      buttonProperties.classes = buttonClassesArray.join(" ");
    },
    toggleSwitch = () => {
      // buttonProperties.disabled = !buttonProperties.disabled;
      // if (buttonProperties.disabled) {
      //   buttonProperties.classes += " btn-disabled";
      // }
    };
</script>

<div class="flex gap:8">
  <div class="col-7 b:1|solid|rgb($(color-border)) r:6">
    <div class="flex ai:center jc:center h:100%">
      <button
        class={buttonProperties.classes}
        disabled={buttonProperties.disabled}
      >
        {#if buttonProperties.childrenType === "iconOnly"}
          <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
        {:else if buttonProperties.childrenType === "iconLeft"}
          <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
          <span>{buttonProperties.text}</span>
        {:else if buttonProperties.childrenType === "iconRight"}
          <span>{buttonProperties.text}</span>
          <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
        {:else}
          {buttonProperties.text}
        {/if}
      </button>
    </div>
  </div>
  <div class="col-3 b:1|solid|rgb($(color-border)) r:6">
    {#each Object.keys(controls) as controlKey}
      {#if controlKey === "disabled"}
        <div class="flex gap:8 p:8 ai:center">
          <div>{controls[controlKey].title}</div>
          <input
            type="checkbox"
            class="switch"
            bind:checked={controls[controlKey].defaultValue}
            value={controls[controlKey].defaultValue}
            on:change={onChange}
          />
        </div>
      {:else}
        <div class="p:8 flex flex:col gap:8">
          <div>
            {controls[controlKey].title}
          </div>
          <select
            name=""
            id=""
            class="select input-outline"
            bind:value={controls[controlKey].defaultValue}
            on:change={onChange}
          >
            {#each Object.keys(buttons[controlKey]) as variant}
              <option value={variant}
                >{buttons[controlKey][variant].text}</option
              >
            {/each}
          </select>
        </div>
        {#if controlKey === "children" && controls[controlKey].inputType === "text"}
          <div class="p:8 flex flex:col gap:8">
            <div>Button Text</div>
            <input
              type="text"
              class="input-outline"
              bind:value={buttonProperties.text}
            />
          </div>
        {/if}
      {/if}
    {/each}
  </div>
</div>
<div>
  <button class=" btn">default button</button>
  <button class="btn btn-fill">fill button</button>
  <button class="btn btn-dashed">dashed button</button>
  <button class="btn btn-text">text button</button>
  <button class="btn btn-link">link button</button>
</div>
<div>
  <button class=" btn btn-success">default button</button>
  <button class="btn btn-fill btn-success">fill button</button>
  <button class="btn btn-dashed btn-success">dashed button</button>
  <button class="btn btn-text btn-success">text button</button>
  <button class="btn btn-link btn-success">link button</button>
</div>
<div>
  <button class=" btn btn-danger">default button</button>
  <button class="btn btn-fill btn-danger">fill button</button>
  <button class="btn btn-dashed btn-danger">dashed button</button>
  <button class="btn btn-text btn-danger">text button</button>
  <button class="btn btn-link btn-danger">link button</button>
</div>
<div>
  <button class=" btn btn-warning">default button</button>
  <button class="btn btn-fill btn-warning">fill button</button>
  <button class="btn btn-dashed btn-warning">dashed button</button>
  <button class="btn btn-text btn-warning">text button</button>
  <button class="btn btn-link btn-warning">link button</button>
</div>
<div>
  <button class=" btn btn-info">default button</button>
  <button class="btn btn-fill btn-info">fill button</button>
  <button class="btn btn-dashed btn-info">dashed button</button>
  <button class="btn btn-text btn-info">text button</button>
  <button class="btn btn-link btn-info">link button</button>
</div>
<div>
  <button class=" btn btn-info btn-sm">default button</button>
  <button class="btn btn-fill btn-info btn-sm">fill button</button>
  <button class="btn btn-dashed btn-info btn-sm">dashed button</button>
  <button class="btn btn-text btn-info btn-sm">text button</button>
  <button class="btn btn-link btn-info btn-sm">link button</button>
</div>
<div>
  <button class=" btn btn-info btn-lg">default button</button>
  <button class="btn btn-fill btn-info btn-lg">fill button</button>
  <button class="btn btn-dashed btn-info btn-lg">dashed button</button>
  <button class="btn btn-text btn-info btn-lg">text button</button>
  <button class="btn btn-link btn-info btn-lg">link button</button>
</div>
<div>
  <button class=" btn btn-info btn-icon-only">
    <Icon icon="tabler:check"></Icon>
  </button>
  <button class="btn btn-fill btn-info btn-icon-only">
    <Icon icon="tabler:check"></Icon>
  </button>
  <button class="btn btn-dashed btn-info btn-icon-only">
    <Icon icon="tabler:check"></Icon></button
  >
  <button class="btn btn-text btn-info btn-icon-only">
    <Icon icon="tabler:check"></Icon></button
  >
  <button class="btn btn-link btn-info btn-icon-only">
    <Icon icon="tabler:check"></Icon></button
  >
</div>
<div class="flex ai:center gap:16">
  <button class="btn btn-info">
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
    <span>Click me!</span>
  </button>
  <button class="btn btn-sm btn-fill btn-info">
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
    <span>Check</span>
  </button>
  <button class="btn btn-lg btn-dashed btn-info">
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
    <span>Check</span>
  </button>
</div>
