<script>
  import { onMount } from "svelte";
  import MyElement from "../../components/MyElement.svelte";
  export let currentComponent;
  //   customElements.define("my-element", MyElement);

  onMount(() => {
    const el = document.querySelector("my-element");

    // get the current value of the 'name' prop
    console.log(el, MyElement);

    // set a new value, updating the shadow DOM
    // el.name = "everybody";
  });
</script>

<div
  class="p:32 flex ai:center jc:center diagonal b:1|solid|rgb($(color-border)) h:100% r:6"
>
  <!-- <div>{currentComponent}</div> -->
  <my-element name={currentComponent}>
    <p>This is some slotted content</p>
  </my-element>
</div>
