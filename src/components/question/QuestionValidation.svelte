<script>
  import Icon from "@iconify/svelte";
  import SelectSingleSearch from "../SelectSingleSearch.svelte";
  import { appStore } from "../../lib/AppStore";
  export let question;
  let newRules = {
      required: {
        value: "required",
        title: "Required",
        key: "required",
        defaultValue: false,
        inputType: "checkbox",
      },
      email: {
        value: "email",
        title: "Email",
        key: "email",
        defaultValue: "",
        inputType: "email",
      },
      phone: {
        value: "phone",
        title: "Phone number",
        key: "phone",
        defaultValue: "",
        inputType: "tel",
      },
      capitalLetter: {
        value: "capitalLetter",
        title: "Contains capital letter",
        key: "capitalLetter",
        defaultValue: false,
        inputType: "checkbox",
      },
      oneNumber: {
        value: "oneNumber",
        title: "Contains number",
        key: "oneNumber",
        defaultValue: false,
        inputType: "checkbox",
      },
      specialCharacter: {
        value: "specialCharacter",
        title: "Contains special character",
        key: "specialCharacter",
        defaultValue: false,
        inputType: "checkbox",
      },
      minLength: {
        value: "minLength",
        title: "Minimum length",
        key: "minLength",
        defaultValue: 5,
        inputType: "number",
      },
      maxLength: {
        value: "maxLength",
        title: "Maximum length",
        key: "maxLength",
        defaultValue: 5,
        inputType: "number",
      },
      alpha: {
        value: "alpha",
        title: "Alpha numeric",
        key: "alpha",
        defaultValue: false,
        inputType: "checkbox",
      },
      isNumber: {
        value: "isNumber",
        title: "Is number",
        key: "isNumber",
        defaultValue: false,
        inputType: "checkbox",
      },
    },
    validationRules = [
      {
        title: "Required",
        key: "required",
        value: "required",
        defaultValue: false,
        inputType: "checkbox",
      },
      {
        title: "Contains capital letter",
        key: "capitalLetter",
        value: "capitalLetter",
        defaultValue: false,
        inputType: "checkbox",
      },
      {
        title: "Contains number",
        key: "oneNumber",
        value: "oneNumber",
        defaultValue: false,
        inputType: "checkbox",
      },
      {
        title: "Contains special character",
        key: "specialCharacter",
        value: "specialCharacter",
        defaultValue: false,
        inputType: "checkbox",
      },
      {
        title: "Minimum length",
        key: "minLength",
        value: "minLength",
        defaultValue: 5,
        inputType: "number",
      },
      {
        title: "Maximum length",
        key: "maxLength",
        value: "maxLength",
        defaultValue: 5,
        inputType: "number",
      },
      // {
      //   title: "Equals",
      //   key: "equals",
      //   value: "equals",
      // },
      {
        title: "Alpha numeric",
        key: "alpha",
        value: "alpha",
        defaultValue: false,
        inputType: "checkbox",
      },
      {
        title: "Is number",
        key: "isNumber",
        value: "isNumber",
        defaultValue: false,
        inputType: "checkbox",
      },
    ],
    selectedValidationRule,
    validationRuleObj = null;
  const onChange = ({ detail }) => {
      validationRuleObj = detail;
      question.validationRules[validationRuleObj.value] = detail.defaultValue;
      appStore.updateData({
        collectionName: "questions",
        document: question,
        callback: (data) => {
          console.log(data);
        },
      });
    },
    removeRule = (key) => {
      for (const validationRule of Object.keys(question.validationRules)) {
        if (validationRule !== key) {
          question.validationRules[validationRule] =
            question.validationRules[validationRule];
        }
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

<div class="p:7|11">
  {#each Object.keys(question.validationRules) as validationRule}
    <div class="grid grid-cols:3 p:7|11 r:5 bg:rgb($(gray-1)) mb:8">
      <div class="flex ai:center">
        {newRules[validationRule].title}
      </div>
      <div class="control-group">
        {#if newRules[validationRule].inputType === "checkbox"}
          <input
            type="checkbox"
            class="switch"
            value={question.validationRules[validationRule]}
            bind:checked={question.validationRules[validationRule]}
          />
        {:else}
          <input
            type="text"
            class="underline md"
            bind:value={question.validationRules[validationRule]}
          />
        {/if}
      </div>
      <div class="flex ai:center jc:end">
        <button
          class="$btn-bg:$(gray-8) outline sm icon"
          on:click={() => removeRule(validationRule)}
        >
          <span class="lh:0">
            <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
          </span>
        </button>
      </div>
    </div>
  {/each}
  <div class="flex ai:center gap:8">
    <div class="color:rgb($(text-light)) f:14">Select Rule</div>
    <div class="flex:1">
      <SelectSingleSearch
        options={validationRules}
        bind:selected={selectedValidationRule}
        on:onChange={onChange}
        label="Select validation rule"
      ></SelectSingleSearch>
    </div>
  </div>
</div>
