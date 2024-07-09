<script>
  import { defaultQuestion } from "../../../components.config";
  import Section from "./section/Section.svelte";
  import Question from "./section/Question.svelte";
  import { Collapse } from "../../../components/collapse/index";
  import Divider from "../../../components/divider/Divider.svelte";
  import Flex from "../../../components/flex/Flex.svelte";
  import Icon from "@iconify/svelte";
  import { uuid } from "../../../utils";
  import FormHeader from "./headerAndFooter/FormHeader.svelte";
  import FormFooter from "./headerAndFooter/FormFooter.svelte";
  export let form;
  const addSection = () => {
      let sectionId = uuid();
      form.sections = {
        ...form.sections,
        [sectionId]: {
          id: sectionId,
          formId: form.id,
          folderId: form.folderId,
          title: "",
          description: "",
          questions: [],
        },
      };
    },
    addQuestion = (sectionId) => {
      let id = uuid();
      form.sections[sectionId].questions = {
        ...form.sections[sectionId].questions,
        [id]: {
          ...defaultQuestion,
          id: id,
          formId: form.id,
          sectionId,
        },
      };
    };
</script>

<Flex gap="xl" direction="column">
  <FormHeader></FormHeader>
  <FormFooter></FormFooter>
  {#each Object.values(form.sections) as section, index}
    <Collapse>
      <Collapse.Panel>
        <div slot="header">
          Section {index + 1}
        </div>
        <Flex direction="column" gap="lg" slot="content">
          <Section bind:section></Section>
          <Flex gap="xl" direction="column">
            {#if section.questions && Object.keys(section.questions).length > 0}
              <Collapse>
                {#each Object.values(section.questions) as question, index}
                  <Collapse.Panel>
                    <span slot="header">Question {index + 1}</span>
                    <Question bind:question bind:form slot="content"></Question>
                  </Collapse.Panel>
                {/each}
              </Collapse>
            {/if}
            <div class="pb:24">
              <Divider type="textCenter">
                <button
                  class="button button-outline"
                  on:click={() => addQuestion(section.id)}
                >
                  <span class="button-icon">
                    <span class="icon">
                      <Icon icon="akar-icons:plus"></Icon>
                    </span>
                  </span>
                  <span>Add Question</span>
                </button>
              </Divider>
            </div>
          </Flex>
        </Flex>
      </Collapse.Panel>
    </Collapse>
  {/each}
  <div class="pb:24">
    <Divider type="textCenter">
      <button class="button button-outline" on:click={addSection}>
        <span class="button-icon">
          <span class="icon">
            <Icon icon="akar-icons:plus"></Icon>
          </span>
        </span>
        <span>Add Section</span>
      </button>
    </Divider>
  </div>
</Flex>
