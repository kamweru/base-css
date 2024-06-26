<script>
  import "../styles/rate.css";
  export let cssVariables = "";
  let rating = 0;
</script>

<div class="rate" style={cssVariables}>
  {#each Array(5) as _, i}
    <input
      type="radio"
      id="rate-{5 - i}"
      class="rate-input"
      value={5 - i}
      bind:group={rating}
    />
    <label for="rate-{5 - i}" class="rate-label"> ★ </label>
  {/each}
</div>
