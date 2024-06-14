<script>
  import { appStore } from "../../AppStore";
  export let currentComponent;
  export let value = 3;
  const increment = () => {
      $appStore.properties[currentComponent].value += 1;
    },
    decrement = () => {
      $appStore.properties[currentComponent].value -= 1;
    };
  $appStore.properties[currentComponent].value = value;
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
    value={$appStore.properties[currentComponent].value}
    placeholder="3"
    class={$appStore.properties[currentComponent].classes}
  />
</div>
