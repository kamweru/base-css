<script>
  import Icon from "@iconify/svelte";
  import { uuid } from "../lib/utils";
  import SelectSingleSearch from "./SelectSingleSearch.svelte";
  export let sections;
  export let question;
  export let index;
  export let questionIndex;
  let conditions = [
      {
        id: uuid(),
        title: "Was Answered",
        value: "Was Answered",
      },
      {
        id: uuid(),
        title: "Was not Answered",
        value: "Was not Answered",
      },
      {
        id: uuid(),
        title: "(=) equal to",
        value: "(=) equal to",
      },
      {
        id: uuid(),
        title: "(!=) not equal to",
        value: "(!=) not equal to",
      },
    ],
    questions = [],
    questionCount = 0;
  sections
    .map((s) => s.questions)
    .flat()
    .map(({ id, value }) => {
      if (id !== question.id) {
        questions = [...questions, { title: value, id, value: id }];
      }
      questionCount++;
    });
  console.log(questions);
  // console
  //   .log
  //   // questions.map(({ id, value }) => ({ title: value, id, value }))
  //   // sections
  //   //   .map((s) => s.questions)).map(({ id, title }) => ({ title, id, value: title })
  //   ();
  const addCondition = () => {
      let tmpCondition = {
        questionId: "",
        condition: "",
        value: "",
        questionOptions: [],
        questionOptionId: "",
      };
      if (!question.skipLogic) {
        question["skipLogic"] = [tmpCondition];
      } else {
        question["skipLogic"] = [...question["skipLogic"], tmpCondition];
      }
      // console.log(question.skipLogic);
      // questionOptionId: "",
    },
    onChange = (item, skipLogicIndex) => {
      if (
        item === "condition" &&
        ["(=) equal to", "(!=) not equal to"].includes(
          question.skipLogic[skipLogicIndex].condition
        )
      ) {
        let selectedQuestion = sections
          .map((s) => s.questions)
          .flat()
          .find((q) => q.id === question.skipLogic[skipLogicIndex].questionId);
        if (selectedQuestion && selectedQuestion.options) {
          question.skipLogic[skipLogicIndex].questionOptions =
            selectedQuestion.options;
        }
      }
      if (
        item === "questionOption" &&
        ["(=) equal to", "(!=) not equal to"].includes(
          question.skipLogic[skipLogicIndex].condition
        )
      ) {
        let selectedQuestionOption = question.skipLogic[
          skipLogicIndex
        ].questionOptions.find(
          (o) => o.value === question.skipLogic[skipLogicIndex].value
        );
        question.skipLogic[skipLogicIndex].questionOptionId = "meh";
        // question.skipLogic[skipLogicIndex].questionOptionId =
        //   selectedQuestionOption.id;
        // question.skipLogic[skipLogicIndex].questionOptions.find(
        //   (o) => o.value === question.skipLogic[skipLogicIndex].value
        // ).id;
        console.log(
          question.skipLogic[skipLogicIndex].questionOptionId,
          selectedQuestionOption.id
        );
      }
      // questionOptions = sections
      //   .map((s) => s.questions)
      //   .flat()
      //   .find((q) => q.id === seletedQuestion).options;
      // console.log("questionOptions", questionOptions);
    };
</script>

<div class="flex flex:col gap:8 p:7|11">
  {#if question.skipLogic && question.skipLogic.length > 0}
    <div class="color:rgb($(text-light)) f:14">
      This question will only be displayed if the following conditions apply
    </div>
    {#each question.skipLogic as skipLogic, skipLogicIndex}
      <div class="flex flex:col gap:8 b:1|solid|rgb($(border)) p:7|11 r:5">
        <div class="flex ai:center jc:space-between p:4">
          <div class="color:rgb($(text-light)) f:14">Condition</div>
          <button class="outline sm icon">
            <span class="lh:0">
              <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
            </span>
          </button>
        </div>
        <div>
          <SelectSingleSearch
            options={questions}
            bind:selected={skipLogic.questionId}
            on:onChange={() => onChange("question", skipLogicIndex)}
            label="Select question from list"
          ></SelectSingleSearch>
        </div>
        {#if skipLogic.questionId}
          <div>
            <SelectSingleSearch
              options={conditions}
              label="Select condition from list"
              bind:selected={skipLogic.condition}
              on:onChange={() => onChange("condition", skipLogicIndex)}
            ></SelectSingleSearch>
          </div>
          {#if skipLogic.questionOptions && skipLogic.questionOptions.length}
            <div>
              <SelectSingleSearch
                options={skipLogic.questionOptions}
                label="Select option from list"
                bind:selected={skipLogic.value}
                on:onChange={() => onChange("questionOption", skipLogicIndex)}
              ></SelectSingleSearch>
            </div>
          {:else}
            <div class="control-group">
              <input
                type="text"
                bind:value={skipLogic.value}
                placeholder="Enter value"
                class="outline md"
              />
            </div>
          {/if}
        {/if}
        <!--  {#if seletedQuestion && questionOptions && questionOptions.length > 0 && ["(=) equal to", "(!=) not equal to"].includes(condition)}
        <div>
          <SelectSingleSearch
            options={questionOptions}
            label="Select option from list"
            bind:selected={selectedQuestionOption}
          ></SelectSingleSearch>
        </div>
      {/if} -->
      </div>
    {/each}
  {/if}
  <div class="flex ai:center rel my:8">
    {#if questionCount > 1}
      <button
        class="$btn-color:$(color-primary) link md"
        on:click={addCondition}
      >
        <span class="lh:0 mr:8">
          <Icon icon="fluent:add-28-filled"></Icon>
        </span>
        Add condition
      </button>
    {/if}
    {#if questionCount === 1 || questionCount === 0}
      <div class="color:rgb($(text-light)) f:14">
        Please add atleast two questions
      </div>
    {/if}
    <!-- <span class="flex:1 h:1 bg:rgb($(gray-5))"></span>
    <span class="px:8">
      <button class="$btn-bg:$(gray-4) dashed md">
        <span class="lh:0 mr:8">
          <Icon icon="fluent:add-28-filled"></Icon>
        </span>
        Add condition
      </button>
    </span>
    <span class="flex:1 h:1 bg:rgb($(gray-5))"></span> -->
  </div>
</div>
