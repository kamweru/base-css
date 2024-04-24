<script>
  import Icon from "@iconify/svelte";
  import SelectSingleSearch from "./SelectSingleSearch.svelte";
  export let sections;
  export let question;
  export let index;
  export let questionIndex;
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
        title: "Email",
        key: "email",
        value: "email",
        defaultValue: "",
        inputType: "email",
      },
      {
        title: "Phone number",
        key: "phone",
        value: "phone",
        defaultValue: "",
        inputType: "tel",
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
    matchWidth = true,
    validationRuleObj = null;
  const onChange = ({ detail }) => {
      validationRuleObj = detail;
      question.validationRules[validationRuleObj.value] = detail.defaultValue;
      // console.log(detail);
      // question.validationRules[detail.title] = detail.value;
    },
    addRule = () => {
      if (
        validationRuleObj !== null &&
        !question.validationRules[validationRuleObj.value]
      ) {
        question.validationRules[validationRuleObj.value] =
          validationRuleObj.defaultValue;
        validationRuleObj = null;
        selectedValidationRule = "";
        //
      }
      // validationRuleObj = null;18000
      // selectedValidationRule = null;
      console.log(
        question.validationRules,
        validationRuleObj,
        selectedValidationRule
      );
    },
    removeRule = (key) => {
      // let tmpRules = delete question.validationRules[key];
      // console.log(key);
      // question.validationRules[key] = null;
      let tmpRules = { ...question.validationRules };
      question.validationRules = {};
      for (const validationRule of Object.keys(tmpRules)) {
        if (validationRule !== key) {
          // console.log(validationRule !== key);
          question.validationRules[validationRule] = tmpRules[validationRule];
        }
      }
      // question.validationRules = tmpRules;
      // console.log(question.validationRules, tmpRules);
    };
  // let newRules = {};
  // validationRules.map(({ value, ...rest }) => {
  //   newRules[value] = { value, ...rest };
  // });
  // console.log(newRules);
  // console.log(
  //   validationRules.map(({ title, ...rest }) => ({
  //     title: capitalizeFirstLetter(title),
  //     ...rest,
  //   }))
  // );
</script>

<div class="p:7|11">
  {#each Object.keys(question.validationRules) as validationRule}
    <div class="grid grid-cols:3 p:7|11 r:5 bg:rgb($(gray-1)) mb:8">
      <div class="flex ai:center">
        {newRules[validationRule].title}
      </div>
      <!-- <div class="flex:1"> -->
      <div class="control-group">
        {#if newRules[validationRule].inputType === "checkbox"}
          <input
            type="checkbox"
            class="switch"
            bind:value={question.validationRules[validationRule]}
          />
        {:else}
          <input
            type="text"
            class="underline md"
            bind:value={question.validationRules[validationRule]}
          />
        {/if}
        <!-- {#if newRules[validationRule].inputType === "checkbox"} -->
        <!-- <input
          bind:value={question.validationRules[validationRule].dd}
          class={newRules[validationRule].inputType === "checkbox"
            ? "switch"
            : "outline md"}
          type={newRules[validationRule].inputType === "checkbox"
            ? "checkbox"
            : newRules[validationRule].inputType}
        /> -->
      </div>
      <!-- {question.validationRules[validationRule]} -->
      <!-- </div> -->
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
    <!-- <div class="color:rgb($(text-light)) f:14">Select Validation Rule</div> -->
    <div class="flex:1">
      <SelectSingleSearch
        options={validationRules}
        bind:selected={selectedValidationRule}
        on:onChange={onChange}
        label="Select validation rule"
      ></SelectSingleSearch>
    </div>
    <button class="$btn-bg:$(gray-4) fill md" on:click={addRule}>
      <span class="lh:0 mr:8">
        <Icon icon="fluent:add-28-filled"></Icon>
      </span>
      Add Rule
    </button>
  </div>
  <!-- <div class="flex ai:center"> -->
  <!-- {#each validationRules as validationRule}
    <div class="flex ai:center">
      <div>{capitalizeFirstLetter(validationRule.title)}</div>
    </div>
  {/each} -->
  <!-- {#each Object.keys(validation) as key}
    <div>{key}</div>
    {#each validation[key] as validationRule}
      {#if question.validationRules[validationRule]}
        {validationRule}
      {/if}
    {/each}
  {/each}
</div> -->
  <!-- <div class="control-group">
    <label for="error-message">Error Message</label>
    <input
      type="text"
      class="outline md"
      id="error-message"
      placeholder="Error message"
    />
  </div> -->
</div>
