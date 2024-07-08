<script>
  import { questionConfig } from "./question.config";
  import Icon from "@iconify/svelte";
  import Divider from "../../../../../components/divider/Divider.svelte";
  import Flex from "../../../../../components/flex/Flex.svelte";
  import Field from "../../../../../components/field/Field.svelte";
  import Select from "../../../../../components/select/Select.svelte";
  import Input from "../../../../../components/input/Input.svelte";
  export let question;
  export let form;
  let { operators } = questionConfig,
    questions = Object.values(form.sections).reduce((acc, curr) => {
      Object.values(curr.questions).map((i) => {
        if (i.id !== question.id)
          acc.push({
            title: i.questionText,
            id: i.id,
            value: i.id,
          });
      });
      return acc;
    }, []);
  const addCondition = () => {
      question.isChild = true;
      let conditionId = 1,
        conditionObj = {
          operator: operators[0].value,
          parentId: "",
          value: "",
        };
      if (question.conditions && Object.keys(question.conditions).length > 0) {
        conditionId = Object.keys(question.conditions).length + 1;
        question.conditions = {
          ...question.conditions,
          [conditionId]: conditionObj,
        };
      } else {
        question.conditions = {
          [conditionId]: conditionObj,
        };
      }
    },
    removeCondition = (conditionKey) => {
      delete question.conditions[conditionKey];
      question.conditions = { ...question.conditions };
    };
</script>

<div class="padding">
  <Flex direction="column">
    {#if question.conditions && Object.keys(question.conditions).length > 0}
      <div>
        This question will only be displayed if the following conditions apply
      </div>
      {#each Object.keys(question.conditions) as conditionKey}
        <div class="border border-rounded-lg">
          <Flex direction="column" gap="sm">
            <div class="padding-sm bb:1|solid|rgb($(color-border))">
              <Flex justify="spaceBetween" align="center">
                <div>Condition</div>
                <button
                  class="button button-fill button-danger button-icon-only button-sm"
                  on:click={() => removeCondition(conditionKey)}
                >
                  <span class="button-icon">
                    <span class="icon">
                      <Icon icon="akar-icons:minus" class="f:18" />
                    </span>
                  </span>
                </button>
              </Flex>
            </div>
            <div class="padding-sm">
              <Flex direction="column">
                {#if questions.length > 0}
                  <Field>
                    <span slot="label">Question</span>
                    <Select
                      slot="input"
                      options={questions}
                      bind:selected={question.conditions[conditionKey].parentId}
                    ></Select>
                  </Field>
                {/if}
                {#if question.conditions[conditionKey].parentId}
                  <Field>
                    <span slot="label">Operator</span>
                    <Select
                      slot="input"
                      options={operators}
                      bind:selected={question.conditions[conditionKey].operator}
                    ></Select>
                  </Field>
                {/if}
                {#if question.conditions[conditionKey].parentId && question.conditions[conditionKey].operator && [2, 3]
                    .map((i) => operators[i].value)
                    .includes(question.conditions[conditionKey].operator)}
                  {#if question.conditions[conditionKey].operator && questions.find((i) => i.id === question.conditions[conditionKey].parentId).options && questions.find((i) => i.id === question.conditions[conditionKey].parentId).options.length > 0}
                    <Field>
                      <span slot="label">Value</span>
                      <Select
                        options={questions.find(
                          (i) =>
                            i.id === question.conditions[conditionKey].parentId
                        ).options}
                        bind:selected={question.conditions[conditionKey].value}
                      ></Select></Field
                    >
                  {:else}
                    <Field>
                      <span slot="label">Value</span>
                      <Input
                        bind:value={question.conditions[conditionKey].value}
                        slot="input"
                      ></Input>
                    </Field>
                  {/if}
                {/if}
              </Flex>
            </div>
          </Flex>
        </div>
      {/each}
    {/if}
    {#if questions.length >= 1}
      <div class="padding">
        <Divider type="textCenter">
          <button
            class="button button-outline button-info"
            on:click={addCondition}
          >
            <span class="button-icon">
              <span class="icon">
                <Icon icon="akar-icons:plus"></Icon>
              </span>
            </span>
            <span> add conditional logic </span>
          </button>
        </Divider>
      </div>
    {:else}
      <div class="text:center">Please add at least two questions</div>
    {/if}
  </Flex>
</div>
