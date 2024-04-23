<script>
  let btnHeight = 32;
</script>

<div class="h:100% flex flex:col gap:16">
  <div>
    <button class="$btn-height:{btnHeight}px btn" disabled
      >default button</button
    >
    <button class="btn btn-fill">fill button</button>
    <button class="btn btn-dashed">dashed button</button>
    <button class="btn btn-text">text button</button>
    <button class="btn btn-link">link button</button>
  </div>
  <div>
    <button class="$btn-height:{btnHeight}px btn btn-success" disabled
      >default button</button
    >
    <button class="btn btn-fill btn-success">fill button</button>
    <button class="btn btn-dashed btn-success">dashed button</button>
    <button class="btn btn-text btn-success">text button</button>
    <button class="btn btn-link btn-success">link button</button>
  </div>
  <div>
    <input type="number" name="" id="" bind:value={btnHeight} />
  </div>
</div>
