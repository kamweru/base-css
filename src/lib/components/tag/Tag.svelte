<script>
  import Icon from "@iconify/svelte";
  import "../styles/tag.css";
</script>

<div class="">
  <span class="tag">Tag 1</span>
  <span class="tag"
    >Tag 1
    <button class="icon tag-close-btn">
      <Icon icon="ic:baseline-close"></Icon>
    </button>
  </span>

  <span class="tag">
    <span class="icon">
      <Icon icon="tabler:plus" />
    </span>
    <span>Tag 1</span>
  </span>
</div>
