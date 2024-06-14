<script>
  import { appStore } from "../../lib/AppStore";
  import { uuid } from "../../lib/utils";
  import SelectSingleSearch from "../../lib/components/select/Select.svelte";
  export let question;
  let dataTypes = [
    { title: "Date", value: "date", id: uuid() },
    { title: "Email", value: "email", id: uuid() },
    { title: "Number", value: "number", id: uuid() },
    { title: "Phonenumber", value: "tel", id: uuid() },
    { title: "Text", value: "text", id: uuid() },
    { title: "Time", value: "time", id: uuid() },
  ];
  const onChange = () => {
    $appStore.update.items = "questions";
    $appStore.update.updated = false;
    appStore.updateData({
      collectionName: "questions",
      document: question,
      callback: (data) => {
        console.log(data);
      },
    });
  };
</script>

<div class="flex flex:col gap:16 p:7|11">
  <div class="control-group">
    <label for="hint-text-{question.id}">Hint Text</label>
    <input
      type="text"
      class="outline md"
      id="hint-text-{question.id}"
      bind:value={question.hint}
      placeholder="Hint Text"
      on:change={onChange}
    />
  </div>
  <div class="control-group">
    <label for="answer-default-value-{question.id}">Default Value</label>
    <input
      type="text"
      class="outline md"
      id="answer-default-value-{question.id}"
      bind:value={question.defaultValue}
      placeholder="Default Value"
      on:change={onChange}
    />
  </div>
  {#if question.questionType === "short" || question.questionType === "long"}
    <div class="control-group">
      <label for="answer-placeholder-{question.id}">Placeholder</label>
      <input
        type="text"
        class="outline md"
        id="answer-placeholder-{question.id}"
        bind:value={question.placeholder}
        placeholder="placeholder"
        on:change={onChange}
      />
    </div>
  {/if}
  {#if question.questionType === "short"}
    <div class="control-group">
      <label for="answer-data-type-{question.id}">Data Type</label>
      <SelectSingleSearch
        options={dataTypes}
        label="Select option from list"
        bind:selected={question.dataType}
        id="answer-data-type-{question.id}"
        on:onChange={onChange}
      ></SelectSingleSearch>
    </div>
  {/if}
</div>
