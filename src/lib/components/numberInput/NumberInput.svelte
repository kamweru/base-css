<script>
  export let value = 3;
  export let step = 1;
  export let inputSize = "md";
  let inputSizes = {
    sm: "input-sm",
    md: "",
    lg: "input-lg",
  };
  const increment = () => {
      value += step;
    },
    decrement = () => {
      value -= step;
    };
</script>

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
    {value}
    placeholder="3"
    class="input input-number {inputSizes[inputSize]}"
    on:change={(e) => (value = parseInt(e.target.value))}
  />
</div>
