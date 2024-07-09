<script>
  import { Collapse } from "../../../../components/collapse/index";
  import Modal from "../../../../components/modal/Modal.svelte";
  import Editor from "./Editor.svelte";
</script>

<Collapse>
  <Collapse.Panel>
    <div slot="header">Form Header</div>
    <Editor slot="content"></Editor>
  </Collapse.Panel>
</Collapse>

<!-- 
<Modal>
  <div slot="trigger">
    <span>open modal...</span>
  </div>
  <div slot="content">modal content</div>
</Modal> -->
