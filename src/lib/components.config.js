export const components = {
  button: {
    styles: {
      base: {
        width: "fit-content",
        padding: "8px",
        "--min-width": "100px",
        "--btn-height": "45px",
        "min-width": "var(--min-width)",
        height: "var(--btn-height)",
        "border-radius": "5px",
        border: "2.5px solid #E0E1E4",
        "box-shadow": "0px 0px 20px -20px",
        cursor: "pointer",
        "background-color": "white",
        transition: "all 0.2s ease-in-out 0ms",
        "user-select": "none",
        "font-family": "'Poppins', sans-serif",
        "&:hover": {
          "background-color": "#F2F2F2",
          "box-shadow": "0px 0px 20px -18px",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
        "&:disabled": {
          cursor: "not-allowed",
          "border-color": "transparent",
          "pointer-events": "none",
        },
      },
      disabled: {
        cursor: "not-allowed",
        "border-color": "transparent",
        "pointer-events": "none",
      },
      loading: {
        "border-color": "transparent",
        "pointer-events": "none",
      },
    },
    editable: [
      {
        title: "Min Width",
        var: "--min-width",
        type: "number",
        value: "100",
        units: "px",
        style: "base",
      },
      {
        title: "Height",
        var: "--btn-height",
        type: "number",
        value: "45",
        units: "px",
        style: "base",
      },
    ],
    html: `<button>
    Click
</button>`,
    cssClassname: "button",
    cssStyles: "",
    component: "Button",
    title: "Button",
    properties: {
      label: "",
      backgroundColor: "blue",
      color: "white",
    },
    actions: {
      onClick: () => {},
    },
  },
  checkbox: {
    styles: ``,
    html: ``,
    component: "Checkbox",
    title: "Checkbox",
    properties: {
      label: "",
      checked: false,
    },
    actions: {
      onChange: () => {},
    },
  },
};
