<script>
  import { fade } from "svelte/transition";
  import Calendar from "../components/calendar/Calendar.svelte";
  export let title, pageData, params;
</script>

{#if title === "Calendar"}
  <div class="bg:rgb($(gray-1)) r:16 p:16" transition:fade={{ duration: 150 }}>
    <h3>{title}</h3>
  </div>
  <div class="bg:rgb($(gray-1)) r:16 p:16 flex:1 overflow-y:scroll">
    <Calendar />
  </div>
{/if}
