<script>
  import Icon from "@iconify/svelte";
  import Buttons from "../subviews/Buttons.svelte";
  import Checkbox from "../components/Checkbox.svelte";
  let btnHeight = 32;
  let formLayouts = [
      { title: "horizontal", value: "form-horizontal" },
      { title: "vertical", value: "form-vertical" },
      { title: "inline", value: "form-inline" },
    ],
    layout = formLayouts[0].value,
    checkbboxValue = false;
</script>

<div class="h:100% flex">
  <div
    class="bg:rgb($(color-invert-3)) h:100% flex:0|0|16.666666666666664% max-width:16.666666666666664% overflow-y:auto p:20 w:0::scrollbar h:0::scrollbar"
  >
    <ul class="flex flex:col jc:start gap:16">
      {#each ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"] as item}
        <li>
          <div class="h:140 bg:rgb($(color-invert-2))">
            {item}
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <div
    class="h:100% flex flex:col gap:16 overflow-y:auto p:20 w:0::scrollbar h:0::scrollbar"
  >
    <a href="/home-old">OLD HOME</a>
    <Checkbox
      bind:value={checkbboxValue}
      on:change={() => console.log(checkbboxValue)}
    ></Checkbox>
    <div class="flex flex:col gap:16 b:1|solid|rgb($(color-border)) p:16">
      <div class="flex ai:center gap:16">
        {#each formLayouts as formLayout}
          <button
            class="btn btn-fill {layout === formLayout.value ? 'active' : ''}"
            on:click={() => (layout = formLayout.value)}
            >{formLayout.title}</button
          >
        {/each}
      </div>
      <form action="" class="form {layout}">
        <div class="form-control-group">
          <div class="form-label">
            <label for="">Field A, A super long label text</label>
          </div>
          <div class="form-control">
            <input type="text" class="outline" />
            <div class="form-control-message form-control-error">
              error message, A prime is a natural number greater than 1 that has
              no positive divisors other than 1 and itself.
            </div>
          </div>
        </div>
        <div class="form-control-group">
          <div class="form-label">
            <label for="">Field A, A super long label text</label>
          </div>
          <div class="form-control">
            <input type="text" class="outline" />
            <div class="form-control-message">
              error message, A prime is a natural number greater than 1 that has
              no positive divisors other than 1 and itself.
            </div>
          </div>
        </div>
        <div class="form-control-group">
          <div class="form-label">
            <label for="">Field A, A super long label text</label>
          </div>
          <div class="form-control">
            <input type="text" class="outline" />
            <div class="form-control-message">
              error message, A prime is a natural number greater than 1 that has
              no positive divisors other than 1 and itself.
            </div>
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn-text">Cancel</button>
          <button class="btn btn-fill">Submit</button>
        </div>
      </form>
    </div>
    <div class="flex ai:center flex:wrap gap:16">
      <select name="" id="" class="select outline">
        <option value="">Select an option</option>
        {#each formLayouts as formLayout}
          <option value={formLayout.value}>{formLayout.title}</option>
        {/each}
      </select>
      <select name="" id="" class="select fill input-sm">
        <option value="">Select an option</option>
        {#each formLayouts as formLayout}
          <option value={formLayout.value}>{formLayout.title}</option>
        {/each}
      </select>
      <progress value="0.5" class="progress"></progress>
      <div class="input-number-wrap">
        <div class="input-number-handler-wrap">
          <button class="input-number-handler input-number-handler-up"
            ><span
              class="input-number-handler-icon input-number-handler-icon-up"
            ></span></button
          >
          <button class="input-number-handler input-number-handler-down"
            ><span
              class="input-number-handler-icon input-number-handler-icon-down"
            ></span></button
          >
        </div>
        <input
          type="number"
          name=""
          id=""
          placeholder="outline"
          class="input-number outline"
          bind:value={btnHeight}
        />
      </div>
      <div class="input-number-wrap">
        <div class="input-number-handler-wrap">
          <button class="input-number-handler input-number-handler-up"
            ><span
              class="input-number-handler-icon input-number-handler-icon-up"
            ></span></button
          >
          <button class="input-number-handler input-number-handler-down"
            ><span
              class="input-number-handler-icon input-number-handler-icon-down"
            ></span></button
          >
        </div>
        <input
          type="number"
          name=""
          id=""
          placeholder="outline"
          class="input-number fill"
          bind:value={btnHeight}
        />
      </div>
      <input type="range" name="" value="30" id="" class="input-range" />
    </div>
    <div class="flex ai:center gap:16">
      <input type="checkbox" class="checkbox input-sm" />
      <input type="checkbox" class="checkbox" />
      <input type="checkbox" class="checkbox input-lg" />
      <input type="checkbox" class="switch" />
      <input type="checkbox" class="switch input-sm" />
      <input type="radio" name="" id="" class="radio input-sm" />
      <input type="radio" name="" id="" class="radio" />
      <input type="radio" name="" id="" class="radio input-lg" />
      <div class="flex ai:center gap:8">
        <input type="checkbox" class="checkbox" id="checkbox-1" />
        <label for="checkbox-1">Check this box</label>
      </div>
    </div>
    <Buttons></Buttons>
    <div>
      <button class="$btn-height:{btnHeight}px btn">default button</button>
      <button class="btn btn-fill">fill button</button>
      <button class="btn btn-dashed">dashed button</button>
      <button class="btn btn-text">text button</button>
      <button class="btn btn-link">link button</button>
    </div>
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-success"
        >default button</button
      >
      <button class="btn btn-fill btn-success">fill button</button>
      <button class="btn btn-dashed btn-success">dashed button</button>
      <button class="btn btn-text btn-success">text button</button>
      <button class="btn btn-link btn-success">link button</button>
    </div>
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-danger"
        >default button</button
      >
      <button class="btn btn-fill btn-danger">fill button</button>
      <button class="btn btn-dashed btn-danger">dashed button</button>
      <button class="btn btn-text btn-danger">text button</button>
      <button class="btn btn-link btn-danger">link button</button>
    </div>
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-warning"
        >default button</button
      >
      <button class="btn btn-fill btn-warning">fill button</button>
      <button class="btn btn-dashed btn-warning">dashed button</button>
      <button class="btn btn-text btn-warning">text button</button>
      <button class="btn btn-link btn-warning">link button</button>
    </div>
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-info"
        >default button</button
      >
      <button class="btn btn-fill btn-info">fill button</button>
      <button class="btn btn-dashed btn-info">dashed button</button>
      <button class="btn btn-text btn-info">text button</button>
      <button class="btn btn-link btn-info">link button</button>
    </div>
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-info btn-icon-only">
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
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-info btn-sm"
        >default button</button
      >
      <button class="btn btn-fill btn-info btn-sm">fill button</button>
      <button class="btn btn-dashed btn-info btn-sm">dashed button</button>
      <button class="btn btn-text btn-info btn-sm">text button</button>
      <button class="btn btn-link btn-info btn-sm">link button</button>
    </div>
    <div>
      <button class="$btn-height:{btnHeight}px btn btn-info btn-lg"
        >default button</button
      >
      <button class="btn btn-fill btn-info btn-lg">fill button</button>
      <button class="btn btn-dashed btn-info btn-lg">dashed button</button>
      <button class="btn btn-text btn-info btn-lg">text button</button>
      <button class="btn btn-link btn-info btn-lg">link button</button>
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
    <div class="flex ai:center flex:wrap gap:16">
      <input type="text" name="" id="" placeholder="fill" class="fill" />
      <input
        type="text"
        name=""
        id=""
        placeholder="borderless"
        class="borderless"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="underline"
        class="underline"
      />
      <textarea name="" class="outline" placeholder="textarea outline" id=""
      ></textarea>
    </div>
  </div>
</div>
