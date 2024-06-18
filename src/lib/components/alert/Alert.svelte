<script>
  import { appStore } from "../../AppStore";
  import Icon from "@iconify/svelte";
  import "../styles/alert.css";
  export let currentComponent;
</script>

<div class="flex flex:col gap:8">
  <div
    class="{$appStore.properties[currentComponent][
      'classes'
    ]} alert-warning alert-with-description"
    role="alert"
  >
    <span class="alert-icon"><Icon icon="tabler:check"></Icon></span>
    <div class="alert-content">
      <div class="alert-message">Warning</div>
      <div class="alert-description">
        This is a warning notice about something.
      </div>
    </div>
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
    </button>
  </div>

  <div
    class="{$appStore.properties[currentComponent]['classes']} alert-warning"
  >
    <span class="alert-icon"><Icon icon="tabler:check"></Icon></span>
    <div class="alert-content">
      <div class="alert-message">Warning</div>
      <!-- <div class="alert-description">
      This is a warning notice about something.
    </div> -->
    </div>
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
      <!-- <span class="btn-icon"><Icon icon="tabler:x" /></span> -->
    </button>
  </div>
  <div class="{$appStore.properties[currentComponent]['classes']} alert-info">
    <span class="alert-icon"><Icon icon="tabler:check"></Icon></span>
    <div class="alert-content">
      <div class="alert-message">Info</div>
      <!-- <div class="alert-description">
      This is a warning notice about something.
    </div> -->
    </div>
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
      <!-- <span class="btn-icon"><Icon icon="tabler:x" /></span> -->
    </button>
  </div>
  <div
    class="{$appStore.properties[currentComponent]['classes']} alert-success"
  >
    <span class="alert-icon"><Icon icon="tabler:check"></Icon></span>
    <div class="alert-content">
      <div class="alert-message">Success</div>
      <!-- <div class="alert-description">
      This is a warning notice about something.
    </div> -->
    </div>
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
      <!-- <span class="btn-icon"><Icon icon="tabler:x" /></span> -->
    </button>
  </div>
  <div class="{$appStore.properties[currentComponent]['classes']} alert-danger">
    <span class="alert-icon"><Icon icon="tabler:check"></Icon></span>
    <div class="alert-content">
      <div class="alert-message">Danger</div>
    </div>
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
    </button>
  </div>
  <div class="{$appStore.properties[currentComponent]['classes']} alert-danger">
    <div class="alert-content">
      <div class="alert-message">Danger</div>
    </div>
  </div>
  <div class="{$appStore.properties[currentComponent]['classes']} alert-danger">
    <div class="alert-content">
      <div class="alert-message">Danger</div>
    </div>
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
    </button>
  </div>
</div>
