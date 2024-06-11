<script>
  let formLayouts = [
      { title: "horizontal", value: "form-horizontal" },
      { title: "vertical", value: "form-vertical" },
      { title: "inline", value: "form-inline" },
    ],
    layout = formLayouts[0].value;
</script>

<div class="flex flex:col gap:16 b:1|solid|rgb($(color-border)) p:16">
  <div class="flex ai:center gap:16">
    {#each formLayouts as formLayout}
      <button
        class="btn btn-fill {layout === formLayout.value ? 'active' : ''}"
        on:click={() => (layout = formLayout.value)}>{formLayout.title}</button
      >
    {/each}
  </div>
  <form action="" class="form {layout}">
    <div class="form-control-group">
      <div class="form-label">
        <label for="">Field A, A super long label text</label>
      </div>
      <div class="form-control">
        <input type="text" class="input" />
        <div class="form-control-message form-control-error">
          error message, A prime is a natural number greater than 1 that has no
          positive divisors other than 1 and itself.
        </div>
      </div>
    </div>
    <div class="form-control-group">
      <div class="form-label">
        <label for="">Field A, A super long label text</label>
      </div>
      <div class="form-control">
        <input type="text" class="input" />
        <div class="form-control-message">
          error message, A prime is a natural number greater than 1 that has no
          positive divisors other than 1 and itself.
        </div>
      </div>
    </div>
    <div class="form-control-group">
      <div class="form-label">
        <label for="">Field A, A super long label text</label>
      </div>
      <div class="form-control">
        <input type="text" class="input" />
        <div class="form-control-message">
          error message, A prime is a natural number greater than 1 that has no
          positive divisors other than 1 and itself.
        </div>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-text">Cancel</button>
      <button class="btn btn-fill">Submit</button>
    </div>
  </form>
</div>
