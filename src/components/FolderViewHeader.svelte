<script>
  import Icon from "@iconify/svelte";
  export let folder;
  const addForm = () => {};
</script>

<div class="flex ai:center jc:space-between py:16">
  <div class="flex ai:center gap:16">
    <Icon icon="iconoir:folder"></Icon>
    <div>{folder.title}</div>
  </div>

  <button class="fill md">
    <span class="lh:0 mr:8">
      <Icon icon="fluent:add-28-filled" class="f:16"></Icon>
    </span>
    Add form
  </button>
</div>
