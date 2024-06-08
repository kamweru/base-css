<script>
  import Button from "../components/Button.svelte";
  import Editor from "../components/Editor.svelte";
  import ThemeToggle from "../components/ThemeToggle.svelte";
  import Icon from "@iconify/svelte";
  let active = false;
</script>

<div class="flex h:100%">
  <aside>
    <nav
      class="bg:rgb($(deep)) h:100% flex flex:col jc:space-around w:88"
    ></nav>
  </aside>
  <aside>
    <div
      class="bg:rgb($(strong)) h:100% flex flex:col ai:center jc:start w:3xs"
    >
      <div class="p:16 bg:rgb($(bold)) w:full flex ai:center gap:8">
        <ThemeToggle></ThemeToggle>
        <div
          class="bg:rgb($(muted)) inline-flex ai:center h:32 rounded rel w:80"
        >
          <span
            class="abs h:36 square rounded bg:rgb($(muted-2)) b:1|solid|rgb($(neutral)) inline-flex center-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              ><path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94z"
                clip-rule="evenodd"
              /></svg
            >
          </span>
        </div>
        <div class="bg:rgb($(blue)) h:40 p:7|11 r:5 color:white">another</div>
      </div>
      <div class="p:16 w:full">
        <input
          type="text"
          class="bg:rgb($(deep)) p:7|11 r:5 w:100% color:rgb($(text-light))::placeholder"
          placeholder="Search..."
        />
        <div
          class="flex flex:col gap:8 pt:8 my:8>* bt:1|solid|rgb($(border))>*"
        >
          <div class="control-group">
            <input type="checkbox" name="" id="c-b-1" class="" />
            <label for="c-b-1" class=""> Checkbox </label>
          </div>
          <div class="control-group">
            <input type="radio" name="" id="r-1" class="" />
            <label for="r-1" class=""> Radio </label>
          </div>
          <div class="control-group">
            <input type="checkbox" id="check-3" class="switch" />
            <label for="check-3">Switch with label</label>
          </div>
          <div class="control-group">
            <input type="date" placeholder="placeholder" class="outline md" />
          </div>
          <div class="flex jc:space-between">
            <span class="f:12 lh:$(line-height-sm)">text sm</span>
            <span class="f:14 lh:$(line-height)">text md</span>
            <span class="f:16 lh:$(line-height-lg)">text lg</span>
            <span class="h:7 w:40 bg:rgb($(muted))"></span>
            <span class="h:calc(1rem/2.285) w:40 bg:rgb($(muted))"></span>
            <span class="h:calc(1rem/3.2) w:40 bg:rgb($(muted))"></span>
            <span class="h:calc(1rem/2.1) w:40 bg:rgb($(muted))"></span>
          </div>
          <div class="inline-flex ai:center lh:1">
            <div
              class="inline-block bg:rgb($(neutral)) rel h:8 r:8 w:full overflow:hidden"
              role="progressbar"
            >
              <span class="abs h:full w:20% rounded bg:rgb($(blue))"></span>
            </div>
            <div
              class="inline-block w:2em ml:8 f:14 lh:$(line-height) white-space:nowrap text-align:start vertical-align:middle word-break:normal"
            >
              200%
            </div>
          </div>
          <div class="inline-flex ai:center lh:1">
            <progress value="0.5"></progress>
            <div
              class="inline-block w:2em ml:8 f:14 lh:$(line-height) white-space:nowrap text-align:start vertical-align:middle word-break:normal"
            >
              200%
            </div>
          </div>
          <div class="control-group">
            <input type="range" name="" value="30" id="" />
          </div>
          <div class="control-group">
            <textarea name="" id="" placeholder="placeholder" class="fill"
            ></textarea>
          </div>
          <div class="control-group">
            <textarea name="" id="" placeholder="placeholder" class="outline"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="bg:rgb($(bold)) mt:auto h:64 w:full">
        <div>bottom</div>
      </div>
    </div>
  </aside>
  <main class="flex:1 overflow:auto">
    <div class="flex flex:wrap ai:start p:16 gap:16">
      <!-- <div> -->
      <button class="fill sm">button</button>
      <button class="fill md">button</button>
      <button class="fill lg">button</button>
      <button class="outline sm">button</button>
      <button class="outline md">button</button>
      <button class="outline lg">button</button>
      <button class="text sm">button</button>
      <button class="text md">button</button>
      <button class="text lg">button</button>
      <button class="fill sm icon">
        <span class="teenyicons--eye-outline"></span>
      </button>
      <button class="fill md icon">
        <span class="lh:0"><span class="teenyicons--eye-outline"></span></span>
      </button>
      <button class="fill lg icon">
        <span class="lh:0 f:20"> <Icon icon="mdi-light:home" /></span>
      </button>
      <button class="lg bg:blue-90 bg:blue-86:hover color:blue-40">
        light on light
      </button>
      <button class="lg bg:blue-50/.35 bg:blue-86:hover color:blue-86">
        light on dark
      </button>
      <button class="lg bg:blue-90 bg:blue-86:hover color:blue-40 b:blue-40">
        light outline
      </button>
      <button
        class="outline lg"
        style="    background-color: rgb(237, 244, 254); color:rgb(var(--blue))"
      >
        blue background
      </button>
      <div class="control-group">
        <input
          type="text"
          placeholder="placeholder"
          class="outline sm"
          disabled
        />
      </div>
      <div class="control-group">
        <input
          type="email"
          placeholder="email@email.com"
          class="outline md"
          value="email"
          required
        />
      </div>
      <div class="control-group">
        <input type="text" placeholder="placeholder" class="outline lg" />
      </div>
      <div class="control-group">
        <input type="text" placeholder="placeholder" class="fill sm" />
      </div>
      <div class="control-group">
        <label for="email">Your Email</label>
        <small>With additional information below the label</small>
        <input
          type="email"
          id="email"
          class="fill md"
          placeholder="email@email.com"
          required
          value="email"
        />
        <small>With additional information below the label</small>
      </div>
      <div class="control-group">
        <input type="text" placeholder="placeholder" class="fill lg" />
      </div>
      {#each ["page-bg", "subtle", "strong", "bold", "deep", "neutral", "border", "muted", "muted-1", "muted-2"] as bg}
        <div class="bg:rgb($({bg})) w:120 p:16">{bg}</div>
      {/each}
      <div class="b:1|solid|rgb($(muted-2)) flex ai:center gap:8">
        <span class="loader"></span>
        <div class="spinner"></div>
        <a href="/admin">admin</a>
        <a href="/">Home</a>
        <div class="control-group">
          <span class="combobox">
            <span class="combobox-input">
              <span class="combobox-selection">text</span>
            </span>
            <span class="combobox-arrow">
              <span class="spinner"></span>
            </span>
          </span>
          <input type="text" class="outline md" />
        </div>
      </div>
      <button class="new-btn sm">button</button>
      <button class="new-btn success md">button</button>
      <div class="b:1|solid|rgb($(muted-2)) p:8 grid grid-cols:10 gap:8">
        {#each [0.04, 0.08, 0.1, 0.15, 0.18, 0.24, 0.48, 0.64, 0.78, 0.88] as opacity}
          <div
            class="bg:rgb($(color-black)/{opacity}) w:60 h:40 flex center-content"
          >
            b/{opacity}
          </div>
        {/each}
        {#each [0.02, 0.04, 0.08, 0.12, 0.15, 0.18, 0.24, 0.4, 0.64, 0.88] as opacity}
          <div
            class="bg:rgb($(color-white)/{opacity}) w:60 h:40 flex center-content"
          >
            w/{opacity}
          </div>
        {/each}
      </div>
      <div class="control-group">
        <input
          type="text"
          class="underline md"
          placeholder="Placeholder Text"
        />
      </div>
      <div class="b:1|solid|rgb($(muted-2)) p:8 grid grid-cols:8">
        {#each ["246 246 246", "238 238 238", "232 232 232", "222 222 222", "215 215 215", "201 201 201", "144 144 144", "103 103 103"] as opacity, index}
          <div
            class="bg:rgb({opacity.replaceAll(
              ' ',
              '|'
            )}) px:8 h:40 flex center-content"
          >
            --gray-{index + 1}: {opacity};
          </div>
        {/each}
        {#each ["23 24 26", "34 34 34", "44 46 51", "56 58 64", "69 71 73", "75 77 80", "83 85 87", "97 99 101"] as opacity, index}
          <div
            class="bg:rgb({opacity.replaceAll(
              ' ',
              '|'
            )}) px:8 h:40 flex center-content"
          >
            --gray-{index + 1}: {opacity};
          </div>
        {/each}
      </div>
      <div class="b:1|solid|rgb($(muted-2)) p:8 grid grid-cols:10 gap:8">
        {#each [0.04, 0.08, 0.1, 0.12, 0.18, 0.25, 0.45, 0.65, 0.85, 0.88] as opacity}
          <div
            class="bg:rgb($(color-black)/{opacity}) w:60 h:40 flex center-content"
          >
            b/{opacity}
          </div>
        {/each}
        {#each [0.85, 0.65, 0.45, 0.25, 0.18, 0.15, 0.12, 0.08, 0.04, 0.02] as opacity}
          <div
            class="bg:rgb($(color-white)/{opacity}) w:60 h:40 flex center-content"
          >
            w/{opacity}
          </div>
        {/each}
      </div>
      <div
        class="ant-input-number ant-input-number-sm ant-input-number-outlined css-var-rkq ant-input-number-css-var"
      >
        <div class="ant-input-number-handler-wrap">
          <span
            unselectable="on"
            role="button"
            aria-label="Increase Value"
            aria-disabled="false"
            class="ant-input-number-handler ant-input-number-handler-up"
            ><span
              role="img"
              aria-label="up"
              class="anticon anticon-up ant-input-number-handler-up-inner"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="up"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"
                ></path></svg
              ></span
            ></span
          ><span
            unselectable="on"
            role="button"
            aria-label="Decrease Value"
            aria-disabled="false"
            class="ant-input-number-handler ant-input-number-handler-down"
            ><span
              role="img"
              aria-label="down"
              class="anticon anticon-down ant-input-number-handler-down-inner"
              ><svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="down"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                ></path></svg
              ></span
            ></span
          >
        </div>
        <div class="ant-input-number-input-wrap">
          <input
            autocomplete="off"
            role="spinbutton"
            aria-valuemin="1"
            aria-valuemax="100000"
            aria-valuenow="3"
            step="1"
            class="ant-input-number-input"
            value="3"
          />
        </div>
      </div>
      <div class="control-group">
        <input
          type="number"
          placeholder="placeholder"
          class="outline md"
          required
          value="33"
        />
        <div class="spin-button-wrap">
          <button class="spin-button spin-button-up">
            <span class="spin-button-icon spin-button-icon-up"></span>
          </button>
          <button class="spin-button spin-button-down">
            <span class="spin-button-icon spin-button-icon-down"></span>
          </button>
        </div>
      </div>
      <div>
        <div class="control-group">
          <span class="upload-drag-area">
            <span
              class="upload-btn"
              tabindex="0"
              role="button"
              class:active
              aria-hidden="true"
              on:dragenter|preventDefault={() => (active = true)}
              on:dragleave|preventDefault={() => (active = false)}
            >
              <input
                type="file"
                name="file-upload"
                id="file-upload"
                accept=".jpg, .jpeg, .png, .svg, .gif, .webp"
                multiple
              />
              <span class="upload-instructions">
                <span class="upload-icon f:36"></span>
                <span class="upload-text">Drop file or click to upload</span>
                <span class="upload-hint">
                  <span>allowed file types: jpg, jpeg, png, gif, svg</span>
                  <span>maximum file size: 1MB</span>
                </span>
              </span>
            </span>
          </span>
        </div>
        <div class="mt:8">
          <div
            class="upload-list-item p:8 b:1|dashed|rgb($(border)) flex ai:center f:14 gap:8 r:5"
          >
            <div class="inline-flex ai:center color:rgb($(blue))">
              <span class="loader"></span>
            </div>
            <div class="flex:auto">
              <div class="mb:4">file name</div>
              <div class="h:2 w:100% bg:rgb($(blue))"></div>
            </div>
            <div class="inline-flex ai:center">
              <span class="fluent--delete-28-regular"></span>
            </div>
          </div>
        </div>
      </div>
      <details class="w:3xs">
        <summary> summary</summary>
        <div class="content">content</div>
      </details>
      <div class="w:3xs">
        <option value=""> select this item </option>
      </div>
      <div class="rel">
        <div class="popover open">
          <div class="wrapper">popover</div>
        </div>
      </div>
      <div class="control-group">
        <input
          type="text"
          placeholder="placeholder"
          class="fill md icon-left"
        />
      </div>
      <div class="control-group">
        <input
          type="text"
          placeholder="placeholder"
          class="outline md icon-left"
        />
      </div>
      <div class="control-group">
        <input
          type="text"
          placeholder="placeholder"
          class="outline md icon-right"
        />
      </div>
      <div class="w:3xs">
        <nav class="tabs-wrapper">
          {#each ["Home", "Products", "Team", "About", "Contact"] as item}
            <a href="/" class="tab-item {item === 'Team' ? 'active' : ''}"
              >{item}</a
            >
          {/each}
        </nav>
      </div>
      <div>
        <button class="$btn-bg:$(color-info) fill md icon-left">
          <span class="icon-wrapper">
            <span class="loader"></span>
            <!-- <span class="fluent--delete-28-regular"></span> -->
          </span>
          Edit Product
        </button>
        <button class="$btn-bg:$(color-info) fill md icon-left">
          <span class="icon-wrapper">
            <span class="fluent--delete-28-regular"></span>
          </span>
          Edit Product
        </button>
      </div>
      <div class="">
        <div class="flex">
          <div class="flex:auto">
            <div class="control-group select-single-search">
              <span class="select-selection">
                label item label itemlabel itemlabel itemlabel itemlabel
                itemlabel item
              </span>
              <input type="search" class="outline md" />
              <span class="select-arrow">
                <!-- <div class="select-arrow-icon"></div> -->
                <span class="select-arrow-icon"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="w:3xs">
        <div class="control-group">
          <div class="select-multiple-wrapper outline md">
            <div class="select-selection-wrapper">
              <div class="select-selection">
                {#each ["Home", "Products", "Team", "About", "Contact", "one", "two", "three", "four", "five"] as item}
                  <div class="select-selection-item-wrapper">
                    <div class="select-selection-item">
                      <div class="select-selection-item-content">
                        {item}
                      </div>
                      <div class="select-selection-item-remove">
                        <span class="mingcute--close-line"></span>
                      </div>
                    </div>
                  </div>
                {/each}
                <div
                  class="flex:none inline-flex ai:center w:4% min-w:4% max-w:100% h:100%"
                >
                  <input
                    type="text"
                    name=""
                    id=""
                    class="appearance:none bg:transparent b:none outline:none cursor:auto h:100% w:100%"
                  />
                </div>
              </div>
            </div>
            <div class="select-arrow">
              <div class="select-arrow-icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="w:3xs">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>25</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>30</td>
                <td>Designer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="w:3xs">
        <div class="card">
          <div class="header">Header</div>
          <div class="body">Body</div>
          <div class="footer">Footer</div>
        </div>
      </div>
      <div class="w:3xs">
        <label class="cursor:pointer user-select:none flex ai:center">
          <input
            type="checkbox"
            class="appearance:none w:16 h:16 b:2|solid|blue-70 r:5 bg:transparent rel mr:10 cursor:pointer content:'':before bg:blue-70:before block:before abs:before top:1:before left:1:before translate(-50%|-50%):before scale(0):before w:10:before h:10:before r:3:before transition:all|0.375s|cubic-bezier(0.27,0.01,0.38,1.06):before translate(-50%|-50%):indeterminate:before scale(1):indeterminate:before"
            indeterminate={true}
          />
          <span> special category </span>
        </label>
      </div>
    </div>
  </main>
</div>
