<script>
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
    <div class="flex flex:col gap:16">
      <div class="flex ai:center jc:space-between py:16">
        <div class="flex ai:center gap:16">
          <Icon icon="iconoir:folder"></Icon>
          <div>PSSP Intake</div>
        </div>

        <button class="fill md">
          <span class="lh:0 mr:8">
            <Icon icon="fluent:add-28-filled" class="f:16"></Icon>
          </span>
          Add form
        </button>
      </div>
      <div class="grid grid-cols:3 gap:8">
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as item}
          <div class="flex flex:col shadow:$(shadow-14) r:5">
            <div class="flex p:8 h:120">
              <img
                src="https://f4.bcbits.com/img/0014753839_100.png"
                alt=""
                class="obj:cover min-w:full r:5"
              />
            </div>
            <div class="p:16">
              <div>2020 Intake GSSP</div>
              <div class="color:rgb($(text-light)) f:14 mt:4">24 Feb 2020</div>
            </div>
            <div
              class="flex ai:center jc:space-between bt:1|solid|rgb($(border)) p:8"
            >
              <div>
                <div class="color:rgb($(text-light))">Responses</div>
                <div class=" f:14">211</div>
              </div>
              <div>
                <div class="color:rgb($(text-light))">Completed</div>
                <div class=" f:14">211</div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <Modal bind:open>
    <AddFolder></AddFolder>
  </Modal>
</Main>
