/**
 * Generates a random hexadecimal string of the specified length.
 * @param {number} n - The length of the string to generate.
 * @returns {string} - The generated hexadecimal string.
 */
export let uuid = (n = 20) => {
  // Define the possible characters to use
  const DIGITS = "0123456789";
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ALPHABET_LOWERCASE = ALPHABET.toLocaleLowerCase();
  const ALPHANUMERIC = ALPHABET + ALPHABET_LOWERCASE + DIGITS;
  // Initialize an empty string to store the output
  let output = "";
  // Loop n times
  while (n--) {
    // Pick a random index from 0 to IDX - 1
    let index = Math.floor(Math.random() * ALPHANUMERIC.length);
    // Append the character at that index to the output
    output += ALPHANUMERIC[index];
  }
  // Return the output
  return output;
};

export const capitalizeFirstLetter = (string) =>
  `${string[0].toUpperCase()}${string.slice(1)}`;
export const typeAction = (node, type) => {
  node.type = type;
};

export const formatDate = (timestamp) => {
  // Create a new Date object from the timestamp
  let date = new Date(timestamp);
  // Get the day of the month
  let day = date.getDate();
  // Get the month name from an array of names
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[date.getMonth()];
  // Get the year
  let year = date.getFullYear();
  // Add the ordinal suffix to the day
  let suffix = "";
  if (day % 10 == 1 && day != 11) {
    suffix = "st";
  } else if (day % 10 == 2 && day != 12) {
    suffix = "nd";
  } else if (day % 10 == 3 && day != 13) {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  // Return the formatted date
  return day + suffix + " " + month.substring(0, 3) + " " + year;
};

export const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

// Button.styles.js (or similar)
export function createStyleString(stylesObj) {
  // Generate a unique class name
  const className = `custom-${Math.random().toString(36).substring(2, 7)}`;

  let cssString = `.${className} {`;

  // Loop through the base styles and add them to the string
  for (const [property, value] of Object.entries(stylesObj.base)) {
    cssString += `  ${property}: ${value};\n`;
  }

  // Loop through pseudo-class styles and add them to the string
  for (const [pseudoClass, properties] of Object.entries(stylesObj)) {
    if (pseudoClass !== "base") {
      cssString += `  ${className}${pseudoClass} {\n`;
      for (const [property, value] of Object.entries(properties)) {
        cssString += `    ${property}: ${value};\n`;
      }
      cssString += `  }\n`;
    }
  }

  cssString += `}`;

  // Return only the class name for component usage
  return { className, cssString };
}

export function generateCSS(obj, classNamePrefix = "custom") {
  // const style = document.createElement("style");
  // document.head.appendChild(style);
  // const sheet = style.sheet;
  let cssString = "";
  function toCSS(selector, properties) {
    let css = `\n${selector} {\n`;
    for (let key in properties) {
      if (typeof properties[key] === "object") {
        const nestedSelector = key.replace("&", selector);
        toCSS(nestedSelector, properties[key]);
      } else {
        const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
        css += `${cssKey}: ${properties[key]}; \n`;
      }
    }
    css += "}";
    // sheet.insertRule(css);
    cssString += css;
  }

  const className = `${classNamePrefix}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
  for (let key in obj) {
    // toCSS(`.${className}-${key}`, obj[key]);
    if (key === "base") {
      toCSS(`.${className}`, obj[key]);
    } else {
      toCSS(`.${className}.${key}`, obj[key]);
    }
  }

  return { className, cssString };
}

export function createCSSVariableString(obj, currentComponent) {
  let output = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && key !== "title" && key !== "units") {
      const property = obj[key];
      property.variables.forEach((variable) => {
        output.push(
          `--${currentComponent}-${key}-${variable.title}: ${variable.value}${property.units};`
        );
      });
    }
  }
  return output.join(" ");
}

export const hypenate = (string) => string.toLowerCase().replace(/\s+/g, "-"),
  camel = (string) =>
    string
      .split(" ")
      .map((word, index) =>
        index === 0 ? word.toLowerCase() : capitalizeFirstLetter(word)
      )
      .join(""),
  transformPayload = (payload) => {
    let result = [];
    const mapper = (key, items) => {
      if (result.length === 0) {
        for (let i = 0; i < items.length; i++) {
          result.push({
            [key]: items[i],
          });
        }
      } else {
        for (let i = 0; i < items.length; i++) {
          result[i][key] = items[i];
        }
      }
    };
    Object.keys(payload).map((key) => {
      if (Array.isArray(payload[key])) {
        mapper(key, payload[key]);
      } else {
        if (payload[payload[key]]) {
          result.map((item, index) => {
            item[key] = payload[payload[key]][index];
          });
        } else {
          if (typeof payload[key] === "string") {
            result.map((item) => {
              item[key] = payload[key];
            });
          }
          if (typeof payload[key] === "function") {
            result.map((item) => {
              item[key] = payload[key](item.title);
            });
          }
        }
      }
    });
    return result;
  };

export function transformPayload1(payload) {
  const { items, extras, keyConnector } = payload;
  const [titles, values] = items;
  if (keyConnector === "-") {
    return titles.map((title, index) => {
      const key = title.toLowerCase().replace(/\s+/g, keyConnector);
      const value = values[index];
      const { units } = extras[0];
      return { title, key, value, units };
    });
  }
  if (keyConnector === "camel") {
    return items.map((title) => {
      const key = title
        .split(" ")
        .map((word, index) =>
          index === 0 ? word.toLowerCase() : capitalizeFirstLetter(word)
        )
        .join("");
      return { title, key, value: key };
    });
  }
  return;
}
export const clickOutside = (node, _options = {}) => {
  const { cb } = _options;
  const options = { include: [], ..._options };
  function detect({ target }) {
    if (
      !node.contains(target) ||
      options.include.some((i) => target.isSameNode(i))
    ) {
      if (cb) {
        cb();
      } else node.dispatchEvent(new CustomEvent("outsideclick"));
    }
  }
  // use the same options object for both methods
  const listenerOptions = { passive: true, capture: true };
  document.addEventListener("click", detect, listenerOptions);
  return {
    destroy() {
      document.removeEventListener("click", detect, listenerOptions);
    },
  };
};
export function createEventForwarder(element) {
  // Initialize an empty object to store event listeners
  const eventListeners = {};

  // Function to add an event listener
  function addEventListener(eventName, handler) {
    if (!eventListeners[eventName]) {
      eventListeners[eventName] = [];
    }
    eventListeners[eventName].push(handler);
    element.addEventListener(eventName, handler);
  }

  // Function to remove an event listener
  function removeEventListener(eventName, handler) {
    if (eventListeners[eventName]) {
      const index = eventListeners[eventName].indexOf(handler);
      if (index !== -1) {
        eventListeners[eventName].splice(index, 1);
        element.removeEventListener(eventName, handler);
      }
    }
  }

  // Return an object with the necessary methods
  return {
    addEventListener,
    removeEventListener,
  };
}
export const createEventForwarder1 = (element) => {
  return (node) => {
    const eventTypes = Object.keys(element).filter((key) =>
      key.startsWith("on")
    );
    console.log(eventTypes);
    const eventHandlers = eventTypes.map((eventType) => {
      const eventName = eventType.slice(2).toLowerCase();
      const handler = (event) => element[eventType](event);
      node.addEventListener(eventName, handler);
      return { eventName, handler };
    });

    return {
      destroy() {
        eventHandlers.forEach(({ eventName, handler }) => {
          node.removeEventListener(eventName, handler);
        });
      },
    };
  };
};

export function generateRandomColor(alpha = 5) {
  const rWeight = Math.random();
  const gWeight = 0.45;
  const bWeight = 0.53;
  const section = 5;
  // Calculate the section boundaries
  const sectionSize = 51; // (255 / 5)
  const sections = ["r", "g", "b"].reduce((acc, val, index) => {
    let arr = range(1, section + 1, 1),
      sector = Math.min(5, arr[Math.floor(Math.random() * arr.length)]);
    // console.log(arr, sector);
    acc[val] = {
      sectionStart: (sector - 1) * sectionSize,
      sectionEnd: sector * sectionSize,
    };
    return acc;
  }, {});
  const totalWeight = rWeight + gWeight + bWeight;
  const normalizedWeights = {
    r: rWeight / totalWeight,
    g: gWeight / totalWeight,
    b: bWeight / totalWeight,
  };

  return `rgb(${Math.min(
    255,
    Math.floor(
      // Math.random() *
      normalizedWeights.r * (sections.r.sectionEnd - sections.r.sectionStart)
    ) + sections.r.sectionStart
  )}, ${Math.min(
    255,
    Math.floor(
      // Math.random() *
      normalizedWeights.g * (sections.g.sectionEnd - sections.g.sectionStart)
    ) + sections.g.sectionStart
  )}, ${Math.min(
    255,
    Math.floor(
      // Math.random() *
      normalizedWeights.b * (sections.b.sectionEnd - sections.b.sectionStart)
    ) + sections.b.sectionStart
  )}/.${alpha})`;
}
// console.log(
//   [
//     "Developing software for Raspberry Pi",
//     "using Python, C and bash languages. ",
//     "Those systems are used in APM OnDynamic",
//     "Developing Android app in Java and Kotlin. ",
//     "It’s the mobile app of TMS frameLOGIC ",
//     "system besides: onboarding, distributing ",
//     "teamwork, modifying CyanogenMod system, ",
//     "applying changes on servers (Java)",
//     "Developing BlackBerry Work in Java and Kotlin. ",
//     "This app contains e-mail client, calendar, ",
//     "contact manager and more. Work is known of its ",
//     "security. It has a lot of legacy code, ",
//     "but new features are developed in Kotlin ",
//     "using MVVM architecture",
//     "Developing a simple app for reading Bible. ",
//     "It’s written in Kotlin and it uses ObjectBox. ",
//     "Bible Lite isn't public yet",
//   ].map((i, index) => ({
//     title: i,
//     description: i,
//     start: Date.now() - (2 + index) * 24 * 60 * 60 * 1000,
//     end: Date.now() - (1 + index) * 24 * 60 * 60 * 1000,
//     id: uuid(12),
//   }))
// );
let items = {},
  folders = [
    "admissions",
    "audits",
    "user satisfaction surveys",
    "job satisfaction surveys",
  ],
  forms = [
    ["2022 admissions", "2024 admissions"],
    ["2023 internal audit", "2024 internal audit"],
    [
      "ict user satisfaction survey 2023",
      "library user satisfaction survey 2024",
    ],
    ["2022 job satisfaction survey", "2023 job satisfaction survey"],
  ],
  sections = [
    ["bio information", "contact information", "previous eduction"],
    ["audit questions"],
    ["user satisfaction"],
    ["job satisfaction"],
  ],
  questions = [
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
  ];
folders.map((f, i) => {
  let folderId = uuid(8);
  items[folderId] = {
    title: f,
    description: f,
    id: folderId,
    forms: forms[i].reduce((acc, val) => {
      let formId = uuid(8);
      acc[formId] = {
        title: val,
        folderId: folderId,
        description: val,
        id: formId,
        sections: sections[i].reduce((acc, val) => {
          let sectionId = uuid(8);
          acc[sectionId] = {
            title: val,
            formId: formId,
            folderId: folderId,
            description: val,
            id: sectionId,
            questions: questions[i].reduce((acc, val) => {
              let questionId = uuid(8);
              acc[questionId] = {
                title: val,
                sectionId: sectionId,
                formId: formId,
                folderId: folderId,
                description: val,
                id: questionId,
              };
              return acc;
            }, {}),
          };
          return acc;
        }, {}),
      };
      return acc;
    }, {}),
  };
});
// console.log(items);
let data = folders.reduce((acc, folder, folderIndex) => {
  let folderId = uuid(12);
  acc[folderId] = {
    id: folderId,
    title: folder,
    description: folder,
    forms: forms[folderIndex].reduce((acc, form, formIndex) => {
      let formId = uuid(12);
      acc[formId] = {
        id: formId,
        title: form,
        description: form,
        folderId: folderId,
        sections: sections[formIndex].reduce((acc, section, sectionIndex) => {
          let sectionId = uuid(12);
          acc[sectionId] = {
            id: sectionId,
            title: section,
            description: section,
            formId: formId,
            folderId: folderId,
            questions: questions[sectionIndex].reduce((acc, question) => {
              let questionId = uuid(12);
              acc[questionId] = {
                id: questionId,
                title: question,
                description: question,
                sectionId: sectionId,
                formId: formId,
                folderId: folderId,
              };
              return acc;
            }, {}),
          };
          return acc;
        }, {}),
      };
      return acc;
    }, {}),
  };
  return acc;
}, {});
console.log(data);
