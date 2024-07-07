import { uuid } from "../../../../../utils";

let questionOptionTabs = [
    {
      title: "Answer Options",
      settingView: "AnswerOptions",
      id: uuid(),
    },
    {
      title: "Answer Settings",
      settingView: "AnswerSettings",
      id: uuid(),
    },
    { title: "Skip Logic", settingView: "QuestionConditions", id: uuid() },
    {
      title: "Validation Criteria",
      settingView: "QuestionValidation",
      id: uuid(),
    },
  ],
  questionTypes = [
    { title: "Short answer", value: "short", icon: "mdi:text-short" },
    { title: "Long answer", value: "long", icon: "mdi:text-long" },
    {
      title: "Select one",
      value: "select-one",
      icon: "eva:radio-button-off-fill",
    },
    {
      title: "Select many",
      value: "multiple",
      icon: "carbon:checkbox",
    },
    {
      title: "Dropdown",
      value: "dropdown",
      icon: "lucide:circle-chevron-down",
    },
    {
      title: "File Upload",
      value: "fileupload",
      icon: "bytesize:upload",
    },
  ],
  uploadSettings = {
    allowSpecificFileTypes: false,
    allowedFileTypes: [],
    maxFileSize: 1,
    maxFiles: 1,
  };
export const questionConfig = {
  tabs: questionOptionTabs,
  types: questionTypes,
  uploadSettings: uploadSettings,
  uploadControls: [
    {
      title: "Allow only specific file types",
      inputType: "switch",
      id: uuid(),
      key: "allowSpecificFileTypes",
      value: false,
    },
    {
      title: "Maximum number of files",
      inputType: "number",
      id: uuid(),
      key: "maxFiles",
    },
    {
      title: "Maximum file size (Mb)",
      inputType: "number",
      id: uuid(),
      key: "maxFileSize",
    },
  ],
  fileTypes: [
    {
      title: "Documents",
      value: "documents",
      options: [
        { title: "PDF", value: "pdf", id: uuid() },
        { title: "Word Document", value: "doc", id: uuid() },
        { title: "Spread Sheet", value: "xls", id: uuid() },
        { title: "Presentation", value: "ppt", id: uuid() },
      ],
    },
    {
      title: "Images",
      value: "images",
      options: [
        { title: "JPG", value: "JPG", id: uuid() },
        { title: "Jpeg", value: "Jpeg", id: uuid() },
        { title: "PNG", value: "PNG", id: uuid() },
        { title: "SVG", value: "SVG", id: uuid() },
        { title: "Webp", value: "Webp", id: uuid() },
        { title: "GIF", value: "GIF", id: uuid() },
      ],
    },
  ],
  rulesControls: {
    required: {
      title: "Required",
      defaultValue: false,
      inputType: "checkbox",
      value: "required",
    },
    requiredNotWhitespace: {
      title: "Required without whitespace",
      defaultValue: false,
      inputType: "checkbox",
      value: "requiredNotWhitespace",
    },
    positiveInteger: {
      title: "Only positive number",
      defaultValue: false,
      inputType: "checkbox",
      value: "positiveInteger",
    },
    positiveOrZeroInteger: {
      title: "Only positive number or zero",
      defaultValue: false,
      inputType: "checkbox",
      value: "positiveOrZeroInteger",
    },
    integer: {
      title: "Only positive number",
      defaultValue: false,
      inputType: "checkbox",
      value: "integer",
    },
    decimal: {
      title: "Only decimal number",
      defaultValue: false,
      inputType: "checkbox",
      value: "decimal",
    },
    alpha: {
      title: "Alphabets only",
      defaultValue: false,
      inputType: "checkbox",
      value: "alpha",
    },
    hasCapitalLetter: {
      title: "Contains at least one capital letter",
      defaultValue: false,
      inputType: "checkbox",
      value: "hasCapitalLetter",
    },
    hasNumber: {
      title: "Contains at least one number",
      defaultValue: false,
      inputType: "checkbox",
      value: "hasNumber",
    },
    hasSpecialCharacter: {
      title: "Contains at least one special character",
      defaultValue: false,
      inputType: "checkbox",
      value: "hasSpecialCharacter",
    },
    minLength: {
      title: "Minimum length",
      defaultValue: 5,
      inputType: "number",
      value: "minLength",
    },
    maxLength: {
      title: "Maximum length",
      defaultValue: 5,
      inputType: "number",
      value: "maxLength",
    },
    email: {
      title: "Is an email address",
      defaultValue: false,
      inputType: "checkbox",
      value: "email",
    },
    telephone: {
      title: "Is a telephone number",
      defaultValue: false,
      inputType: "checkbox",
      value: "telephone",
    },
    min: {
      title: "Minimum value",
      defaultValue: 0,
      inputType: "number",
      value: "min",
    },
    max: {
      title: "Maximum value",
      defaultValue: 0,
      inputType: "number",
      value: "max",
    },
  },
};
