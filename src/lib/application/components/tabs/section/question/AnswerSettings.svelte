<script>
  import Field from "../../../../../components/field/Field.svelte";
  import Flex from "../../../../../components/flex/Flex.svelte";
  import Input from "../../../../../components/input/Input.svelte";
  import Select from "../../../../../components/select/Select.svelte";
  import { questionConfig } from "./question.config";
  export let question;
  export let form;
  let { types, dataTypes } = questionConfig,
    controls = [
      {
        title: "Hint Text",
        inputType: "text",
        key: "hint",
        placeholder: "Hint Text",
        questionTypes: [...Array(6).keys()].map((i) => types[i].value),
      },
      {
        title: "Default Value",
        inputType: "text",
        key: "defaultValue",
        placeholder: "Default Value",
        questionTypes: [...Array(6).keys()].map((i) => types[i].value),
      },
      {
        title: "Placeholder",
        inputType: "text",
        key: "placeholder",
        placeholder: "Placeholder",
        questionTypes: [0, 1].map((i) => types[i].value),
      },
      {
        title: "Data Type",
        inputType: "select",
        key: "dataType",
        placeholder: "Data Type",
        questionTypes: [0].map((i) => types[i].value),
        options: dataTypes,
      },
    ],
    minMax = {
      date: { min: 1900, max: new Date().getFullYear() },
      time: { min: "09:00", max: "18:00" },
      number: { min: 0, max: 10 },
    };
  const onChange = () => {
    if (
      question.dataType === "date" ||
      question.dataType === "time" ||
      question.dataType === "number"
    ) {
      question.validationRules.min = minMax[question.dataType].min;
      question.validationRules.max = minMax[question.dataType].max;
    } else {
      delete question.validationRules.min;
      delete question.validationRules.max;
    }
  };
</script>

<div class="padding">
  <Flex direction="column" gap="sm">
    {#each controls as control}
      {#if control.questionTypes.includes(question.questionType)}
        <Field type="horizontal" inputCol={8}>
          <span slot="label">{control.title}</span>
          <span slot="input">
            {#if control.inputType === "text"}
              <Input
                type="underline"
                bind:value={question[control.key]}
                placeholder={control.placeholder}
              />
            {:else if control.inputType === "select"}
              <Select
                options={control.options}
                bind:selected={question[control.key]}
                on:onChange={onChange}
              />
            {/if}
          </span>
        </Field>
      {/if}
    {/each}

    {#if question.dataType === "date" || question.dataType === "number" || question.dataType === "time"}
      <div class="f:14 color:rgb($(color-invert-8)) lh:$(line-height)">
        HINT: Go to the <strong>Validation Criteria</strong> tab to set minimum
        and maximum values for {question.dataType}
      </div>
    {/if}
  </Flex>
</div>
