<script>
  import Field from "../../../components/field/Field.svelte";
  export let form;
  let controls = {
    title: {},
    description: {},
  };
</script>

<form action="">
  <div class="col-8">
    {#each Object.keys(controls) as controlKey}
      <Field>
        <span slot="label" class="capitalize">{controlKey}</span>
        <input
          type="text"
          slot="input"
          class="input input-outline"
          bind:value={form[controlKey]}
        />
      </Field>
    {/each}
  </div>
</form>
