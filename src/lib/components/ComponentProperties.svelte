<script>
  export let currentComponent;
  //   let styles = {};
  //   for (let key of currentComponent.editable) {
  //     styles[key] = currentComponent.styles.base[`--${key}`];
  //     console.log(styles);
  //   }
</script>

<div class="b:1|solid|rgb($(color-border))">
  <!-- properties -->
  {#each currentComponent.editable as field}
    <!-- <div>
      {#each currentComponent.editable[keys] as key} -->
    <div class="flex">
      <label>{field.title}</label>
      <input type="number" bind:value={field.value} />
      <span>{field.units}</span>
    </div>
    <!-- {/each}
    </div> -->
  {/each}
</div>
