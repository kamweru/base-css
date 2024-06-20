<script>
  import Icon from "@iconify/svelte";
  import { appStore } from "../../AppStore";
  import Popover from "../popover/Popover.svelte";
  import "../styles/popconfirm.css";
  export let currentComponent;
  let open = false;
</script>

<div class={$appStore.properties[currentComponent].classes}>
  <button class="btn btn-danger" on:click={() => (open = true)}
    >Delete Task</button
  >
  <Popover bind:open>
    <div class="popconfirm-inner">
      <span class="icon popconfirm-icon">
        <Icon icon="akar-icons:info-fill" />
      </span>
      <div class="popconfirm-content">
        <div class="popconfirm-head">
          <span class="popconfirm-title">Delete Task</span>
        </div>
        <div class="popconfirm-message">
          Are you sure you want to delete this task?
        </div>
        <div class="popconfirm-actions">
          <button class="btn btn-sm">No</button>
          <button class="btn btn-fill btn-danger btn-sm">Yes</button>
        </div>
      </div>
    </div>
  </Popover>
</div>
