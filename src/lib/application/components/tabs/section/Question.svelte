<script>
  import { onMount } from "svelte";
  import Field from "../../../../components/field/Field.svelte";
  import Flex from "../../../../components/flex/Flex.svelte";
  import Input from "../../../../components/input/Input.svelte";
  import Select from "../../../../components/select/Select.svelte";
  import { Tabs } from "../../../../components/tabs";
  import { uuid } from "../../../../utils";
  export let question;
  export let form;
  let questionOptionTabs = [
      {
        title: "Answer Options",
        settingView: "AnswerOptions",
        id: uuid(),
      },
      {
        title: "Answer Settings",
        settingView: "AnswerSettings",
        id: uuid(),
      },
      { title: "Skip Logic", settingView: "QuestionConditions", id: uuid() },
      {
        title: "Validation Criteria",
        settingView: "QuestionValidation",
        id: uuid(),
      },
    ],
    questionTypes = [
      { title: "Short answer", value: "short", icon: "mdi:text-short" },
      { title: "Long answer", value: "long", icon: "mdi:text-long" },
      {
        title: "Select one",
        value: "select-one",
        icon: "eva:radio-button-off-fill",
      },
      {
        title: "Select many",
        value: "multiple",
        icon: "carbon:checkbox",
      },
      {
        title: "Dropdown",
        value: "dropdown",
        icon: "lucide:circle-chevron-down",
      },
      {
        title: "File Upload",
        value: "fileupload",
        icon: "bytesize:upload",
      },
    ],
    currentQuestionOptionTab = questionOptionTabs[0],
    questionTab;
  const loadTab = async () =>
    (questionTab = (
      await import(`./question/${currentQuestionOptionTab.settingView}.svelte`)
    ).default);
  onMount(() => loadTab());
</script>

<Flex direction="column" gap="sm" class="padding-block-sm  ">
  <Flex align="center" justify="spaceBetween">
    <Field type="horizontal" labelCol={3} inputCol={24} id={question.id}>
      <span slot="label">Question Text</span>
      <Input
        slot="input"
        bind:value={question.questionText}
        id={question.id}
        size="sm"
      />
    </Field>
    <Field type="horizontal" labelCol={3} inputCol={24} id={question.id}>
      <span slot="label">Question Type</span>
      <Select
        options={questionTypes}
        slot="input"
        bind:selected={question.questionType}
        id={question.id}
      />
    </Field>
  </Flex>
  <div class="border border-rounded-lg">
    <Tabs>
      {#each questionOptionTabs as tab}
        <Tabs.Tab
          active={question.currentView === tab.settingView}
          on:click={() => {
            question.currentView = tab.settingView;
            currentQuestionOptionTab = tab;
            loadTab();
          }}
        >
          <span slot="label">{tab.title}</span>
        </Tabs.Tab>
      {/each}
      <Tabs.Panel slot="content">
        <svelte:component
          this={questionTab}
          bind:form
          bind:question
        /></Tabs.Panel
      >
    </Tabs>
  </div>
</Flex>
