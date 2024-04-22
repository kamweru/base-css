<script>
  let btnHeight = 32;
</script>

<div class="flex h:100%">
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
    <input type="number" name="" id="" bind:value={btnHeight} />
  </div>
</div>
