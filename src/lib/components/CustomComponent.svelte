<script>
  import "../../components/MyElement.svelte";
  export let currentComponent;
</script>

<div
  class="p:32 flex ai:center jc:center diagonal b:1|solid|rgb($(color-border)) h:100% r:6 color:red>my-element>p"
>
  <my-element name={currentComponent}>
    <p>This is some slotted content</p>
  </my-element>
</div>
