<script>
  import { Collapse } from "../../../../components/collapse/index";
  import Modal from "../../../../components/modal/Modal.svelte";
  import Editor from "./Editor.svelte";
</script>

<Collapse>
  <Collapse.Panel>
    <div slot="header">Form Footer</div>
    <Editor slot="content"></Editor>
  </Collapse.Panel>
</Collapse>
