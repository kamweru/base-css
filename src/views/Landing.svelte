<script>
  import Icon from "@iconify/svelte";
  import Flex from "../lib/components/flex/Flex.svelte";
  import Header from "../lib/components/header/Header.svelte";
  import Menu from "../lib/components/menu/Menu.svelte";
</script>

<div class="flex flex-column h:100% overflow:auto">
  <Header>
    <div class="flex ai:center flex-row mx:auto">
      <h4>Cascade Tools</h4>
      <Menu></Menu>
    </div>
  </Header>
  <div class="h:xs flex flex-column jc:center bg:red-90">
    <div class="col-6 mx:auto">
      <div class="flex flex-column gap:16 text:center">
        <h1>Cascade Tools</h1>
        <h4>For Universities</h4>
        <p>
          Experience the power of simplicity and efficiency with our intuitive
          tools designed to streamline your workflow, save time, and enhance
          your productivity.
        </p>
        <button class="button button-fill">Get Started Now</button>
      </div>
    </div>
  </div>
  <Flex justify="spaceEvenly">
    {#each Array(6) as _, i}
      <Flex align="center">
        <span class="icon">
          <Icon icon="tabler:check"></Icon>
        </span>
        <h3>item {i + 1}</h3>
      </Flex>
    {/each}
  </Flex>
</div>
