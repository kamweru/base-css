<script>
  import { appStore } from "../../lib/AppStore";
  import Icon from "@iconify/svelte";
  import { uuid } from "../../lib/utils";
  import SelectSingleSearch from "../../lib/components/select/Select.svelte";
  import { derived } from "svelte/store";
  import { addDocument, deleteDocument } from "../../lib/firebase";
  export let question;
  let operators = [
      {
        id: uuid(),
        title: "Was Answered",
        value: "answered",
      },
      {
        id: uuid(),
        title: "Was not Answered",
        value: "notAnswered",
      },
      {
        id: uuid(),
        title: "(=) equal to",
        value: "equalto",
      },
      {
        id: uuid(),
        title: "(!=) not equal to",
        value: "notEqualTo",
      },
    ],
    tmpCondition = {
      id: uuid(),
      formId: question.formId,
      parentId: "",
      childId: question.id,
      operator: operators[0].value,
      value: "",
      createdAt: Date.now(),
    };
  const addCondition = () => {
      $appStore.conditions = [...$appStore.conditions, tmpCondition];
      question.isChild = true;
      addDocument("conditions", tmpCondition, () => {
        console.log("condition added");
      });
      appStore.updateData({
        collectionName: "questions",
        document: question,
        callback: (data) => {
          console.log(data);
        },
      });
    },
    removeCondition = (condition) => {
      $appStore.conditions = $appStore.conditions.filter(
        (c) => c.id !== condition.id
      );
      deleteDocument("conditions", condition.id, () => {
        console.log("condition deleted");
      });
    },
    onChange = (condition) => {
      if (condition.parentId) {
        if (
          !$appStore.questions[
            $appStore.questions.findIndex((q) => q.id === condition.parentId)
          ].isParent
        ) {
          $appStore.questions[
            $appStore.questions.findIndex((q) => q.id === condition.parentId)
          ].isParent = true;
          appStore.updateData({
            collectionName: "questions",
            document:
              $appStore.questions[
                $appStore.questions.findIndex(
                  (q) => q.id === condition.parentId
                )
              ],
            callback: (data) => {
              console.log(data);
            },
          });
        }
      }
      appStore.updateData({
        collectionName: "conditions",
        document: condition,
        callback: (data) => {
          console.log(data);
        },
      });
    },
    conditions = derived(appStore, ($appStore) => {
      let result = [];
      if (!$appStore.conditions) return result;
      for (let condition of $appStore.conditions) {
        if (condition.childId === question.id) {
          result = [...result, condition];
        }
      }
      return result;
    }),
    questions = derived(appStore, ($appStore) => {
      let result = [];
      if (!$appStore.questions) return result;
      for (let questionItem of $appStore.questions) {
        if (
          questionItem.id !== question.id &&
          questionItem.formId === question.formId
        ) {
          result = [
            ...result,
            {
              title: questionItem.label,
              id: questionItem.id,
              value: questionItem.id,
            },
          ];
        }
      }
      return result;
    });
</script>

<div class="flex flex:col gap:8 p:7|11">
  {#if $conditions.length > 0}
    <div class="color:rgb($(text-light)) f:14">
      This question will only be displayed if the following conditions apply
    </div>
    {#each $conditions as condition}
      <div class="flex flex:col gap:8 b:1|solid|rgb($(border)) p:7|11 r:5">
        <div class="flex ai:center jc:space-between p:4">
          <div class="color:rgb($(text-light)) f:14">Condition</div>
          <button
            class="outline sm icon"
            on:click={() => removeCondition(condition)}
          >
            <span class="lh:0">
              <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
            </span>
          </button>
        </div>
        {#if $questions.length > 0}
          <div>
            <SelectSingleSearch
              options={$questions}
              bind:selected={$appStore.conditions[
                $appStore.conditions.findIndex(
                  (c) => c.parentId === condition.parentId
                )
              ].parentId}
              on:onChange={() => onChange(condition)}
              label="Select question from list"
            ></SelectSingleSearch>
          </div>
        {/if}
        {#if condition.parentId}
          <div>
            <SelectSingleSearch
              options={operators}
              label="Select condition from list"
              bind:selected={$appStore.conditions[
                $appStore.conditions.findIndex(
                  (c) => c.parentId === condition.parentId
                )
              ].operator}
              on:onChange={() => onChange(condition)}
            ></SelectSingleSearch>
          </div>
        {/if}
        {#if condition.operator && [operators[2].value, operators[3].value].includes(condition.operator)}
          {#if $appStore.questions[$appStore.questions.findIndex((q) => q.id === condition.parentId)].options && $appStore.questions[$appStore.questions.findIndex((q) => q.id === condition.parentId)].options.length}
            <div>
              <SelectSingleSearch
                options={$appStore.questions[
                  $appStore.questions.findIndex(
                    (q) => q.id === condition.parentId
                  )
                ].options}
                label="Select option from list"
                bind:selected={$appStore.conditions[
                  $appStore.conditions.findIndex(
                    (c) => c.parentId === condition.parentId
                  )
                ].value}
                on:onChange={() => onChange(condition)}
              ></SelectSingleSearch>
            </div>
          {:else}
            <div class="control-group">
              <input
                type="text"
                bind:value={$appStore.conditions[
                  $appStore.conditions.findIndex(
                    (c) => c.parentId === condition.parentId
                  )
                ].value}
                on:change={() => onChange(condition)}
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
    {#if $questions.length >= 1}
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
    {#if $questions.length === 0}
      <div class="color:rgb($(text-light)) f:14">
        Please add atleast two questions
      </div>
    {/if}
  </div>
</div>
