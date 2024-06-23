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
  key: (payload) => {
    console.log(payload);
  },
};
let finalPayload = [];
Object.keys(payload).map((key) => {
  if (Array.isArray(payload[key])) {
    payload[key].map((v, index) => {
      console.log(v, index);
      finalPayload.push({
        [key]: v,
        // units: payload["units"],
        // key: payload["key"],
      });
    });
  }
  // console.log(typeof payload[key]);
});
console.log(finalPayload);
