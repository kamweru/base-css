<script>
  import "../styles/list.css";
</script>

<div class="list">
  <div class="list-header">
    <span class="">List title</span>
  </div>
  <ul class="list-items">
    {#each Array(5) as _, i}
      <li class="list-item">Japanese princess to wed commoner. {i + 1}</li>
    {/each}
  </ul>
  <div class="list-footer">
    <span class="">List footer</span>
  </div>
</div>
