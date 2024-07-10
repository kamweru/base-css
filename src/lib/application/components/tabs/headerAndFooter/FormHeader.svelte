<script>
  import { Collapse } from "../../../../components/collapse/index";
  import Editor from "./Editor.svelte";
</script>

<Collapse>
  <Collapse.Panel>
    <div slot="header">Form Header</div>
    <Editor slot="content"></Editor>
  </Collapse.Panel>
</Collapse>
