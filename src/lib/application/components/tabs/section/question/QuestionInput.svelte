<script>
  import Field from "../../../../../components/field/Field.svelte";
  import Input from "../../../../../components/input/Input.svelte";
  export let question;
</script>

<Field type="horizontal" id={question.id}>
  <span slot="label">Question Text</span>
  <div slot="input">
    {#if question.controlType === "input"}
      <Input bind:value={question.questionText} size="sm" />
    {/if}
  </div>
</Field>
