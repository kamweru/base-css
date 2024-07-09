<script>
  import Icon from "@iconify/svelte";
  import Flex from "../../../components/flex/Flex.svelte";
  import Table from "../../../components/table/Table.svelte";
  export let pageData, params;
  let columns = [
    {
      title: "Role",
      key: "title",
    },
  ];
</script>

<div class="padding-block-lg">
  <Table {columns} data={pageData}>
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
  </Table>
</div>
