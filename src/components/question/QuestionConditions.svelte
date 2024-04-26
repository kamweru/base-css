<script>
  import { appStore } from "../../lib/AppStore";
  import Icon from "@iconify/svelte";
  import { uuid } from "../../lib/utils";
  import SelectSingleSearch from "../SelectSingleSearch.svelte";
  export let question;
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
  $appStore.questions.map(({ id, value, formId }) => {
    if (id !== question.id && question.formId === formId) {
      questions = [...questions, { title: value, id, value: id }];
    }
    // questionCount++;
  });
  questionCount = questions.length;
  $: if ($appStore.update.items === "skipLogic") {
    $appStore.questions.map(({ id, value, formId }) => {
      if (id !== question.id && question.formId === formId) {
        if (questions.length) {
          if (!questions.map((q) => q.id).includes(id)) {
            questions = [...questions, { title: value, id, value: id }];
            console.log("added in many", questions.length);
          }
        } else {
          questions = [{ title: value, id, value: id }];
          console.log("added", questions.length);
        }
      }
    });
    questionCount = questions.length;
    $appStore.update.items = "";
    console.log(questionCount + " from skip logic", questions);
  }
  // console.log(questionCount);
  const addCondition = () => {
      let tmpCondition = {
        id: uuid(),
        questionId: "",
        condition: conditions[0].value,
        value: "",
        questionOptions: [],
        questionOptionId: "",
      };
      if (!question.skipLogic) {
        question["skipLogic"] = [tmpCondition];
      } else {
        question["skipLogic"] = [...question["skipLogic"], tmpCondition];
      }
      appStore.updateData({
        collectionName: "questions",
        document: question,
        callback: (data) => {
          console.log(data);
        },
      });
    },
    removeCondition = (skipLogic) => {
      question.skipLogic = question.skipLogic.filter(
        (s) => s.id !== skipLogic.id
      );
      appStore.updateData({
        collectionName: "questions",
        document: question,
        callback: (data) => {
          console.log(data);
        },
      });
    },
    onChange = (item, skipLogicIndex) => {
      if (
        item === "condition" &&
        ["(=) equal to", "(!=) not equal to"].includes(
          question.skipLogic[skipLogicIndex].condition
        )
      ) {
        let selectedQuestion = $appStore.questions.find(
          (q) => q.id === question.skipLogic[skipLogicIndex].questionId
        );
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
        question.skipLogic[skipLogicIndex].questionOptionId =
          selectedQuestionOption.id;
      }
      appStore.updateData({
        collectionName: "questions",
        document: question,
        callback: (data) => {
          console.log(data);
        },
      });
    };
</script>

<div class="flex flex:col gap:8 p:7|11">
  {#if question.skipLogic && question.skipLogic.length > 0}
    <div class="color:rgb($(text-light)) f:14">
      This question will only be displayed if the following conditions apply {questionCount}
    </div>
    {#each question.skipLogic as skipLogic, skipLogicIndex}
      <div class="flex flex:col gap:8 b:1|solid|rgb($(border)) p:7|11 r:5">
        <div class="flex ai:center jc:space-between p:4">
          <div class="color:rgb($(text-light)) f:14">Condition</div>
          <button
            class="outline sm icon"
            on:click={() => removeCondition(skipLogic)}
          >
            <span class="lh:0">
              <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
            </span>
          </button>
        </div>
        {#if questionCount > 1}
          <div>
            <SelectSingleSearch
              options={questions}
              bind:selected={skipLogic.questionId}
              on:onChange={() => onChange("question", skipLogicIndex)}
              label="Select question from list"
            ></SelectSingleSearch>
          </div>
        {/if}
        {#if skipLogic.questionId}
          <div>
            <SelectSingleSearch
              options={conditions}
              label="Select condition from list"
              bind:selected={skipLogic.condition}
              on:onChange={() => onChange("condition", skipLogicIndex)}
            ></SelectSingleSearch>
          </div>
        {/if}
        {#if skipLogic.condition && ["(=) equal to", "(!=) not equal to"].includes(skipLogic.condition)}
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
        Add conditional logic
      </button>
    {/if}
    {#if questionCount === 1 || questionCount === 0}
      <div class="color:rgb($(text-light)) f:14">
        Please add atleast two questions
      </div>
    {/if}
  </div>
</div>
