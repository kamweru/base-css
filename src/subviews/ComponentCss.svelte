<script>
  import { createStyleString, generateCSS } from "../lib/utils";
  export let currentComponent;
  const { cssString } = generateCSS(currentComponent.styles);
</script>

<div class="p:16">
  <pre>
      <code>
        {cssString}
      </code>
      </pre>
</div>
