<script>
  import FolderView from "./FolderView.svelte";
  import Modal from "../components/Modal.svelte";
  import AddFolder from "../forms/AddFolder.svelte";
  import Header from "../layout/Header.svelte";
  import Main from "../layout/Main.svelte";
  import Icon from "@iconify/svelte";
  let open = false;
</script>

<Main>
  <Header slot="header">
    <div class="w:xs mx:auto">
      <div class="my:auto flex ai:center jc:space-between">
        <h3>Forms</h3>
        <div class="flex ai:center gap:16">
          <div class="control-group">
            <input type="search" name="" id="" class="outline md icon-left" />
          </div>
          <button class="fill md" on:click={() => (open = true)}>
            <span class="lh:0 mr:8">
              <Icon icon="fluent:add-28-filled" class="f:16"></Icon>
            </span>
            Add folder
          </button>
        </div>
      </div>
    </div>
  </Header>
  <div class="flex flex:col gap:16">
    {#each [1, 2] as item}
      <FolderView></FolderView>
    {/each}
  </div>
  <Modal bind:open>
    <AddFolder></AddFolder>
  </Modal>
</Main>
