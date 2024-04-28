// Import the writable function from svelte/store
import { writable } from "svelte/store";
import { getCollection, updateDocument, queryCollection } from "./firebase";

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
    await getCollection("forms", async (data) => {
      app.update((s) => {
        s.forms = data;
        s.loadedItems += 1;
        checkLoaded();
        return s;
      });
      await getCollection("sections", async (data) => {
        app.update((s) => {
          s.sections = data;
          s.loadedItems += 1;
          checkLoaded();
          return s;
        });
        await getCollection("questions", async (data) => {
          app.update((s) => {
            s.questions = data;
            s.loadedItems += 1;
            checkLoaded();
            return s;
          });
          await getCollection("conditions", (data) =>
            app.update((s) => {
              s.conditions = data;
              s.loadedItems += 1;
              checkLoaded();
              return s;
            })
          );
        });
      });
    });
  })();
  return {
    subscribe: app.subscribe,
    set: (value) => app.set(value),
    update: (callback) => app.update(callback),
    updateData: (payload) => {
      updateDocument(
        payload.collectionName,
        payload.document,
        payload.callback
      );
    },
  };
})();
