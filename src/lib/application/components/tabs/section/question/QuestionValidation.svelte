<script>
  import { questionConfig } from "./question.config";
  import Icon from "@iconify/svelte";
  import Flex from "../../../../../components/flex/Flex.svelte";
  import Field from "../../../../../components/field/Field.svelte";
  import Select from "../../../../../components/select/Select.svelte";
  import Checkbox from "../../../../../components/checkbox/Checkbox.svelte";
  import Input from "../../../../../components/input/Input.svelte";
  export let question;
  let { rulesControls } = questionConfig;
</script>

<div class="padding">
  {#if question && question.validationRules && Object.keys(question.validationRules).length > 0}
    <Flex direction="column">
      {#each Object.keys(question.validationRules) as key}
        <Flex
          justify="spaceBetween"
          align="center"
          class="padding-xs r:8 bg:rgb($(gray-2))"
        >
          <Field type="horizontal" labelCol={1}>
            <span class="capitalize" slot="label">{key}</span>
            <span slot="input">
              {#if rulesControls[key].inputType === "checkbox"}
                <Checkbox></Checkbox>
              {:else}
                <Input type="underline"></Input>
              {/if}
            </span>
          </Field>
          <button class="button button-text button-icon-only button-sm">
            <span class="button-icon">
              <span class="icon">
                <Icon icon="akar-icons:minus" class="f:18" />
              </span>
            </span>
          </button>
        </Flex>
      {/each}
    </Flex>
  {/if}
  <Field type="horizontal">
    <span slot="label">Validation Rules</span>
    <Select slot="input" options={Object.values(rulesControls)}></Select>
  </Field>
</div>
