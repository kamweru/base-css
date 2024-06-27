import { transformPayload, camel, hypenate } from "./utils";
export const cssUnits = ["px", "rem", "em", "pt"].map((v) => ({
  title: v,
  value: v,
}));
export const sampleData = {
  tabs: ["Home", "About", "Contact"].map((title) => ({ title, value: title })),
};
const config = {
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
          key: "size",
          value: "md",
          options: transformPayload({
            title: ["xs", "sm", "md", "lg", "xl"],
            value: "title",
            key: "title",
          }),
        },
        {
          title: "direction",
          key: "direction",
          value: "horizontal",
          options: transformPayload({
            title: ["horizontal", "vertical"],
            value: "title",
            key: "title",
          }),
        },
      ],
      cssVariables: [
        {
          title: "padding",
          key: "padding",
          units: "px",
          options: transformPayload({
            title: ["xs", "sm", "md", "lg", "xl"],
            value: [4, 8, 16, 20, 24],
            key: "title",
          }),
        },
        {
          title: "border radius",
          key: "border-radius",
          units: "px",
          options: transformPayload({
            title: ["xs", "sm", "md", "lg", "xl"],
            value: [2, 4, 6, 8, 12],
            key: "title",
          }),
        },
        {
          title: "font size",
          key: "font-size",
          units: "px",
          options: transformPayload({
            title: ["xs", "sm", "md", "lg", "xl"],
            value: [10, 12, 16, 20, 24],
            key: "title",
          }),
        },
      ],
      otherProps: [],
    },
    alert: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "default",
          options: transformPayload({
            title: ["default", "info", "success", "warning", "error"],
            value: "title",
            key: (title) => hypenate(title),
          }),
        },
      ],
      cssVariables: [
        {
          title: "border radius",
          key: "border-radius",
          units: "px",
          value: 4,
        },
        {
          title: "padding",
          key: "padding",
          units: "px",
          options: transformPayload({
            title: ["x", "y"],
            value: [12, 8],
            key: (title) => hypenate(title),
          }),
        },
      ],
      otherProps: transformPayload({
        title: ["message", "description", "closable", "show icon"],
        value: ["message content", "description content", false, false],
        controlType: ["input", "input", "switch", "switch"],
        key: (title) => camel(title),
      }),
    },
    badge: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "dot",
          options: transformPayload({
            title: ["dot", "with number"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
        {
          title: "size",
          key: "size",
          value: "md",
          options: transformPayload({
            title: ["md", "sm"],
            value: "title",
            key: (title) => hypenate(title),
          }),
        },
        {
          title: "badge content",
          key: "content",
          value: "box",
          options: transformPayload({
            title: ["box", "text"],
            value: "title",
            key: (title) => hypenate(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: [
          "content height",
          "count height",
          "count height sm",
          "count border radius",
          "count border radius sm",
          "dot height",
        ],
        value: [40, 20, 16, 12, 8, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: transformPayload({
        title: ["badge count", "badge content"],
        value: [12, "text content"],
        key: (title) => camel(title),
        controlType: ["number", "input"],
      }),
    },
    breadcrumb: {
      classProps: [
        {
          title: "separator",
          key: "separator",
          value: "/",
        },
      ],
      cssVariables: transformPayload({
        title: [
          "separator margin inline",
          "link border radius",
          "link padding inline",
        ],
        value: [8, 4, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    button: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "default",
          options: transformPayload({
            title: ["default", "dashed", "fill", "text", "link"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            title: ["sm", "default", "lg"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
        {
          title: "color",
          key: "color",
          value: "default",
          options: transformPayload({
            title: ["default", "success", "warning", "danger", "info"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
        {
          title: "button content",
          key: "buttonContent",
          value: "textOnly",
          options: transformPayload({
            title: ["text only", "icon only", "icon left", "icon right"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: [
          "padding inline",
          "padding inline lg",
          "padding inline sm",
          "padding block",
          "padding block sm",
          "padding block lg",
          "height",
          "height sm",
          "height lg",
          "border radius",
          "border radius sm",
          "border radius lg",
        ],
        value: [15, 15, 7, 4, 0, 7, 32, 24, 40, 6, 4, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: transformPayload({
        title: ["button text", "button circle", "disabled"],
        value: ["settings", false, false],
        controlType: ["input", "switch", "switch"],
        key: (title) => camel(title),
      }),
    },
    card: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "default",
          options: transformPayload({
            title: ["default", "with head", "with footer", "head and footer"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            title: ["sm", "default"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: ["padding", "padding sm", "border radius"],
        value: [16, 12, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    checkbox: {
      classProps: [
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            title: ["sm", "default", "lg"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: [
          "size",
          "size sm",
          "size lg",
          "border-radius",
          "border radius sm",
          "border radius lg",
          "span padding inline",
          "span padding inline sm",
          "span padding inline lg",
        ],
        value: [16, 14, 24, 4, 3, 5, 8, 6, 12],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: transformPayload({
        title: ["checked", "indeterminate", "disabled"],
        value: [false, false, false],
        controlType: ["switch", "switch", "switch"],
        key: (title) => camel(title),
      }),
    },
    collapse: {
      classProps: [
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            title: ["sm", "default", "lg"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: [
          "padding inline",
          "padding block",
          "padding block lg",
          "padding inline lg",
          "padding inline sm",
          "padding block sm",
          "min height",
          "min height sm",
          "min height lg",
          "border radius",
          "border radius sm",
          "border radius lg",
        ],
        value: [15, 4, 7, 15, 7, 0, 32, 24, 40, 6, 4, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    columns: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    details: {
      classProps: [
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            title: ["sm", "default", "lg"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: [
          "padding inline",
          "padding block",
          "padding block lg",
          "padding inline lg",
          "padding inline sm",
          "padding block sm",
          "min height",
          "min height sm",
          "min height lg",
          "border radius",
          "border radius sm",
          "border radius lg",
        ],
        value: [15, 4, 7, 15, 7, 0, 32, 24, 40, 6, 4, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    divider: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "default",
          options: transformPayload({
            title: [
              "default",
              "vertical",
              "text center",
              "text right",
              "text left",
            ],
            value: (title) => camel(title),
            key: (title) => hypenate(title),
          }),
        },
      ],
      cssVariables: [
        ...transformPayload({
          title: ["text margin inline", "vertical margin inline"],
          value: [8, 8],
          units: "px",
          key: (title) => hypenate(title),
        }),
        ...transformPayload({
          title: ["text padding inline"],
          value: [1],
          units: "em",
          key: (title) => hypenate(title),
        }),
        ...transformPayload({
          title: ["orientation margin"],
          value: [0.05],
          step: "0.01",
          key: (title) => hypenate(title),
        }),
      ],
      otherProps: [],
    },
    dropdown: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["padding block", "padding inline", "menu item border radius"],
        value: [5, 12, 4],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [
        {
          title: "trigger action",
          key: "triggerAction",
          value: "click",
          controlType: "radio",
          options: transformPayload({
            title: ["click", "hover"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
      ],
    },
    field: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    floatbutton: {
      classProps: [],
      cssVariables: transformPayload({
        title: [
          "bottom position",
          "right position",
          "width",
          "square border radius",
          "icon font size",
        ],
        value: [48, 32, 40, 8, 24],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    form: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "vertical",
          options: transformPayload({
            title: ["vertical", "inline", "horizontal"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: [],
      otherProps: [],
    },
    input: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    list: {
      classProps: [],
      cssVariables: transformPayload({
        title: [
          "border radius",
          "border radius sm",
          "border radius lg",
          "padding inline",
          "padding block",
          "padding inline sm",
          "padding block sm",
          "padding block lg",
          "padding inline lg",
        ],
        value: [8, 4, 16, 20, 12, 12, 7, 16, 24],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    menu: {
      classProps: [],
      cssVariables: transformPayload({
        title: [
          "horizontal line height",
          "item padding inline",
          "icon margin inline",
        ],
        value: [56, 20, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    message: {
      classProps: [],
      cssVariables: transformPayload({
        title: [
          "border radius",
          "padding inline",
          "padding block",
          "icon margin inline",
        ],
        value: [6, 12, 8, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    modal: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["border radius"],
        value: [6],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    notification: {
      classProps: [],
      cssVariables: transformPayload({
        title: [
          "padding inline",
          "padding block",
          "border radius",
          "icon font size",
          "icon margin inline end",
          "close button padding",
          "close button border radius",
        ],
        value: [16, 12, 8, 24, 12, 3, 4],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    numberinput: {
      classProps: [],
      cssVariables: transformPayload({
        title: [
          "handler wrap width",
          "button arrow size",
          "height",
          "height sm",
          "height lg",
          "border radius",
          "border radius sm",
          "border radius lg",
          "padding inline",
          "padding block",
          "padding inline sm",
          "padding block sm",
          "padding inline lg",
          "padding block lg",
        ],
        value: [22, 5, 32, 24, 40, 6, 4, 8, 11, 4, 7, 0, 15, 7],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    option: {
      classProps: [
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            title: ["default", "sm", "lg"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: [],
      otherProps: transformPayload({
        title: ["active"],
        value: [false],
        controlType: ["switch"],
        key: (title) => camel(title),
      }),
    },
    popconfirm: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["padding", "icon size", "margin inline", "margin block"],
        value: [16, 20, 8, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    popover: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["wrapper padding", "wrapper border radius"],
        value: [4, 6],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    progress: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["height", "border radius", "value border radius"],
        value: [8, 16, 16],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    radio: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    range: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    rate: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["label font size"],
        value: [20],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    select: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    switch: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    table: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["cell padding inline", "cell padding block"],
        value: [12, 16],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    tabs: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["item margin bottom"],
        value: [-1],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    tag: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["margin inline"],
        value: [8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    upload: {
      classProps: [],
      cssVariables: transformPayload({
        title: ["padding inline", "padding block", "border radius"],
        value: [16, 12, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
  },
};

export { config };
