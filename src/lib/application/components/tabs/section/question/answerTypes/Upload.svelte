<script>
  import Checkbox from "../../../../../../components/checkbox/Checkbox.svelte";
  import Field from "../../../../../../components/field/Field.svelte";
  import Flex from "../../../../../../components/flex/Flex.svelte";
  import NumberInput from "../../../../../../components/numberinput/NumberInput.svelte";
  import Switch from "../../../../../../components/switch/Switch.svelte";
  import { questionConfig } from "../question.config";
  export let question;
  let { uploadControls, fileTypes } = questionConfig;
  const onChange = ({ detail: { value } }) => {
    if (!value) question.allowedFileTypes = [];
  };
</script>

<Flex direction="column">
  {#each uploadControls as uploadControl}
    {#if uploadControl.inputType === "switch"}
      <Field id={uploadControl.id} labelCol={3} type="horizontal">
        <span slot="label">{uploadControl.title}:</span>
        <Switch
          slot="input"
          bind:value={question[uploadControl.key]}
          on:onChange={onChange}
        ></Switch>
      </Field>
      {#if question.allowSpecificFileTypes}
        <Checkbox
          bind:group={question.allowedFileTypes}
          checkboxes={fileTypes
            .reduce((acc, val) => (acc = [...acc, ...val.options]), [])
            .map((o) => ({
              id: o.id,
              value: o.value,
              label: o.title,
            }))}
        />
      {/if}
    {/if}
    {#if uploadControl.inputType === "number"}
      <Field id={uploadControl.id} labelCol={3} inputCol={4} type="horizontal">
        <span slot="label">{uploadControl.title}:</span>
        <NumberInput
          id={uploadControl.id}
          size="sm"
          bind:value={question[uploadControl.key]}
          slot="input"
        />
      </Field>
    {/if}
  {/each}
</Flex>
