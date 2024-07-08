<script>
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import Card from "../components/card/Card.svelte";
  import Flex from "../components/flex/Flex.svelte";

  export let title, pageData;
</script>

{#if title === "Audits"}
  <div class="bg:rgb($(gray-1)) r:16 p:16" transition:fade={{ duration: 150 }}>
    <h3>{title}</h3>
  </div>
  <div class="bg:rgb($(gray-1)) r:16 p:16 flex:1">
    <Flex wrap={true} gap="sm">
      {#each Object.values(pageData) as audit}
        <div class="col-4">
          <Card>
            <div slot="content">
              <Flex justify="spaceBetween">
                <div>{audit.title}</div>
                <span class="icon font-size-lg">
                  <Icon icon="fluent:arrow-up-right-24-regular"></Icon>
                </span>
              </Flex>
              <div>{audit.description}</div>
              <a href={`/app/audits/${audit.id}`}
                ><span class="abs inset:0"></span>
              </a>
            </div>
          </Card>
        </div>
      {/each}
    </Flex>
  </div>
{/if}
