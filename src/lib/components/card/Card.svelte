<script>
  import "../styles/card.css";
  export let cssVariables = "";
  export let size = "default";
  let classes = {
    sizes: {
      sm: "card-sm",
      default: "",
    },
  };
</script>

<div class="flex flex:col gap:8">
  <div class="card {classes.sizes[size]}" style={cssVariables}>
    <div class="card-head">
      <div class="card-head-content">
        <div class="card-title">Card Title</div>
        <div class="card-head-extra">
          <a href="">More</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
    <div class="card-footer">
      <div class="card-footer-content">
        <button class="button button-outline"> cancel </button>
        <button class="button button-fill"> action </button>
      </div>
    </div>
  </div>
  <div class="card card-sm">
    <div class="card-head">
      <div class="card-head-content">
        <div class="card-title">Card Title</div>
        <div class="card-head-extra">more</div>
      </div>
    </div>
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
    <div class="card-footer">
      <div class="card-footer-content">
        <button class="button button-outline"> cancel </button>
        <button class="button button-fill"> action </button>
      </div>
    </div>
  </div>

  <div class="card card-sm">
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
  </div>
  <div class="card">
    <div class="card-head">
      <div class="card-head-content">
        <div class="card-title">Card Title</div>
        <div class="card-head-extra">more</div>
      </div>
    </div>
    <div class="card-body">
      {#each Array(4) as _}
        <div class="p:">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      {/each}
    </div>
  </div>
</div>
