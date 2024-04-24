<script>
  import { createEventDispatcher } from "svelte";
  import { appStore } from "../lib/AppStore";
  import FormCard from "../components/FormCard.svelte";
  import Modal from "../components/Modal.svelte";
  import AddFolder from "../forms/AddFolder.svelte";
  import AddForm from "../forms/AddForm.svelte";
  import Header from "../layout/Header.svelte";
  import Main from "../layout/Main.svelte";
  import Icon from "@iconify/svelte";
  import { getCollection } from "../lib/firebase";
  export let viewPath;
  let open = false,
    currentForm = AddFolder,
    folderId;
  const dispatch = createEventDispatcher(),
    fetchData = async () => {
      getCollection("folders", (data) => {
        appStore.update((s) => {
          s.folders = data;
          return s;
        });
      });
      getCollection("forms", (data) => {
        appStore.update((s) => {
          s.forms = data;
          return s;
        });
      });
      getCollection("sections", (data) => {
        appStore.update((s) => {
          s.sections = data;
          return s;
        });
      });
      getCollection("questions", (data) => {
        appStore.update((s) => {
          s.questions = data;
          return s;
        });
      });
    },
    changeView = () => {
      console.log(viewPath);
      dispatch("changeView");
    };
  fetchData();
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
          <button
            class="fill md"
            on:click={() => {
              open = true;
              currentForm = AddFolder;
            }}
          >
            <span class="lh:0 mr:8">
              <Icon icon="fluent:add-28-filled" class="f:16"></Icon>
            </span>
            Add folder
          </button>
        </div>
      </div>
    </div>
  </Header>
  {#if $appStore.folders && $appStore.folders.length > 0}
    <div class="flex flex:col gap:16">
      {#each $appStore?.folders as folder}
        <div class="flex ai:center jc:space-between py:16">
          <div class="flex ai:center gap:16">
            <Icon icon="iconoir:folder"></Icon>
            <div>{folder.title}</div>
          </div>

          <button
            class="fill md"
            on:click={() => {
              open = true;
              currentForm = AddForm;
              folderId = folder.id;
            }}
          >
            <span class="lh:0 mr:8">
              <Icon icon="fluent:add-28-filled" class="f:16"></Icon>
            </span>
            Add form
          </button>
        </div>
        {#if $appStore?.forms && $appStore?.forms.length > 0}
          <div class="grid grid-cols:3 gap:16">
            {#each $appStore?.forms as form}
              {#if form.folderId === folder.id}
                <FormCard {form} bind:viewPath on:changeView={changeView}
                ></FormCard>
              {/if}
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
  <Modal bind:open>
    <svelte:component this={currentForm} bind:folderId></svelte:component>
  </Modal>
</Main>
