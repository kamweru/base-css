import { capitalizeFirstLetter } from "./utils";

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
const controlTypes = {
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
  },
  styles = {
    button: {
      baseClass: {
        default: "btn",
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
  },
  properties = Object.keys(styles).reduce((acc, controlKey) => {
    let classesArray = [];
    Object.keys(styles[controlKey]).forEach((controlKeyItem) => {
      if (
        styles[controlKey][controlKeyItem] &&
        styles[controlKey][controlKeyItem].default
      ) {
        // if (controlKeyItem === "baseClass") {
        //   classesArray.push(styles[controlKey][controlKeyItem]);
        // } else {
        classesArray.push(styles[controlKey][controlKeyItem].default);
        // }
      }
      acc[controlKey] = {
        classes: classesArray.join(" "),
        placeholder: "placeholder",
        value: "",
      };
      // acc[controlKey]["classes"] = acc[controlKey]["classes"].join(" ");
      // if (controlTypes[controlKeyItem]) {
      //   acc[controlKey][controlKeyItem] = {
      //     title: controlKeyItem,
      //     defaultValue:
      //       controlTypes[controlKeyItem] === "switch" ? false : "default",
      //     controlType: controlTypes[controlKeyItem],
      //     options: Object.keys(styles[controlKey][controlKeyItem]).map(
      //       (key) => ({
      //         title: key,
      //         value: controlTypes[controlKeyItem] === "switch" ? false : key,
      //       })
      //     ),
      //   };
      // }
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
// {
//   button: {
//     classes: "",
//     placeholder: "",
//     value: "",
//   },
//   input: {
//     classes: "",
//     placeholder: "",
//     value: "",
//   },
// };
export const components = {
  button: {
    // cssVars: [
    //   {
    //     title: "unit size",
    //     value: 1,
    //     units: "rem",
    //     cssVar: "--unit-size",
    //   },
    //   {
    //     title: "button height xs",
    //     value: 30,
    //     units: "px",
    //     cssVar: "--button-height-xs",
    //   },
    // ],
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
    // "--input-padding": {
    //   title: "input padding",
    //   value: 32,
    //   units: "px",
    //   cssVar: "--input-padding",
    // },
    // "--input-height-sm": {
    //   title: "input height sm",
    //   value: 24,
    //   units: "px",
    //   cssVar: "--input-height-sm",
    // },
  },
};

export { styles, controls, properties, rootStyles };
