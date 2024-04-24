<script>
  import Icon from "@iconify/svelte";
  import FormCard from "../components/FormCard.svelte";
</script>

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
    {#each [1, 2] as item}
      <FormCard></FormCard>
    {/each}
  </div>
</div>
