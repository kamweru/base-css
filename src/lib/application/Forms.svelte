<script>
  import Icon from "@iconify/svelte";
  import Flex from "../components/flex/Flex.svelte";
  import Card from "../components/card/Card.svelte";
  import Divider from "../components/divider/Divider.svelte";

  export let title, pageData;
  let currentView = Object.keys(pageData)[0],
    viewIcons = {
      folders: "fluent:folder-24-regular",
      forms: "iconoir:view-grid",
    };
</script>

{#if title === "Forms"}
  <div class="bg:rgb($(gray-1)) r:16 p:16 flex ai:center gap:16">
    <h3>{title}</h3>
    <div>
      <div class="flex gap:4 ai:center">
        <div>View</div>
        <div class=" r:4">
          {#each Object.keys(pageData) as item}
            <button
              class="button button-success button-icon-left {item ===
              currentView
                ? 'button-fill'
                : 'button-text'}"
              on:click={() => (currentView = item)}
            >
              <span class="button-icon font-size-lg">
                <Icon icon={viewIcons[item]}></Icon>
              </span>
              <span> {item}</span>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg:rgb($(gray-1)) r:16 p:16 flex:1 flex {currentView === 'folders'
      ? 'flex-column gap:32'
      : 'flex-wrap gap:16'}"
  >
    {#each pageData[currentView] as dataItem}
      {#if currentView === "folders"}
        <div class="flex flex-column gap:8">
          <div class="col-6">
            <Flex gap="sm">
              <input
                type="text"
                placeholder="Type here"
                class="input input-underline"
                value={dataItem.title}
              />
              <button
                class="button button-fill button-success button-icon-only"
              >
                <span class="icon">
                  <Icon icon="mingcute:check-fill"></Icon>
                </span>
              </button>
            </Flex>
          </div>
          <Flex>
            {#each dataItem.forms as formId}
              {@const form = pageData.forms.find((item) => item.id === formId)}
              <div class="col-4">
                <Card>
                  <Flex slot="content" direction="column">
                    <Flex justify="spaceBetween" class="w:100%">
                      <Flex direction="column" gap="sm">
                        <h4 class="font-size-lg">{form.title}</h4>
                        <p>{form.description}</p>
                      </Flex>
                      <button class="button button-text button-icon-only">
                        <span class="icon">
                          <Icon icon="fluent:arrow-up-right-24-regular"></Icon>
                        </span>
                      </button>
                    </Flex>
                    <Divider></Divider>
                    <Flex gap="xs">
                      <div>Responses</div>
                      <div>20</div>
                    </Flex></Flex
                  >
                </Card>
              </div>
            {/each}
          </Flex>
        </div>
      {/if}
      {#if currentView === "forms"}
        {@const folder = pageData.folders.find(
          (item) => item.id === dataItem.formId
        )}
        <div class="col-4">
          <Card>
            <Flex slot="content" direction="column">
              <Flex justify="spaceBetween" class="w:100%">
                <Flex direction="column" gap="sm">
                  <h4 class="font-size-lg">{dataItem.title}</h4>
                  <p class="ellipsis" style="--line-clamp-value: 2;">
                    {dataItem.description}
                  </p>
                  <Flex gap="0">
                    <span class="rl:4 bg:rgb($(green-2)) p:0|4">Folder</span>
                    <span class="rr:4 bg:rgb($(green-3)) p:0|4"
                      >{folder.title}</span
                    >
                  </Flex>
                </Flex>
                <button class="button button-text button-icon-only">
                  <span class="icon">
                    <Icon icon="fluent:arrow-up-right-24-regular"></Icon>
                  </span>
                </button>
              </Flex>
              <Divider></Divider>
              <Flex gap="xs">
                <div>Responses</div>
                <div>20</div>
              </Flex></Flex
            >
          </Card>
        </div>
      {/if}
    {/each}
  </div>
{/if}
