// Import the writable function from svelte/store
import { writable } from "svelte/store";
import { getCollection, updateDocument } from "./firebase";

// Create a writable store with an initial value of null
// const app = writable({});

// // Export the store object with subscribe, set, and update methods
// export const appStore = {
//   subscribe: app.subscribe, // subscribe to the store value
//   set: (value) => app.set(value), // set the store value
//   update: (callback) => app.update(callback), // update the store value with a callback
// };

// export const sectionsStore = (() => {
//   const { subscribe, set } = writable([]);
//   let unsubSnapshot;
//   return {
//     subscribe,
//     set,
//     startListener: () => {
//       unsubSnapshot = onSnapshot(
//         collection(FIRESTORE, "sections"),
//         (snapshot) => {
//           set(snapshot.docs.map((doc) => doc.data()));
//         }
//       );
//     },
//     stopListener: () => {
//       if (unsubSnapshot) unsubSnapshot();
//     },
//   };
// })();

export const appStore = (() => {
  const app = writable({
      loading: true,
      loadedItems: 2,
    }),
    checkLoaded = () => {
      app.update((s) => {
        if (s.loadedItems >= Object.keys(s).length) {
          s.loading = false;
        }
        console.log(Object.keys(s), s.loadedItems);
        return s;
      });
    };

  (async () => {
    await getCollection("folders", (data) =>
      app.update((s) => {
        s.folders = data;
        s.loadedItems += 1;
        checkLoaded();
        return s;
      })
    );
    await getCollection("forms", (data) =>
      app.update((s) => {
        s.forms = data;
        s.loadedItems += 1;
        checkLoaded();
        return s;
      })
    );
    await getCollection("sections", (data) =>
      app.update((s) => {
        s.sections = data;
        s.loadedItems += 1;
        checkLoaded();
        return s;
      })
    );
    await getCollection("questions", (data) =>
      app.update((s) => {
        s.questions = data;
        s.loadedItems += 1;
        checkLoaded();
        return s;
      })
    );
  })();
  return {
    subscribe: app.subscribe,
    set: (value) => app.set(value),
    updateData: (payload) => {
      updateDocument(
        payload.collectionName,
        payload.document,
        payload.callback
      );
    },
  };
})();
