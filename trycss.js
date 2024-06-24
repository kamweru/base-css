let payload = {
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
};
const capitalizeFirstLetter = (string) =>
    `${string[0].toUpperCase()}${string.slice(1)}`,
  hypenate = (string) => string.toLowerCase().replace(/\s+/g, "-"),
  camel = (string) =>
    string
      .split(" ")
      .map((word, index) =>
        index === 0 ? word.toLowerCase() : capitalizeFirstLetter(word)
      )
      .join(""),
  fn = (payload) => {
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

// console.log(fn(payload));
console.log(
  fn({
    title: ["text only", "icon only", "icon left", "icon right"],
    value: "title",
    key: (title) => camel(title),
  })
);
// console.log(
//   fn({
//     title: ["message", "description", "closable", "show icon"],
//     value: ["message content", "description content", false, false],
//     controlType: ["input", "input", "switch", "switch"],
//     key: (title) => camel(title),
//   })
// );
// console.log(
//   fn({
//     title: ["default", "dashed", "fill", "text", "link"],
//     value: "title",
//     key: (title) => camel(title),
//   })
// );
