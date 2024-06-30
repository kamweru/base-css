<script>
  import { sampleData } from "../components.config";
  import Table from "../components/table/Table.svelte";
  import Field from "../components/field/Field.svelte";
  import Flex from "../components/flex/Flex.svelte";
  let tableKey = "sample table 1";
  const clearForm = () => {
      for (const key in sampleData.table[tableKey].controls) {
        sampleData.table[tableKey].controls[key].value =
          sampleData.table[tableKey].controls[key].defaultValue;
      }
    },
    submitForm = () => {
      let data = {};
      for (const control of sampleData.table[tableKey].controls) {
        data[control.key] = control.value;
      }
      sampleData.table[tableKey].data = [
        ...sampleData.table[tableKey].data,
        data,
      ];
      clearForm();
    },
    editRow = (row) => {
      for (const key in sampleData.table[tableKey].controls) {
        sampleData.table[tableKey].controls[key].value =
          row[sampleData.table[tableKey].controls[key]["key"]];
      }
    };
</script>

<div class="bg:blue-80 col-20 mx:auto text:center mt:32">
  <Table
    columns={sampleData.table[tableKey].columns}
    data={sampleData.table[tableKey].data}
  >
    <Flex slot="actions" let:row>
      <button
        class="button button-sm button-fill button-success"
        on:click={() => editRow(row)}>Edit</button
      >
      <button class="button button-sm button-fill button-danger">delete</button>
    </Flex>
  </Table>
</div>

<div class="bg:blue-80 col-20 mx:auto text:center mt:32">
  <form action="" on:submit|preventDefault class="flex flex-gap-sm">
    {#each sampleData.table[tableKey].controls as controlItem}
      <Field id={controlItem.id}>
        <span slot="label">{controlItem.label}</span>
        <input
          slot="input"
          type="text"
          class="input input-sm"
          placeholder={controlItem.placeholder}
          bind:value={controlItem.value}
        />
      </Field>
    {/each}

    <Flex justify="flexEnd">
      <button class="button button-outline button-sm" on:click={clearForm}
        >Clear</button
      >
      <button class="button button-fill button-sm" on:click={submitForm}
        >Submit</button
      >
    </Flex>
  </form>
</div>
