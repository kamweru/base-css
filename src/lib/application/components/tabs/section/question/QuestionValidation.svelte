<script>
  import { questionConfig } from "./question.config";
  import { uuid } from "../../../../../utils";
  import Icon from "@iconify/svelte";
  import Flex from "../../../../../components/flex/Flex.svelte";
  import Field from "../../../../../components/field/Field.svelte";
  import Select from "../../../../../components/select/Select.svelte";
  import Checkbox from "../../../../../components/checkbox/Checkbox.svelte";
  import Input from "../../../../../components/input/Input.svelte";
  export let question;
  export let form;
  let { rulesControls } = questionConfig;
  const onChange = ({ detail }) => {
      let { value, defaultValue } = detail;
      question.validationRules = {
        ...question.validationRules,
        [value]: defaultValue,
      };
    },
    removeRule = (rule) => {
      delete question.validationRules[rule];
      question.validationRules = { ...question.validationRules };
    };
</script>

<div class="padding">
  {#if question && question.validationRules && Object.keys(question.validationRules).length > 0}
    <Flex direction="column" gap="sm">
      {#each Object.keys(question.validationRules) as key}
        <Flex
          justify="spaceBetween"
          align="center"
          class="padding-2xs r:8 bg:rgb($(gray-2))"
        >
          {@const id = uuid(8)}
          <Field type="horizontal" inputCol={8} {id}>
            <span class="capitalize" slot="label"
              >{rulesControls[key].title}</span
            >
            <span slot="input">
              {#if rulesControls[key].inputType === "checkbox"}
                <Checkbox bind:checked={question.validationRules[key]} {id}
                ></Checkbox>
              {:else}
                <Input
                  type="underline"
                  {id}
                  bind:value={question.validationRules[key]}
                ></Input>
              {/if}
            </span>
          </Field>
          <button
            class="button button-fill button-danger button-icon-only button-sm"
            on:click={() => removeRule(key)}
          >
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
  <div class="padding-sm">
    <Field type="horizontal">
      <span slot="label">Validation Rules</span>
      <Select
        slot="input"
        options={Object.values(rulesControls)}
        on:onChange={onChange}
      ></Select>
    </Field>
  </div>
</div>
