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
