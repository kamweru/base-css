export const cssUnits = ["px", "rem", "em", "pt"].map((v) => ({
  title: v,
  value: v,
}));
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
    able: {
      padding: {
        title: "padding",
        units: "px",
        variables: [
          {
            title: "xs",
            value: 4,
          },
          {
            title: "sm",
            value: 8,
          },
          {
            title: "md",
            value: 16,
          },
          {
            title: "lg",
            value: 20,
          },
          {
            title: "xl",
            value: 24,
          },
        ],
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
    card: {
      baseClass: {
        default: "card",
      },
    },
    list: {
      baseClass: {
        default: "list",
      },
    },
    able: {
      baseClass: {
        default: "able",
      },
      sizes: {
        xs: "able-xs",
        sm: "able-sm",
        default: "",
        lg: "able-lg",
        xl: "able-xl",
      },
    },
    alert: {
      baseClass: {
        default: "alert",
      },
    },
    badge: {
      baseClass: {
        default: "badge",
      },
    },
    breadcrumb: {
      baseClass: {
        default: "breadcrumb",
      },
    },
    popconfirm: {
      baseClass: {
        default: "popconfirm",
      },
    },
    message: {
      baseClass: {
        default: "message",
      },
    },
    notification: {
      baseClass: {
        default: "notification",
      },
    },
    tag: {
      baseClass: {
        default: "tag",
      },
    },
    menu: {
      baseClass: {
        default: "menu",
      },
    },
    rate: {
      baseClass: {
        default: "rate",
      },
    },
    floatbutton: {
      baseClass: {
        default: "floatbutton",
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
  componentProperties = {
    able: {
      size: {
        value: "md",
        options: ["xs", "sm", "md", "lg", "xl"].map((v) => ({
          title: v,
          value: v,
        })),
      },
      orientation: {
        value: "horizontal",
        options: ["horizontal", "vertical"].map((v) => ({
          title: v,
          value: v,
        })),
      },
    },
  },
  config = {
    view: {
      title: "View",
      value: "single",
      options: ["all", "single"].map((v) => ({ title: v, value: v })),
    },
    component: {
      able: {
        classProps: [
          {
            title: "size",
            value: "md",
            options: ["xs", "sm", "md", "lg", "xl"].map((v) => ({
              title: v,
              value: v,
            })),
          },
          {
            title: "direction",
            value: "horizontal",
            options: ["horizontal", "vertical"].map((v) => ({
              title: v,
              value: v,
            })),
          },
        ],
        cssVariables: [
          {
            title: "padding",
            units: "px",
            options: [
              {
                title: "xs",
                value: 4,
              },
              {
                title: "sm",
                value: 8,
              },
              {
                title: "md",
                value: 16,
              },
              {
                title: "lg",
                value: 20,
              },
              {
                title: "xl",
                value: 24,
              },
            ],
          },
          {
            title: "border-radius",
            units: "px",
            options: [
              {
                title: "xs",
                value: 2,
              },
              {
                title: "sm",
                value: 4,
              },
              {
                title: "md",
                value: 6,
              },
              {
                title: "lg",
                value: 8,
              },
              {
                title: "xl",
                value: 12,
              },
            ],
          },
          {
            title: "font-size",
            units: "px",
            options: [
              {
                title: "xs",
                value: 10,
              },
              {
                title: "sm",
                value: 12,
              },
              {
                title: "md",
                value: 16,
              },
              {
                title: "lg",
                value: 20,
              },
              {
                title: "xl",
                value: 24,
              },
            ],
          },
        ],
        attributes: [
          {
            title: "inner text",
            value: "inner text content",
          },
        ],
        otherProps: [],
      },
      alert: {
        classProps: [
          {
            title: "type",
            value: "default",
            options: ["default", "info", "success", "warning", "error"].map(
              (v) => ({
                title: v,
                value: v,
              })
            ),
          },
        ],
        cssVariables: [],
        attributes: [],
        otherProps: [
          {
            title: "message",
            value: "message content",
            controlType: "input",
          },
          {
            title: "description",
            value: "description content",
            controlType: "input",
          },
          {
            title: "closable",
            value: false,
            controlType: "switch",
          },
          {
            title: "showIcon",
            value: false,
            controlType: "switch",
          },
        ],
      },
      badge: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      breadcrumb: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      button: {
        classProps: [
          {
            title: "type",
            value: "default",
            options: ["default", "dashed", "fill", "text", "link"].map((v) => ({
              title: v,
              value: v,
            })),
          },
          {
            title: "size",
            value: "default",
            options: ["sm", "default", "lg"].map((v) => ({
              title: v,
              value: v,
            })),
          },
          {
            title: "color",
            value: "default",
            options: ["default", "success", "warning", "danger", "info"].map(
              (v) => ({
                title: v,
                value: v,
              })
            ),
          },
          {
            title: "buttonContent",
            value: "textOnly",
            options: ["textOnly", "iconOnly", "iconLeft", "iconRight"].map(
              (v) => ({
                title: v,
                value: v,
              })
            ),
          },
        ],
        cssVariables: [],
        attributes: [],
        otherProps: [
          {
            title: "buttonText",
            value: "Settings",
            controlType: "input",
          },
          {
            title: "btnCircle",
            value: false,
            controlType: "switch",
          },
          {
            title: "disabled",
            value: false,
            controlType: "switch",
          },
        ],
      },
      card: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      checkbox: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      collapse: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      columns: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      details: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      divider: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      dropdown: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      floatbutton: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      form: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      input: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      list: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      menu: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      message: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      modal: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      notification: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      numberinput: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      popconfirm: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      popover: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      progress: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      radio: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      range: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      rate: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      select: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      switch: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      table: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      tabs: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      tag: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
      upload: {
        classProps: [],
        cssVariables: [],
        attributes: [],
        otherProps: [],
      },
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

export {
  config,
  styles,
  controls,
  properties,
  rootStyles,
  componentTypes,
  componentProperties,
};
