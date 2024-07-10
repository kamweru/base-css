<script>
  import Field from "../../../components/field/Field.svelte";
  import Flex from "../../../components/flex/Flex.svelte";

  let controls = {
    sheetName: {
      title: "Sheet Name",
      inputType: "text",
      key: "sheetName",
      placeholder: "Sheet Name",
    },
    sheetId: {
      title: "Sheet Id",
      inputType: "text",
      key: "sheetId",
      placeholder: "Sheet Id",
    },
  };
</script>

<form action="">
  <Flex direction="column">
    <h3>Settings</h3>
    <div class="col-8">
      {#each Object.keys(controls) as controlKey}
        <Field>
          <span slot="label" class="capitalize">{controlKey}</span>
          <input
            type="text"
            slot="input"
            class="input input-outline"
            bind:value={controlKey[controlKey]}
            placeholder={controls[controlKey].placeholder}
          />
        </Field>
      {/each}
      <div class="padding-block">
        <Flex justify="flexEnd">
          <button class="button button-fill button-primary">Save</button>
        </Flex>
      </div>
    </div>
  </Flex>
</form>
