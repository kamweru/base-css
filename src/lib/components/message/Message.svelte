<script>
  import Icon from "@iconify/svelte";
  import "../styles/message.css";
  export let cssVariables = "";
  let messages = [
    "message-warning",
    "message-success",
    "mesage-info",
    "message-danger",
  ];
</script>

<div class="flex flex:col gap:8">
  <div class="message" style={cssVariables}>
    <div class="message-content">
      <span class="icon message-icon">
        <Icon icon="akar-icons:info-fill" />
      </span>
      <span class="message-text">
        This is a prompt message for success, and it will disappear in 10
        seconds
      </span>
    </div>
  </div>
  {#each messages as message}
    <div class="message {message}" style={cssVariables}>
      <div class="message-content">
        <span class="icon message-icon">
          <Icon icon="akar-icons:info-fill" />
        </span>
        <span class="message-text">
          This is a prompt message for success, and it will disappear in 10
          seconds
        </span>
      </div>
    </div>
  {/each}
</div>
