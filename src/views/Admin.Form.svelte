<script>
  import Icon from "@iconify/svelte";
</script>

<div class="w:sm b:1|solid|rgb($(muted-2)) p:16 flex flex:col gap:16">
  <div class="flex ai:center jc:space-between">
    <h3>Forms</h3>
    <div class="flex ai:center gap:16">
      <div class="control-group">
        <input type="search" name="" id="" class="outline md icon-left" />
      </div>
      <button class="fill md">
        <span class="lh:0 mr:8">
          <Icon icon="fluent:add-28-filled" class="f:16"></Icon>
        </span>
        Add folder
      </button>
    </div>
  </div>
  <div class="flex flex:col gap:16">
    <div class="flex ai:center jc:space-between p:16">
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
    <div class="flex flex:wrap gap:8">
      {#each [1, 2, 3, 4, 5] as item}
        <div class="w:25% flex flex:col shadow:$(shadow-14) r:5">
          <div class="flex p:8 h:120">
            <img
              src="https://f4.bcbits.com/img/0014753839_100.png"
              alt=""
              class="obj:cover min-w:full r:5"
            />
          </div>
          <div class="p:16">
            <div>2020 Intake GSSP</div>
            <div class="color:rgb($(text-light)) f:14">24 Feb 2020</div>
          </div>
          <div
            class="flex ai:center jc:space-between bt:1|solid|rgb($(border)) p:8"
          >
            <div>
              <div class="color:rgb($(text-light))">Responses</div>
              <div>211</div>
            </div>
            <div>
              <div class="color:rgb($(text-light))">Completed</div>
              <div>211</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
