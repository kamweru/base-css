<script>
  import "../styles/numberinput.css";
  export let cssVariables = "";
  export let value = 3;
  export let step = 1;
  export let inputSize = "md";
  let inputSizes = {
    sm: "numberinput-sm",
    md: "",
    lg: "numberinput-lg",
  };
  const increment = () => {
      value += parseFloat(step);
    },
    decrement = () => {
      value -= parseFloat(step);
    };
</script>

<!-- <div class="flex flex:col gap:8"> -->
<div class="numberinput {inputSizes[inputSize]}" style={cssVariables}>
  <div class="numberinput-handler-wrap">
    <button
      class="numberinput-handler numberinput-handler-up"
      on:click={increment}
      ><span class="numberinput-handler-icon numberinput-handler-icon-up"
      ></span></button
    >
    <button
      class="numberinput-handler numberinput-handler-down"
      on:click={decrement}
      ><span class="numberinput-handler-icon numberinput-handler-icon-down"
      ></span></button
    >
  </div>
  <input
    type="number"
    {value}
    {step}
    placeholder="3"
    class="numberinput-input"
    on:change={(e) => (value = parseFloat(e.target.value))}
  />
</div>

<!-- <div class="numberinput numberinput-lg numberinput-fill">
    <div class="numberinput-handler-wrap">
      <button
        class="numberinput-handler numberinput-handler-up"
        on:click={increment}
        ><span class="numberinput-handler-icon numberinput-handler-icon-up"
        ></span></button
      >
      <button
        class="numberinput-handler numberinput-handler-down"
        on:click={decrement}
        ><span class="numberinput-handler-icon numberinput-handler-icon-down"
        ></span></button
      >
    </div>
    <input
      type="number"
      {value}
      {step}
      placeholder="3"
      class="numberinput-input"
      on:change={(e) => (value = parseFloat(e.target.value))}
    />
  </div>
  <div class="numberinput numberinput-sm">
    <div class="numberinput-handler-wrap">
      <button
        class="numberinput-handler numberinput-handler-up"
        on:click={increment}
        ><span class="numberinput-handler-icon numberinput-handler-icon-up"
        ></span></button
      >
      <button
        class="numberinput-handler numberinput-handler-down"
        on:click={decrement}
        ><span class="numberinput-handler-icon numberinput-handler-icon-down"
        ></span></button
      >
    </div>
    <input
      type="number"
      {value}
      {step}
      placeholder="3"
      class="numberinput-input"
      on:change={(e) => (value = parseFloat(e.target.value))}
    />
  </div>
  <div class="numberinput numberinput-lg">
    <div class="numberinput-handler-wrap">
      <button
        class="numberinput-handler numberinput-handler-up"
        on:click={increment}
        ><span class="numberinput-handler-icon numberinput-handler-icon-up"
        ></span></button
      >
      <button
        class="numberinput-handler numberinput-handler-down"
        on:click={decrement}
        ><span class="numberinput-handler-icon numberinput-handler-icon-down"
        ></span></button
      >
    </div>
    <input
      type="number"
      {value}
      {step}
      placeholder="3"
      class="numberinput-input"
      on:change={(e) => (value = parseFloat(e.target.value))}
    />
  </div> 
</div>-->
