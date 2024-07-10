<script>
  import Icon from "@iconify/svelte";
  import Flex from "../../../components/flex/Flex.svelte";
  import { Table } from "../../../components/table/index";
  export let pageData, params;
  let columns = [
    {
      title: "Section",
      key: "title",
    },
  ];
</script>

<div class="padding-block-lg">
  <Table>
    <Table.Tr slot="thead">
      {#each columns as column}
        <Table.Th bind:columns bind:data={pageData} bind:column>
          {column.title}
        </Table.Th>
      {/each}
      <Table.Th>actions</Table.Th>
    </Table.Tr>
    {#each pageData as item}
      <Table.Tr>
        {#each columns as column}
          <Table.Td>
            {item[column.key]}
          </Table.Td>
          <Table.Td>
            <Flex>
              <button
                class="button button-outline button-success button-icon-only"
              >
                <span class="button-icon">
                  <span class="icon font-size-xl">
                    <Icon icon="tabler:edit"></Icon>
                  </span>
                </span>
              </button>
              <button
                class="button button-outline button-danger button-icon-only"
              >
                <span class="button-icon">
                  <span class="icon font-size-xl">
                    <Icon icon="mingcute:delete-2-line"></Icon>
                  </span>
                </span>
              </button>
            </Flex>
          </Table.Td>
        {/each}
      </Table.Tr>
    {/each}
  </Table>
  <!-- <Table {columns} data={pageData}>
    <Flex slot="actions">
      <button class="button button-outline button-success button-icon-only">
        <span class="button-icon">
          <span class="icon font-size-xl">
            <Icon icon="tabler:edit"></Icon>
          </span>
        </span>
      </button>
      <button class="button button-outline button-danger button-icon-only">
        <span class="button-icon">
          <span class="icon font-size-xl">
            <Icon icon="mingcute:delete-2-line"></Icon>
          </span>
        </span>
      </button>
    </Flex>
  </Table> -->
</div>
