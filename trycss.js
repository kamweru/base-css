const controlTypes = {
    variants: "select",
    sizes: "select",
    states: "switch",
  },
  styles = {
    input: {
      baseClass: "input",
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
  },
  controls = {
    ...Object.keys(styles).reduce((acc, controlKey) => {
      acc[controlKey] = {};
      Object.keys(styles[controlKey]).forEach((key) => {
        if (controlTypes[key]) {
          acc[controlKey][key] = {
            title: key,
            defaultValue: controlTypes[key] === "switch" ? false : "default",
            controlType: controlTypes[key],
            options:
              controlTypes[key] === "select"
                ? Object.keys(styles[controlKey][key]).map((key) => ({
                    title: key,
                    value: key,
                  }))
                : undefined,
          };
        }
      });
      return acc;
    }, {}),
  },
  properties = {
    input: {
      classes: "",
      placeholder: "",
      value: "",
    },
  };
console.log(controls);
