<script>
  import "../styles/card.css";
  export let cssVariables = "";
  export let size = "default";
  export let type = "default";
  let classes = {
    sizes: {
      sm: "card-sm",
      default: "",
    },
  };
</script>

<div class="card {classes.sizes[size]}" style={cssVariables}>
  {#if type === "withHead" || type === "headAndFooter"}
    <div class="card-head">
      <div class="card-head-content">
        <div class="card-title">Card Title</div>
        <div class="card-head-extra">
          <a href="">More</a>
        </div>
      </div>
    </div>
  {/if}
  <div class="card-body">
    {#each Array(4) as _}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    {/each}
  </div>
  {#if type === "withFooter" || type === "headAndFooter"}
    <div class="card-footer">
      <div class="card-footer-content">
        <button class="button button-outline"> cancel </button>
        <button class="button button-fill"> action </button>
      </div>
    </div>
  {/if}
</div>
