<script>
  import Icon from "@iconify/svelte";
</script>

<div class="w:sm b:1|solid|rgb($(muted-2)) p:16">
  <div class="flex ai:center jc:space-between">
    <h3>Forms</h3>
    <div class="flex ai:center gap:16">
      <div class="control-group">
        <input type="search" name="" id="" class="outline md icon-left" />
      </div>
      <button class="fill md">+ Add folder</button>
    </div>
  </div>
  <div class="flex ai:center jc:space-between">
    <div class="flex ai:center gap:16">
      <Icon icon="iconoir:folder"></Icon>
      <div>PSSP Intake</div>
    </div>

    <button class="fill md">+ Add form</button>
  </div>
  <div class="flex flex:wrap">
    <div class="flex w:1/3">
      <img
        src="https://f4.bcbits.com/img/0014753839_100.png"
        alt=""
        class="obj:contain min-w:full"
      />
    </div>
  </div>
</div>
