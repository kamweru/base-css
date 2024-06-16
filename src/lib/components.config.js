export const cssUnits = [
  {
    title: "PX",
    value: "px",
  },
  {
    title: "REM",
    value: "rem",
  },
  {
    title: "EM",
    value: "em",
  },
  {
    title: "PT",
    value: "pt",
  },
];
export const sampleData = {
  tabs: ["Home", "About", "Contact"].map((title) => ({ title, value: title })),
};
const componentTypes = {
    button: {
      title: "Button Type",
      options: [
        {
          title: "Text Only",
          value: "text-only",
        },
        {
          title: "Icon only",
          value: "icon-only",
        },
        {
          title: "Icon left",
          value: "icon-left",
        },
        {
          title: "Icon right",
          value: "icon-right",
        },
      ],
    },
  },
  controlTypes = {
    types: "select",
    variants: "select",
    sizes: "select",
    colors: "select",
    states: "switch",
  },
  rootStyles = {
    button: {
      "--default-size": {
        title: "unit size",
        value: 1,
        pixelValue: 16,
        units: "rem",
        cssVar: "--default-size",
      },
      "--btn-height": {
        title: "button height",
        value: 32,
        units: "px",
        cssVar: "--btn-height",
      },
    },
    input: {
      "--default-size": {
        title: "unit size",
        value: 1,
        units: "rem",
        cssVar: "--default-size",
      },
      "--input-height": {
        title: "input height",
        value: 32,
        units: "px",
        cssVar: "--input-height",
      },
    },
    checkbox: {
      "--default-size": {
        title: "unit size",
        value: 1,
        units: "rem",
        cssVar: "--default-size",
      },
      "--input-height": {
        title: "input height",
        value: 32,
        units: "px",
        cssVar: "--input-height",
      },
    },
  },
  styles = {
    button: {
      baseClass: {
        default: "btn",
      },
      types: {
        default: "",
        "icon only": "btn-icon-only",
        "icon left": "btn-icon-left",
        "icon right": "btn-icon-right",
      },
      variants: {
        default: "",
        outline: "btn-outline",
        fill: "btn-fill",
        dashed: "btn-dashed",
        text: "btn-text",
        link: "btn-link",
      },
      sizes: {
        sm: "btn-sm",
        default: "",
        lg: "btn-lg",
      },
      colors: {
        default: "",
        success: "btn-success",
        danger: "btn-danger",
        warning: "btn-warning",
        info: "btn-info",
      },
      states: { disabled: "btn-disabled" },
    },
    input: {
      baseClass: {
        default: "input",
      },
      types: {
        default: "",
        "icon left": "input-icon-left",
        "icon right": "input-icon-right",
      },
      variants: {
        default: "input-outline",
        outline: "input-outline",
        fill: "input-fill",
        borderless: "input-borderless",
        underline: "input-underline",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: { disabled: "input-disabled", invalid: "input-invalid" },
    },
    checkbox: {
      baseClass: {
        default: "input checkbox",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: {
        disabled: "input-disabled",
        checked: "checkbox-checked",
        indeterminate: "checkbox-indeterminate",
      },
    },
    switch: {
      baseClass: {
        default: "input switch",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: {
        disabled: "input-disabled",
        checked: "switch-checked",
      },
    },
    form: {
      baseClass: {
        default: "form",
      },
      types: {
        default: "form-inline",
        vertical: "form-vertical",
        horizontal: "form-horizontal",
      },
    },
    progress: {
      baseClass: {
        default: "progress",
      },
    },
    table: {
      baseClass: {
        default: "table-wrapper",
      },
    },
    popover: {
      baseClass: {
        default: "popover",
      },
    },
    dropdown: {
      baseClass: {
        default: "dropdown",
      },
    },
    collapse: {
      baseClass: {
        default: "collapse",
      },
    },
    divider: {
      baseClass: {
        default: "divider",
      },
    },
    modal: {
      baseClass: {
        default: "modal",
      },
    },
    tabs: {
      baseClass: {
        default: "tabs-wrapper",
      },
    },
    upload: {
      baseClass: {
        default: "upload",
      },
    },
    columns: {
      baseClass: {
        default: "col",
      },
    },
    details: {
      baseClass: {
        default: "details",
      },
    },
    radio: {
      baseClass: {
        default: "input radio",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: {
        disabled: "input-disabled",
        checked: "radio-checked",
      },
    },
    range: {
      baseClass: {
        default: "input input-range",
      },
    },
    select: {
      baseClass: {
        default: "select",
      },
      variants: {
        default: "input-outline",
        fill: "input-fill",
        borderless: "input-borderless",
        underline: "input-underline",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: { disabled: "input-disabled", invalid: "input-invalid" },
    },
    numberinput: {
      baseClass: {
        default: "input input-number",
      },
      variants: {
        default: "input-outline",
        fill: "input-fill",
      },
      sizes: {
        sm: "input-sm",
        default: "",
        lg: "input-lg",
      },
      states: { disabled: "input-disabled", invalid: "input-invalid" },
    },
  },
  properties = Object.keys(styles).reduce((acc, controlKey) => {
    let classesArray = [];
    // console.log(componentTypes[controlKey].title);
    Object.keys(styles[controlKey]).forEach((controlKeyItem) => {
      if (
        styles[controlKey][controlKeyItem] &&
        styles[controlKey][controlKeyItem].default
      ) {
        classesArray.push(styles[controlKey][controlKeyItem].default);
      }
      acc[controlKey] = {
        classes: classesArray.join(" "),
        placeholder: "placeholder",
        value: "",
        text: controlKey,
        componentType: componentTypes[controlKey]?.options[0]?.value || "",
      };
    });
    return acc;
  }, {}),
  controls = Object.keys(styles).reduce((acc, controlKey) => {
    acc[controlKey] = {};
    Object.keys(styles[controlKey]).forEach((controlKeyItem) => {
      if (controlTypes[controlKeyItem]) {
        acc[controlKey][controlKeyItem] = {
          title: controlKeyItem,
          defaultValue:
            controlTypes[controlKeyItem] === "switch" ? false : "default",
          controlType: controlTypes[controlKeyItem],
          options: Object.keys(styles[controlKey][controlKeyItem]).map(
            (key) => ({
              title: key,
              value: controlTypes[controlKeyItem] === "switch" ? false : key,
            })
          ),
        };
      }
    });
    return acc;
  }, {});

export { styles, controls, properties, rootStyles, componentTypes };
