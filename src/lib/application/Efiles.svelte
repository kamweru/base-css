<script>
  import Icon from "@iconify/svelte";
  import Card from "../components/card/Card.svelte";
  import Flex from "../components/flex/Flex.svelte";
  export let title, pageData;
</script>

{#if title === "E-Files"}
  <div class="bg:rgb($(gray-1)) r:16 p:16">
    <h3>{title}</h3>
  </div>
  <div class="bg:rgb($(gray-1)) r:16 p:16 flex:1">
    <Flex wrap={true} gap="sm">
      {#each Object.values(pageData) as folder}
        <div class="col-4">
          <Card>
            <div slot="content">
              <Flex justify="spaceBetween">
                <div>{folder.title}</div>
                <span class="icon font-size-lg">
                  <Icon icon="fluent:arrow-up-right-24-regular"></Icon>
                </span>
              </Flex>
              <div>Files: {Object.keys(folder.files).length}</div>
              <a href={`/app/efiles/${folder.id}`}
                ><span class="abs inset:0"></span>
              </a>
            </div>
          </Card>
        </div>
      {/each}
    </Flex>
  </div>
{/if}
