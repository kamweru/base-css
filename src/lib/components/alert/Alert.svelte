<script>
  import Icon from "@iconify/svelte";
  import "../styles/alert.css";
  export let cssVariables = "";
  export let message = "message text";
  export let description = null;
  export let type = "default";
  export let closable = false;
  export let showIcon = false;
  let classes = {
      default: "alert",
      types: {
        default: "alert-default",
        info: "alert-info",
        success: "alert-success",
        warning: "alert-warning",
        error: "alert-danger",
      },
    },
    alertClasses = "";
  $: if (type) {
    alertClasses = `${classes.default} ${classes.types[type]}`;
    if (description) {
      alertClasses += " alert-with-description";
    }
  }
</script>

<div class={alertClasses} style={cssVariables} role="alert">
  {#if showIcon}
    <span class="alert-icon"><Icon icon="tabler:check"></Icon></span>
  {/if}
  <div class="alert-content">
    <div class="alert-message">{message}</div>
    {#if description}
      <div class="alert-description">
        {description}
      </div>
    {/if}
  </div>
  {#if closable}
    <button class="alert-close-btn">
      <Icon icon="tabler:x" />
    </button>
  {/if}
</div>
