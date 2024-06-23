import { transformPayload } from "./utils";
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
          options: ["xs", "sm", "md", "lg", "xl"].map((v) => ({
            title: v,
            key: v,
            value: v,
          })),
        },
        {
          title: "direction",
          key: "direction",
          value: "horizontal",
          options: ["horizontal", "vertical"].map((v) => ({
            title: v,
            key: v,
            value: v,
          })),
        },
      ],
      cssVariables: [
        {
          title: "padding",
          key: "padding",
          units: "px",
          options: [
            {
              title: "xs",
              key: "xs",
              value: 4,
            },
            {
              title: "sm",
              key: "sm",
              value: 8,
            },
            {
              title: "md",
              key: "md",
              value: 16,
            },
            {
              title: "lg",
              key: "lg",
              value: 20,
            },
            {
              title: "xl",
              key: "xl",
              value: 24,
            },
          ],
        },
        {
          title: "border radius",
          key: "border-radius",
          units: "px",
          options: [
            {
              title: "xs",
              key: "xs",
              value: 2,
            },
            {
              title: "sm",
              key: "sm",
              value: 4,
            },
            {
              title: "md",
              key: "md",
              value: 6,
            },
            {
              title: "lg",
              key: "lg",
              value: 8,
            },
            {
              title: "xl",
              key: "xl",
              value: 12,
            },
          ],
        },
        {
          title: "font size",
          key: "font-size",
          units: "px",
          options: [
            {
              title: "xs",
              key: "xs",
              value: 10,
            },
            {
              title: "sm",
              key: "sm",
              value: 12,
            },
            {
              title: "md",
              key: "md",
              value: 16,
            },
            {
              title: "lg",
              key: "lg",
              value: 20,
            },
            {
              title: "xl",
              key: "xl",
              value: 24,
            },
          ],
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
          options: ["default", "info", "success", "warning", "error"].map(
            (v) => ({
              title: v,
              key: v,
              value: v,
            })
          ),
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
          options: [
            {
              title: "x",
              key: "x",
              value: 12,
            },
            {
              title: "y",
              key: "y",
              value: 8,
            },
          ],
        },
      ],
      otherProps: [
        {
          title: "message",
          key: "message",
          value: "message content",
          controlType: "input",
        },
        {
          title: "description",
          key: "description",
          value: "description content",
          controlType: "input",
        },
        {
          title: "closable",
          key: "closable",
          value: false,
          controlType: "switch",
        },
        {
          title: "show icon",
          key: "showIcon",
          value: false,
          controlType: "switch",
        },
      ],
    },
    badge: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "dot",
          options: ["dot", "withNumber"].map((v) => ({
            title: v,
            key: v,
            value: v,
          })),
        },
        {
          title: "size",
          key: "size",
          value: "md",
          options: ["md", "sm"].map((v) => ({
            title: v,
            key: v,
            value: v,
          })),
        },
        {
          title: "badge content",
          key: "content",
          value: "box",
          options: ["box", "text"].map((v) => ({
            title: v,
            key: v,
            value: v,
          })),
        },
      ],
      cssVariables: transformPayload({
        items: [
          [
            "content height",
            "count height",
            "count height sm",
            "count border radius",
            "count border radius sm",
            "dot height",
          ],
          [40, 20, 16, 12, 8, 8],
        ],
        extras: [{ units: "px" }],
        keyConnector: "-",
      }),
      otherProps: [
        {
          title: "badge count",
          key: "badgeCount",
          value: 12,
          controlType: "number",
        },
        {
          title: "badge content",
          key: "badgeContent",
          value: "text content",
          controlType: "input",
        },
      ],
    },
    breadcrumb: {
      classProps: [],
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
            items: ["default", "dashed", "fill", "text", "link"],
            keyConnector: "camel",
          }),
        },
        {
          title: "size",
          key: "size",
          value: "default",
          options: transformPayload({
            items: ["sm", "default", "lg"],
            keyConnector: "camel",
          }),
        },
        {
          title: "color",
          key: "color",
          value: "default",
          options: transformPayload({
            items: ["default", "success", "warning", "danger", "info"],
            keyConnector: "camel",
          }),
        },
        {
          title: "buttonContent",
          key: "buttonContent",
          value: "textOnly",
          options: transformPayload({
            items: ["text only", "icon only", "icon left", "icon right"],
            keyConnector: "camel",
          }),
        },
      ],
      cssVariables: [],
      otherProps: [
        {
          title: "button text",
          key: "buttonText",
          value: "Settings",
          controlType: "input",
        },
        {
          title: "Circle button",
          key: "btnCircle",
          value: false,
          controlType: "switch",
        },
        {
          title: "disabled",
          key: "disabled",
          value: false,
          controlType: "switch",
        },
      ],
    },
    card: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    checkbox: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    collapse: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    columns: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    details: {
      classProps: [],
      cssVariables: [],
      otherProps: [],
    },
    divider: {
      classProps: [],
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
