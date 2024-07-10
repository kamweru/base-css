<script>
  import Field from "../../../../components/field/Field.svelte";
  import Flex from "../../../../components/flex/Flex.svelte";
  import Input from "../../../../components/input/Input.svelte";
  export let section;
</script>

<Flex gap="sm" direction="column" class="padding-inline-sm">
  <Field>
    <span slot="label">Section Title</span>
    <Input bind:value={section.title} slot="input" size="sm" />
  </Field>
  <Field>
    <span slot="label">Section Description</span>
    <Input bind:value={section.description} slot="input" size="sm" />
  </Field>
</Flex>
