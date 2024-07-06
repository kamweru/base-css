<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { Collapse } from "../../../components/collapse/index";
  import Divider from "../../../components/divider/Divider.svelte";
  import Field from "../../../components/field/Field.svelte";
  import Flex from "../../../components/flex/Flex.svelte";
  import Input from "../../../components/input/Input.svelte";
  import Select from "../../../components/select/Select.svelte";
  import { Tabs } from "../../../components/tabs/index";
  import { uuid } from "../../../utils";
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
      await import(`./sub/${currentQuestionOptionTab.settingView}.svelte`)
    ).default);
  onMount(() => loadTab());
</script>

<Flex gap="sm" direction="column">
  {#each Object.values(form.sections) as section, index}
    <Collapse>
      <Collapse.Panel>
        <div slot="header">
          Section {index + 1}
        </div>
        <div slot="content">
          <Flex gap="sm" direction="column">
            <Field>
              <span slot="label">Section Title</span>
              <Input bind:value={section.title} slot="input" size="sm" />
            </Field>
            <Field>
              <span slot="label">Section Description</span>
              <Input bind:value={section.description} slot="input" size="sm" />
            </Field>
          </Flex>
          <div class="padding">
            <Collapse>
              {#each Object.values(section.questions) as question, index}
                <Collapse.Panel>
                  <span slot="header">Question {index + 1}</span>
                  <div slot="content" class="padding flex flex-column gap:16">
                    <Flex align="center">
                      <Field type="horizontal" id={question.id}>
                        <span slot="label">Question Text</span>
                        <Input
                          slot="input"
                          bind:value={question.questionText}
                          size="sm"
                        />
                      </Field>
                      <Select
                        options={questionTypes}
                        bind:selected={question.questionType}
                      />
                    </Flex>
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
                      <svelte:component
                        this={questionTab}
                        bind:question
                        slot="content"
                      />
                    </Tabs>
                  </div>
                </Collapse.Panel>
              {/each}
            </Collapse>
          </div>
        </div>
      </Collapse.Panel>
    </Collapse>
  {/each}
</Flex>
