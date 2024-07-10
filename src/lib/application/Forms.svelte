<script>
  import Icon from "@iconify/svelte";
  import Flex from "../components/flex/Flex.svelte";
  import Card from "../components/card/Card.svelte";
  import Divider from "../components/divider/Divider.svelte";
  import FormQuestions from "./components/FormTabs.svelte";
  import router from "page";
  import { fade } from "svelte/transition";
  export let title, pageData, params;
</script>

{#if title === "Forms"}
  <div
    class="bg:rgb($(gray-1)) r:16 p:16 flex ai:center gap:16"
    transition:fade={{ duration: 150 }}
  >
    <h3>{title}</h3>
  </div>
  <div
    class="bg:rgb($(gray-1)) r:16 p:16 flex:1 flex flex-column gap:32 scrollbar"
  >
    {#if params && params.folderId && params.formId && pageData[params.folderId] && pageData[params.folderId].forms[params.formId]}
      <FormQuestions form={pageData[params.folderId].forms[params.formId]} />
    {:else}
      {#each Object.values(pageData) as folder}
        <div class="flex flex-column gap:16">
          <div class="w:1/3">
            <Flex gap="sm">
              <input
                type="text"
                placeholder="Type here"
                class="input input-underline"
                value={folder.title}
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
          <div class="flex gap:16">
            {#each Object.values(folder.forms) as form}
              <div class="col-4">
                <Card>
                  <Flex slot="content" direction="column">
                    <Flex justify="spaceBetween" class="w:100%">
                      <Flex direction="column" gap="sm">
                        <h4 class="font-size-lg">{form.title}</h4>
                        <p>{form.description}</p>
                      </Flex>
                      <button
                        class="button button-text button-icon-only"
                        on:click={() =>
                          router.redirect(`/app/forms/${folder.id}/${form.id}`)}
                      >
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
          </div>
        </div>
        <!-- {#if currentView === "forms"}
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
      {/if} -->
      {/each}
    {/if}
  </div>
{/if}
