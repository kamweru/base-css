<script>
  import Calendar from "../components/calendar/Calendar.svelte";
  export let title, pageData;
</script>

<div class="bg:rgb($(gray-1)) r:16 p:16">
  <h3>{title}</h3>
</div>
<div class="bg:rgb($(gray-1)) r:16 p:16 flex:1 overflow-y:scroll">
  <Calendar />
</div>
