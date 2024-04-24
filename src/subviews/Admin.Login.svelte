<script>
  import Main from "../layout/Main.svelte";
  import Icon from "@iconify/svelte";
</script>

<Main>
  <div class="flex flex:col ai:center jc:center gap:16 h:100%">
    <h3>Admin Login</h3>
    <button class="outline md">
      <span class="lh:0 mr:8">
        <Icon icon="flat-color-icons:google"></Icon>
      </span>
      Sign in with google
    </button>
  </div>
</Main>
