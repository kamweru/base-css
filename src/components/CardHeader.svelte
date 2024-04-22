<div class="card-head">
  <div class="card-head-wrap">
    <div class="card-title-wrap">
      <div class="card-title">card title</div>
      <div class="card-subtitle">card subtitle</div>
    </div>
    <div class="card-head-right">card extra</div>
  </div>
</div>

<style>
  :root {
    --card-head-padding: calc(var(--size) / 1);
  }
  .card-head {
    padding: var(--card-head-padding);
    min-height: calc(var(--size) * 3.5);
    display: flex;
    align-items: center;
  }
  .card-head-wrap {
    flex: auto;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  .card-title-wrap {
    flex: auto;
  }
  .card-title {
    color: rgb(var(--text-strong));
    font-weight: 600;
    font-size: calc(var(--font-size-lg) * 1.25);
    line-height: 1.75rem;
  }
  .card-subtitle {
    color: rgb(var(--text-light));
  }
  /* display: inline-block;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; */
</style>
