<script>
  import Icon from "@iconify/svelte";
  export let buttonText = "button text";
  export let type = "default";
  export let size = "default";
  export let color = "default";
  export let buttonContent = "textOnly";
  export let btnCircle = false;
  export let disabled = false;
  let classes = {
    default: "btn",
    types: {
      default: "btn-default",
      dashed: "btn-dashed",
      fill: "btn-fill",
      text: "btn-text",
      link: "btn-link",
    },
    sizes: {
      sm: "btn-sm",
      default: "",
      lg: "btn-lg",
    },
    colors: {
      default: "",
      success: "btn-success",
      warning: "btn-warning",
      danger: "btn-danger",
      info: "btn-info",
    },
    buttonContents: {
      textOnly: "",
      iconOnly: "btn-icon-only",
      iconLeft: "btn-icon-left",
      iconRight: "btn-icon-right",
    },
  };
</script>

<button
  class="{classes.default} {classes.types[type]} {classes.sizes[size]} {classes
    .colors[color]} {classes.buttonContents[buttonContent]} {btnCircle
    ? 'btn-circle'
    : ''} {disabled ? 'btn-disabled' : ''}"
  {disabled}
>
  {#if buttonContent === "iconOnly"}
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
  {:else if buttonContent === "iconLeft"}
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
    <span> {buttonText}</span>
  {:else if buttonContent === "iconRight"}
    <span> {buttonText}</span>
    <span class="btn-icon"><Icon icon="tabler:check"></Icon></span>
  {:else}
    {buttonText}
  {/if}
</button>
