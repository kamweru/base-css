<script>
  import { appStore } from "../lib/AppStore";
  import { addDocument } from "../lib/firebase";
  let folderName = "",
    loading = false;
  const addFolder = () => {
    if (!folderName) return;
    loading = true;
    addDocument(
      "folders",
      {
        title: folderName,
        createdAt: Date.now(),
      },
      (folder) => {
        loading = false;
        folderName = "";
        $appStore.folders = [...$appStore.folders, folder];
      }
    );
  };
</script>

<div class="">
  <div class="control-group">
    <label for="folder-name">Folder Name</label>
    <input
      type="text"
      id="folder-name"
      class="outline md"
      placeholder="Folder Name"
      bind:value={folderName}
    />
  </div>
  <div class="flex ai:center jc:end mt:8">
    <button class="fill md" on:click={addFolder} disabled={loading}>
      {#if loading}
        <span
          class="bg:rgb($(white)/.7) bd:blur(1px) abs inset:0 flex ai:center jc:center"
        >
          <span class="loader"></span>
        </span>
      {/if}
      Add Folder
    </button>
  </div>
</div>
