<script>
  let active = false;
</script>

<div class="upload">
  <span class="upload-drag-area">
    <span
      class="upload-btn"
      tabindex="0"
      role="button"
      class:active
      aria-hidden="true"
      on:dragenter|preventDefault={() => (active = true)}
      on:dragleave|preventDefault={() => (active = false)}
    >
      <input
        type="file"
        name="file-upload"
        id="file-upload"
        accept=".jpg, .jpeg, .png, .svg, .gif, .webp"
        multiple
      />
      <span class="upload-instructions">
        <span class="upload-icon f:36"></span>
        <span class="upload-text">Drop file or click to upload</span>
        <span class="upload-hint">
          <span>allowed file types: jpg, jpeg, png, gif, svg</span>
          <span>maximum file size: 1MB</span>
        </span>
      </span>
    </span>
  </span>
</div>
