<script>
  import { uuid } from "../../../../../utils";
  import { questionConfig } from "./question.config";
  export let question;
  export let form;
  let questionTypeComponent,
    componentMap = {
      long: "LongShort",
      short: "LongShort",
      dropdown: "DropDown",
      fileupload: "Upload",
      multiple: "SelectMany",
      "select-one": "SelectOne",
    };
  const loadComponent = async () =>
      (questionTypeComponent = (
        await import(
          `./answerTypes/${componentMap[question.questionType]}.svelte`
        )
      ).default),
    modifyQuestion = () => {
      if (
        [2, 3, 4]
          .map((i) => questionConfig.types[i].value)
          .includes(question.questionType)
      ) {
        question.questionIcon =
          question.questionType === questionConfig.types[2].value
            ? questionConfig.types[2].icon
            : questionConfig.types[3].icon;
        question.options = [
          {
            id: uuid(),
            title: "Option 1",
            value: "Option 1",
          },
        ];
      } else if (question.questionType === questionConfig.types[5].value) {
        question = {
          ...question,
          ...questionConfig.uploadSettings,
        };
      } else {
        resetQuestion();
      }
    },
    resetQuestion = () => {
      Object.keys({
        ...questionConfig.uploadSettings,
        options: null,
        questionIcon: null,
      }).forEach((key) => {
        question[key] = null;
      });
    };
  $: if (question && question.questionType) {
    loadComponent();
    modifyQuestion();
  }
</script>

<div class="padding">
  <svelte:component this={questionTypeComponent} {question} />
</div>
