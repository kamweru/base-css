import { transformPayload, camel, hypenate, uuid } from "./utils";
let defaultControl = {
    control: "input",
    type: "text",
    placeholder: "",
    label: "",
    id: uuid(8),
    value: "",
    defaultValue: "",
    valid: false,
    validationRules: {},
    messages: {
      errors: [],
      warnings: [],
      success: [],
    },
  },
  masterColors = [
    "brown",
    "orange",
    "gold",
    "yellow",
    "grass",
    "green",
    "beryl",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "crimson",
    "red",
  ];
export function getRandomColors(numColors) {
  // Make a copy of the colors array to avoid modifying the original
  const colorsCopy = masterColors.slice();

  // Check for invalid input
  if (numColors < 1) {
    throw new Error("Number of colors must be at least 1");
  }

  const randomColors = [];
  for (let i = 0; i < numColors; i++) {
    // Get a random index within the remaining colors array
    const randomIndex = Math.floor(Math.random() * colorsCopy.length);

    // Extract the color at the random index and remove it from the copy
    const randomColor = colorsCopy.splice(randomIndex, 1)[0];

    // Add the random color to the final result array
    randomColors.push(randomColor);
  }

  return randomColors;
}
export const cssUnits = ["px", "rem", "em", "pt"].map((v) => ({
  title: v,
  value: v,
}));
export const sampleData = {
  features: [
    {
      title: "30+ Free Components & Examples",
      description:
        "Hundreds of component examples for all your website needs that meet accessibility criteria.",
      icon: "mage:file-2",
    },
    {
      title: "Universal Framework Compatibility",
      description:
        "Base CSS is fully compatible wherever CSS is in action, from React to Vue and beyond.",
      icon: "grommet-icons:multiple",
    },
    {
      title: "Dark Mode",
      description:
        "All components include a dark variant that lets you style your site differently when dark mode is enabled.",
      icon: "tdesign:mode-dark",
    },
  ],
  landing: {
    "landing 1": {
      explore: {
        title: "Explore more ways to use our solutions",
        list: [
          {
            icon: "carbon:filter",
            title: "For Hybrid Sales",
            description: "Align your team and strengthen client relationships",
            color: getRandomColors(3)[Math.floor(Math.random() * 3)],
          },
          {
            icon: "uit:wallet",
            title: "For UX & Design",
            description:
              "Map customer journeys and easily gather feedback on designs",
            color: getRandomColors(3)[Math.floor(Math.random() * 3)],
          },
          {
            icon: "gg:list",
            title: "For Agile Workflows",
            description: "Collaborate wherever and whenever you work",
            color: getRandomColors(3)[Math.floor(Math.random() * 3)],
          },
          {
            icon: "quill:chat",
            title: "For Consultants & Agencies",
            description: "Engage teams and make big things happen",
            color: getRandomColors(3)[Math.floor(Math.random() * 3)],
          },
        ],
      },
      hero: {
        title: "Cascade Tools",
        subtitle: "for universities",
        description:
          "Experience the power of simplicity and efficiency with our intuitive tools designed to streamline your workflow, save time, and enhance your productivity.",
        cta: "Get Started",
      },
      features: [
        {
          subtitle: "Forms",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "Customizable Online Data Collection Forms",
          description:
            "Effortlessly gather data from students, faculty, and staff.",
        },
        {
          subtitle: "Data analysis",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "Data Analysis Tools",
          description:
            "Visualize trends, analyze results, and make informed decisions.",
        },
        {
          subtitle: "E-Filing",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "Office E - File Management",
          description: "Organize documents securely and access them anytime.",
        },
        {
          subtitle: "Calendar",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "Calendar for Scheduling Tasks and Staff",
          description: "Efficiently manage schedules and shifts.",
        },
        {
          subtitle: "Minutes",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "Meeting Minutes and Resolutions",
          description: "Keep track of important discussions and decisions.",
        },
        {
          subtitle: "Tracking",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "File and Memo Tracking",
          description: "Centralize communication and collaboration.",
        },
        {
          subtitle: "Audits",
          image: "",
          tags: ["#Features", "#What's new"],
          title: "Audits and Corrective Action Plans",
          description: "Ensure compliance and continuous improvement.",
        },
      ],
      testimonials: [
        {
          name: "Dr. Amelia Johnson",
          jobTitle: "Dean of Admissions",
          company: "Stanford University",
          testimonial:
            "Cascade Tools has been a game-changer for our admissions department. The customizable online forms have streamlined our application process, saving us countless hours. The data analysis tools provide valuable insights into applicant demographics and trends, allowing us to make informed decisions about our recruitment strategies.",
          color: "grass",
        },
        {
          name: "Mark Rodriguez",
          jobTitle: "IT Director",
          company: "University of North Carolina",
          testimonial:
            "Before Cascade Tools, managing our university's documents was a nightmare. Now, with the centralized e-filing system, everything is organized and accessible. The system is incredibly user-friendly, and our staff loves how easy it is to find and share documents.",
          color: "sky",
        },
        {
          name: "Professor Sarah Chen",
          jobTitle: "Department Chair",
          company: "History Department, University of California, Berkeley",
          testimonial:
            "Cascade Tools has transformed our department meetings. The ability to capture meeting minutes and resolutions electronically has saved us so much time and ensured everyone is on the same page. It's also a great way to hold individuals accountable for action items.",
          color: "yellow",
        },
        {
          name: "David Hernandez",
          jobTitle: "Internal Auditor",
          company: "Massachusetts Institute of Technology",
          testimonial:
            "Cascade Tools has revolutionized our internal audit process. The pre-built templates and corrective action plan tools make conducting audits much more efficient. We can now focus our resources on deeper analysis and improvement initiatives.",
          color: "crimson",
        },
        {
          name: "Emily Jones",
          jobTitle: "Student Government President",
          company: "University of Michigan",
          testimonial:
            "Cascade Tools has been a valuable resource for the student government. We use the calendar to schedule events and meetings, and the file and memo tracking system helps us keep track of important documents and proposals. The platform is easy to use and accessible to everyone on campus.",
          color: "orange",
        },
      ],
      footer: [
        {
          title: "Solutions",
          list: ["Marketing", "Analytics", "Commerce", "Insights"],
        },
        {
          title: "Support",
          list: ["Pricing", "Documentation", "Guides", "API Status"],
        },
        {
          title: "Company",
          list: ["About", "Blog", "Jobs", "Press", "Partners"],
        },
        {
          title: "Legal",
          list: ["Claim", "Privacy", "Terms"],
        },
      ],
    },
  },
  table: {
    "sample table 1": {
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "size",
          key: "size",
        },
        {
          title: "job title",
          key: "job",
        },
      ],
      data: [
        {
          name: "Jane Doe",
          size: "large",
          job: "UX Designer",
        },
        {
          name: "John Doe",
          size: "large",
          job: "UX Designer",
        },
      ],
      controls: [
        { label: "name", key: "name" },
        { label: "size", key: "size" },
        { label: "job title", key: "job" },
      ].map((v) => ({
        ...defaultControl,
        id: uuid(8),
        label: v.label,
        placeholder: v.label,
        key: v.key,
      })),
    },
  },
};
export const alertIcons = {
  info: "raphael:info",
  warning: "ic:round-warning",
  danger: "material-symbols:error",
  success: "mdi:success-circle",
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
          value: "info",
          options: transformPayload({
            title: ["info", "success", "warning", "danger"],
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "vertical",
          options: transformPayload({
            title: ["vertical", "horizontal"],
            value: (title) => camel(title),
            key: (title) => camel(title),
          }),
        },
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
      cssVariables: transformPayload({
        title: [
          "border radius",
          "border radius sm",
          "border radius lg",
          "padding inline",
          "padding inline sm",
          "padding inline lg",
          "padding block",
          "padding block sm",
          "padding block lg",
          "margin inline",
          "margin inline sm",
          "margin inline lg",
          "margin block",
          "margin block sm",
          "margin block lg",
          "height",
          "height sm",
          "height lg",
        ],
        value: [8, 4, 12, 8, 4, 12, 8, 4, 12, 8, 4, 12, 8, 4, 12, 32, 24, 40],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    floatbutton: {
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
      otherProps: [],
    },
    input: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill", "underline", "borderless"],
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
      ],
      cssVariables: transformPayload({
        title: [
          "height",
          "height sm",
          "height lg",
          "padding block",
          "padding inline",
          "padding block sm",
          "padding inline sm",
          "padding block lg",
          "padding inline lg",
          "border radius",
          "border radius sm",
          "border radius lg",
        ],
        value: [32, 24, 40, 4, 11, 0, 7, 7, 15, 6, 4, 8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: transformPayload({
        title: ["disabled", "invalid"],
        value: [false, false],
        controlType: ["switch", "switch"],
        key: (title) => camel(title),
      }),
    },
    list: {
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill", "underline", "borderless"],
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
      ],
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "info",
          options: transformPayload({
            title: ["info", "warning", "success", "danger"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill", "underline", "borderless"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: ["border radius"],
        value: [6],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    notification: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
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
      ],
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
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
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: ["height", "border radius", "value border radius"],
        value: [8, 16, 16],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    radio: {
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
      cssVariables: transformPayload({
        title: [
          "size",
          "size sm",
          "size lg",
          "span padding inline",
          "span padding inline sm",
          "span padding inline lg",
        ],
        value: [16, 14, 24, 8, 6, 12],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: transformPayload({
        title: ["checked", "disabled"],
        value: [false, false],
        controlType: ["switch", "switch"],
        key: (title) => camel(title),
      }),
    },
    range: {
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
      cssVariables: transformPayload({
        title: [
          "slider track height",
          "slider thumb size",
          "slider track border radius",
        ],
        value: [4, 10, 16],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    rate: {
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
      cssVariables: transformPayload({
        title: ["label font size"],
        value: [20],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    select: {
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
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: [
          "height",
          "handler-wrap-width",
          "button-arrow-size",
          "height",
          "height-sm",
          "height-lg",
          "border-radius",
          "border-radius-sm",
          "border-radius-lg",
          "padding-inline",
          "padding-block",
          "padding-inline-sm",
          "padding-block-sm",
          "padding-inline-lg",
          "padding-block-lg",
        ],
        value: [32, 22, 5, 32, 24, 40, 6, 4, 8, 11, 4, 7, 0, 15, 7],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    switch: {
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
      cssVariables: transformPayload({
        title: [
          "width",
          "height",
          "width-sm",
          "height-sm",
          "handle-size",
          "handle-size-sm",
          "handle-offset",
          "handle-offset-sm",
        ],
        value: [40, 22, 28, 16, 18, 12, 2, 1],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    table: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
        {
          title: "size",
          key: "size",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: ["cell padding inline", "cell padding block"],
        value: [12, 16],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    tabs: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
        {
          title: "size",
          key: "size",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: ["item margin bottom"],
        value: [-1],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    tag: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
      cssVariables: transformPayload({
        title: ["margin inline"],
        value: [8],
        units: "px",
        key: (title) => hypenate(title),
      }),
      otherProps: [],
    },
    upload: {
      classProps: [
        {
          title: "type",
          key: "type",
          value: "outline",
          options: transformPayload({
            title: ["outline", "fill"],
            value: "title",
            key: (title) => camel(title),
          }),
        },
      ],
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
