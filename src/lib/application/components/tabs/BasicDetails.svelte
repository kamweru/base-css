<script>
  import Field from "../../../components/field/Field.svelte";
  import Flex from "../../../components/flex/Flex.svelte";
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

    <div class="padding-block">
      <Flex justify="flexEnd">
        <button class="button button-fill button-primary">Save</button>
      </Flex>
    </div>
  </div>
</form>
