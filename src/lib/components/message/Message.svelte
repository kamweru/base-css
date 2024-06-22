<script>
  import Icon from "@iconify/svelte";
  import "../styles/message.css";
  let messages = [
    "",
    "mesage-info",
    "message-success",
    "message-warning",
    "message-danger",
  ];
</script>

<div class="flex flex:col gap:8">
  {#each messages as message}
    <div class="message {message}">
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
