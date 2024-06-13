<script>
  import { appStore } from "../AppStore";
  export let currentComponent;
</script>

<div class="p:16">
  <pre><code
      >{`<input class="${$appStore.properties[currentComponent].classes}"/>`}</code
    ></pre>
</div>
