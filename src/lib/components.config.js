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
let rawData = {
  users: {
    sections: [
      {
        title: "E-Learning & ICT",
        value: "E-Learning & ICT",
        id: "LVSMzU4BbHI4dIp39TUb",
      },
      {
        title: "Library",
        value: "Library",
        id: "iTJj2CiSZidEBP54q9vs",
      },
      {
        title: "Ombudsman",
        value: "Ombudsman",
        id: "EfMRJFiRoaswQQVXMuxO",
      },
      {
        title: "Dean of Students",
        value: "Dean of Students",
        id: "hEsz0EmeUnDdLUakXRnE",
      },
    ],
    roles: [
      {
        title: "superadmin",
        value: "superadmin",
        id: "2kMjKcswOB7vmi58RQpA",
      },
      {
        title: "admin",
        value: "admin",
        id: "6fmvbuWUHC6tISzDoQEq",
      },
      {
        title: "secretary",
        value: "secretary",
        id: "4FtloYPgEUUnVssk4pKl",
      },
      {
        title: "auditor",
        value: "auditor",
        id: "vxatIFICvwbc8vKCxLFZ",
      },
    ],
    users: [
      {
        displayName: "jane kamal",
        email: "janekamal@gmail.com",
        id: "HLWTQmPYjY0h2VtHcFDw",
        role: "superadmin",
        sectionId: "LVSMzU4BbHI4dIp39TUb",
      },
      {
        displayName: "bob seymour",
        email: "bobseymour@gmail.com",
        id: "ggruXBj8YXSdAAvc05bx",
        role: "admin",
        sectionId: "iTJj2CiSZidEBP54q9vs",
      },
      {
        displayName: "steve gordon",
        email: "stevegordon@gmail.com",
        id: "oRcU6FFBdZu3GY3y3HrQ",
        role: "secretary",
        sectionId: "EfMRJFiRoaswQQVXMuxO",
      },
      {
        displayName: "vanessa miller",
        email: "vanessamiller@gmail.com",
        id: "FGHP0KqRSUDKBQOaBs8n",
        role: "auditor",
        sectionId: "hEsz0EmeUnDdLUakXRnE",
      },
    ],
  },
  folders: [
    "admissions",
    "audits",
    "user satisfaction surveys",
    "job satisfaction surveys",
  ],
  forms: [
    ["2022 admissions", "2024 admissions"],
    ["2023 internal audit", "2024 internal audit"],
    [
      "ict user satisfaction survey 2023",
      "library user satisfaction survey 2024",
    ],
    ["2022 job satisfaction survey", "2023 job satisfaction survey"],
  ],
  sections: [
    ["bio information", "contact information", "previous eduction"],
    ["audit questions"],
    ["user satisfaction"],
    ["job satisfaction"],
  ],
  questions: [
    ["first name", "last name", "age", "date of birth"],
    [
      "Why did you apply for this position?",
      "Why are internal audits necessary?",
      "Explain the steps to prepare for and perform an internal audit.",
      "Can you describe substantive tests?",
      "What should you do after an internal audit?",
    ],
    [
      "How often do you visit the library?",
      "How often do you use the library website?",
      "How satisfied are you with the opening hours of the library?",
      "How satisfied are you with the following library services?",
      "How satisfied are you with the range of literature available in the library?",
    ],
    [
      "Do you enjoy our company’s culture?",
      "Do you feel connected to your co-workers?",
      "Do you enjoy working with your colleagues?",
    ],
  ],
};
export const sampleData = {
  calendar: {
    "calendar 1": {
      events: [
        {
          title: "Developing software for Raspberry Pi",
          description: "Developing software for Raspberry Pi",
          start: 1719947643125,
          end: 1720034043125,
          id: "A5srGMV55eiN",
        },
        {
          title: "using Python, C and bash languages. ",
          description: "using Python, C and bash languages. ",
          start: 1719861243125,
          end: 1719947643125,
          id: "l4R7OtpjYfj7",
        },
        {
          title: "Those systems are used in APM OnDynamic",
          description: "Those systems are used in APM OnDynamic",
          start: 1719774843125,
          end: 1719861243125,
          id: "n2pmpxsKfFCf",
        },
        {
          title: "Developing Android app in Java and Kotlin. ",
          description: "Developing Android app in Java and Kotlin. ",
          start: 1719688443125,
          end: 1719774843125,
          id: "vpdELtTgi0Fe",
        },
        {
          title: "It’s the mobile app of TMS frameLOGIC ",
          description: "It’s the mobile app of TMS frameLOGIC ",
          start: 1719602043125,
          end: 1719688443125,
          id: "pHfD4lKF9D5E",
        },
        {
          title: "system besides: onboarding, distributing ",
          description: "system besides: onboarding, distributing ",
          start: 1719515643125,
          end: 1719602043125,
          id: "Ma5SeERFfSZI",
        },
        {
          title: "teamwork, modifying CyanogenMod system, ",
          description: "teamwork, modifying CyanogenMod system, ",
          start: 1719429243125,
          end: 1719515643125,
          id: "1aMJotRwyKPO",
        },
        {
          title: "applying changes on servers (Java)",
          description: "applying changes on servers (Java)",
          start: 1719342843125,
          end: 1719429243125,
          id: "a53vRDjKfdnD",
        },
        {
          title: "Developing BlackBerry Work in Java and Kotlin. ",
          description: "Developing BlackBerry Work in Java and Kotlin. ",
          start: 1719256443125,
          end: 1719342843125,
          id: "WGFCsPmacAjV",
        },
        {
          title: "This app contains e-mail client, calendar, ",
          description: "This app contains e-mail client, calendar, ",
          start: 1719170043125,
          end: 1719256443125,
          id: "PdC9DUFR5UsR",
        },
        {
          title: "contact manager and more. Work is known of its ",
          description: "contact manager and more. Work is known of its ",
          start: 1719083643125,
          end: 1719170043125,
          id: "zK8zxQzKa7lq",
        },
        {
          title: "security. It has a lot of legacy code, ",
          description: "security. It has a lot of legacy code, ",
          start: 1718997243125,
          end: 1719083643125,
          id: "J6gihAHrp8ID",
        },
        {
          title: "but new features are developed in Kotlin ",
          description: "but new features are developed in Kotlin ",
          start: 1718910843125,
          end: 1718997243125,
          id: "xs9Dq5OfdXvN",
        },
        {
          title: "using MVVM architecture",
          description: "using MVVM architecture",
          start: 1718824443125,
          end: 1718910843125,
          id: "zIJSLx9GHs9Z",
        },
        {
          title: "Developing a simple app for reading Bible. ",
          description: "Developing a simple app for reading Bible. ",
          start: 1718738043125,
          end: 1718824443125,
          id: "ab7PxgWYt26C",
        },
        {
          title: "It’s written in Kotlin and it uses ObjectBox. ",
          description: "It’s written in Kotlin and it uses ObjectBox. ",
          start: 1718651643125,
          end: 1718738043125,
          id: "mfnBZu7LU138",
        },
        {
          title: "Bible Lite isn't public yet",
          description: "Bible Lite isn't public yet",
          start: 1718565243125,
          end: 1718651643125,
          id: "BDizQ9yxVxR1",
        },
      ],
    },
  },
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
  application: {
    forms: rawData.folders.reduce((acc, folder, folderIndex) => {
      let folderId = uuid(12);
      acc[folderId] = {
        id: folderId,
        title: folder,
        description: folder,
        forms: rawData.forms[folderIndex].reduce((acc, form, formIndex) => {
          let formId = uuid(12);
          acc[formId] = {
            id: formId,
            title: form,
            description: form,
            folderId: folderId,
            sections: rawData.sections[formIndex].reduce(
              (acc, section, sectionIndex) => {
                let sectionId = uuid(12);
                acc[sectionId] = {
                  id: sectionId,
                  title: section,
                  description: section,
                  formId: formId,
                  folderId: folderId,
                  questions: rawData.questions[sectionIndex].reduce(
                    (acc, question) => {
                      let questionId = uuid(12);
                      acc[questionId] = {
                        id: questionId,
                        formId: formId,
                        folderId: folderId,
                        sectionId: sectionId,
                        controlType: "input",
                        conditions: undefined,
                        dataType: "text",
                        placeholder: "",
                        questionText: question,
                        createdAt: Date.now(),
                        createdBy: "",
                        updatedAt: "",
                        updatedBy: "",
                        hint: "",
                        answerValue: "",
                        defaultValue: "",
                        isParent: false,
                        isChild: false,
                        options: [],
                        questionType: "short",
                        questionIcon: "",
                        currentView: "AnswerOptions",
                        order: 1,
                        value: "",
                        valid: false,
                        validationRules: {
                          required: true,
                        },
                        messages: {
                          errors: [],
                          warnings: [],
                          success: [],
                        },
                      };
                      return acc;
                    },
                    {}
                  ),
                };
                return acc;
              },
              {}
            ),
          };
          return acc;
        }, {}),
      };
      return acc;
    }, {}),
    users: rawData.users,
    efiles: [...Array(6).keys()].reduce((acc, i) => {
      let folderId = uuid(8);
      acc[folderId] = {
        title: `Folder ${i}`,
        description: `Folder ${i}`,
        id: folderId,
        files: [...Array(6).keys()].reduce((acc, j) => {
          let docId = uuid(8);
          acc[docId] = {
            title: `Doc ${i}.${j}`,
            folderId: folderId,
            description: `Doc ${i}.${j}`,
            id: docId,
          };
          return acc;
        }, {}),
      };
      return acc;
    }, {}),
    audits: {
      "internal-audit": {
        title: "Internal Audit",
        description: "Internal Audit",
        id: "internal-audit",
      },
      "external-audit": {
        title: "External Audit",
        description: "External Audit",
        id: "external-audit",
      },
    },
    calendar: {},
  },
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
      menuItems: [
        {
          title: "Navigation One",
          key: "mail",
          icon: "akar-icons:home",
        },
        {
          title: "Navigation Two",
          key: "app",
          icon: "akar-icons:home",
          disabled: true,
        },
        {
          title: "Navigation Three - Submenu",
          key: "SubMenu",
          icon: "akar-icons:home",
          children: [
            {
              type: "group",
              title: "Item 1",
              children: [
                {
                  title: "Option 1",
                  key: "setting:1",
                },
                {
                  title: "Option 2",
                  key: "setting:2",
                },
              ],
            },
            {
              type: "group",
              title: "Item 2",
              children: [
                {
                  title: "Option 3",
                  key: "setting:3",
                },
                {
                  title: "Option 4",
                  key: "setting:4",
                },
              ],
            },
          ],
        },
        {
          key: "alipay",
          title: "Navigation Four - Link",
        },
      ],
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
// console.log(
//   ["jane kamal", "bob seymour", "steve gordon", "vanessa miller"].map((s) => ({
//     displayName: s,
//     email: s.replace(/\s/g, "") + "@gmail.com",
//     id: uuid(),
//   }))
// );
