<script>
  import { onMount } from "svelte";

  export let question;
  export let questions;
  export let conditions;
  let childQuestion = {},
    condition = {};
  onMount(() => {
    if (question.isParent) {
      condition = conditions.find((c) => c.parentId === question.id);
      childQuestion = questions.find((q) => q.id === condition.childId);
    }
  });
</script>

{#if question.isParent}
  <div class="control-group flex flex:col gap:8 p:7|11">
    <label
      class={question.validationRules.required
        ? `{inline-block;mr:4;color:red;f:14;lh:1;content:'*'}:before`
        : ""}
      for={question.id}>{question.label}</label
    >
    {#if question.hint}
      <small>({question.hint})</small>
    {/if}
    <select class="outline md" id={question.id} bind:value={question.value}>
      <option value="">{question.placeholder}</option>
      {#each question.options as option}
        <option value={option.value}>{option.title}</option>
      {/each}
    </select>
    <!-- <input
      class="outline md"
      type="text"
      id={question.id}
      placeholder={question.placeholder}
      bind:value={question.value}
    /> -->
    {#if question.errors.messages.length > 0}
      <span class="f:12 color:rgb($(red)) mt:-4"
        >{question.errors.messages.join(", ")}</span
      >
    {/if}
  </div>
  {#if Object.keys(childQuestion).length}
    {#if question.value === condition.value}
      <div class="control-group flex flex:col gap:8 p:7|11">
        {childQuestion.label}
      </div>
    {/if}
  {/if}
{/if}
{#if !question.isChild && !question.isParent}
  <div class="control-group flex flex:col gap:8 p:7|11">
    {question.label}
  </div>
{/if}
