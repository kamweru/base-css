<script>
  import Illustration from "../assets/illustration.svg";
  import Flex from "../lib/components/flex/Flex.svelte";
  import SignupForm from "../lib/auth/SignupForm.svelte";
</script>

<Flex class="h:100%" gap="0">
  <Flex align="center" justify="center" class="bg:red-94 flex:1">
    <div class="col-8 text:center">
      <h1 class="mb:16 color:rgb($(green-9))">Cascade Tools</h1>
      <img
        src={Illustration}
        class="object:cover b:1|solid|rgb($(green-1)) m:auto"
        alt=""
      />
    </div>
  </Flex>
  <Flex align="center" justify="center" class="bg:rgb($(green-1)) flex:1">
    <SignupForm></SignupForm>
  </Flex>
</Flex>
