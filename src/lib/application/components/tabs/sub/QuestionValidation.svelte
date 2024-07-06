<script>
  export let question;
</script>

<!-- {#if question.currentView === "QuestionValidation"} -->
<div>
  {#each Object.keys(question.validationRules) as key}
    <div>
      {key}
      -- {question.validationRules[key]}
    </div>
  {/each}
</div>
<!-- {/if} -->
