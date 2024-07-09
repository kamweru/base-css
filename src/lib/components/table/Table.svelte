<script>
  export let cssVariables = "";
  export let columns = [];
  export let data = [];
</script>

<div class="table-wrapper" style={cssVariables}>
  <table>
    <thead>
      <tr>
        {#each columns as column}
          <th>
            <div class="flex ai:center">
              <span class="flex:1">{column.title}</span>
              <button class="button button-icon-only button-sm column-sorter">
                <span class="column-sorter-icon column-sorter-up active"></span>
                <span class="column-sorter-icon column-sorter-down"></span>
              </button>
            </div>
          </th>
        {/each}
        {#if $$slots.actions}
          <td> </td>
        {/if}
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          {#each columns as column}
            <td>{row[column.key]}</td>
          {/each}
          {#if $$slots.actions}
            <td>
              <slot name="actions" {row} />
            </td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
