<script>
</script>

<div class="card">
  <div class="card-body">
    <slot />
  </div>
</div>

<style>
  :root {
    --card-bg: var(--surface);
    --card-padding: var(--size);
  }
  .card {
    background-color: rgb(var(--card-bg));
    border-radius: calc(var(--size) / 2.5);
  }
  .card .card-body {
    padding: var(--card-padding);
  }
</style>
