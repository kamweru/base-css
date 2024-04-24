<script>
  import { appStore } from "../lib/AppStore";
  import { addDocument } from "../lib/firebase";
  export let folderId;
  let formName = "",
    formDescription = "",
    loading = false;
  const addForm = () => {
    if (!formName) return;
    loading = true;
    addDocument(
      "forms",
      {
        title: formName,
        folderId,
        description: formDescription,
        createdAt: Date.now(),
      },
      (formData) => {
        loading = false;
        formName = "";
        formDescription = "";
        $appStore.forms = [...$appStore.forms, formData];
      }
    );
  };
</script>

<div class="flex flex:col gap:16">
  <div class="control-group">
    <label for="folder-name">Form Title</label>
    <input
      type="text"
      id="folder-name"
      class="outline md"
      placeholder="Form Name"
      bind:value={formName}
    />
  </div>
  <div class="control-group">
    <label for="folder-description">Form Description</label>
    <textarea
      id="folder-description"
      class="outline"
      placeholder="Form Description"
      bind:value={formDescription}
    ></textarea>
  </div>
  <div class="flex ai:center jc:end">
    <button class="fill md" on:click={addForm} disabled={loading}>
      {#if loading}
        <span
          class="bg:rgb($(white)/.7) bd:blur(1px) abs inset:0 flex ai:center jc:center"
        >
          <span class="loader"></span>
        </span>
      {/if}
      Add Form
    </button>
  </div>
</div>
