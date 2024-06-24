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
      cssVariables: [],
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
      classProps: [],
      cssVariables: [],
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
              "with text",
              "vertical",
              "text right",
              "text left",
            ],
            value: (title) => camel(title),
            key: (title) => hypenate(title),
          }),
        },
      ],
      cssVariables: [],
      otherProps: [],
    },
    dropdown: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    floatbutton: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    form: {
      classProps: [],
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
      cssVariables: [],
      otherProps: [],
    },
    menu: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    message: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    modal: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    notification: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    numberinput: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    popconfirm: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    popover: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    progress: {
      classProps: [],
      cssVariables: [],
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
      cssVariables: [],
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
      cssVariables: [],
      otherProps: [],
    },
    tabs: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    tag: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    upload: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
  },
};

export { config };
