<script>
  export let sampleStyle = `background-color: aqua;`,
    columns = 24;
  const increment = () => {
      columns = columns + 1;
    },
    decrement = () => {
      columns = columns - 1;
    };
</script>

<div class="b:1|solid|rgb($(color-border)) block p:16" style={sampleStyle}>
  <div class="input-number-wrap">
    <div class="input-number-handler-wrap">
      <button
        class="input-number-handler input-number-handler-up"
        on:click={increment}
        ><span class="input-number-handler-icon input-number-handler-icon-up"
        ></span></button
      >
      <button
        class="input-number-handler input-number-handler-down"
        on:click={decrement}
        ><span class="input-number-handler-icon input-number-handler-icon-down"
        ></span></button
      >
    </div>
    <input
      type="number"
      name=""
      id=""
      placeholder="outline"
      class="input-number outline"
      bind:value={columns}
    />
  </div>
</div>
