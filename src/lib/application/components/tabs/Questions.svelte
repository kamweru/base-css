<script>
  import { onMount } from "svelte";
  import Section from "./section/Section.svelte";
  import Question from "./section/Question.svelte";
  import { Collapse } from "../../../components/collapse/index";
  import Divider from "../../../components/divider/Divider.svelte";
  import Flex from "../../../components/flex/Flex.svelte";
  import Icon from "@iconify/svelte";
  export let form;
</script>

<Flex gap="xl" direction="column">
  {#each Object.values(form.sections) as section, index}
    <Collapse>
      <Collapse.Panel>
        <div slot="header">
          Section {index + 1}
        </div>
        <Flex direction="column" gap="lg" slot="content">
          <Section bind:section></Section>
          <Flex gap="xl" direction="column">
            <Collapse>
              {#each Object.values(section.questions) as question, index}
                <Collapse.Panel>
                  <span slot="header">Question {index + 1}</span>
                  <Question bind:question bind:form slot="content"></Question>
                </Collapse.Panel>
              {/each}
            </Collapse>
            <div class="pb:24">
              <Divider type="textCenter">
                <button class="button button-outline">
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
      <button class="button button-outline">
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
