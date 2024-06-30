<script>
  import { sampleData } from "../lib/components.config";
  import Menu from "../lib/components/menu/Menu.svelte";
  import Card from "../lib/components/card/Card.svelte";
  import Flex from "../lib/components/flex/Flex.svelte";
  import Icon from "@iconify/svelte";
  import Samples from "../lib/molecules/Samples.svelte";
</script>

<div class="h:100% overflow-y:auto">
  <Menu></Menu>
  <div class="flex bg:crimson-80">
    <div class="flex:1 h:xs text:center flex ai:center jc:center">
      <div class="my:16>*">
        <h1 class="font-size-4xl">
          <span>Base CSS</span>
        </h1>
        <div>Base CSS is an open-source set of prebuilt UI components</div>
        <button class="button button-fill button-lg">Get Started</button>
        <div class="flex ai:center bg:beryl-90">
          {#each [{ title: "home", url: "/" }, { title: "documentation", url: "/docs" }, { title: "builder", url: "/builder" }, { url: "/landing", title: "Landing Page" }, { url: "/app", title: "Application" }] as link}
            <a class="button button-outline button-sm" href={link.url}
              >{link.title}</a
            >
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="col-20 mx:auto mt:32">
    <Flex gap="32">
      {#each sampleData.features as feature}
        <Card withBg={false}>
          <Flex slot="content" align="flexStart">
            <span
              class="bg:beryl-80 p:8 r:5 h:min inline-flex ai:center jc:center"
            >
              <span class="icon font-size-3xl">
                <Icon icon={feature.icon} />
              </span>
            </span>
            <Flex direction="column" gap="sm">
              <h3 class="font-size-xl">{feature.title}</h3>
              <div>{feature.description}</div>
            </Flex>
          </Flex>
        </Card>
      {/each}
    </Flex>
  </div>

  <div class="bg:blue-80 col-20 mx:auto text:center mt:32">
    <h2 class="font-size-3xl">Get Started For Free</h2>
    <p>
      Bring your ideas to life in no time. Base CSS UI provides all the
      essential components you need to convert your vision into thriving
      start-ups.
    </p>
  </div>
  <Samples></Samples>
  <div class="mt:32">
    <div class="col-16 mx:auto flex jc:space-between">
      <div>Base CSS</div>
      {#each Array(3) as _}
        <ul>
          {#each Array(5) as _, i}
            <li>footer item {i}</li>
          {/each}
        </ul>
      {/each}
    </div>
    <div class="col-16 mx:auto">
      &copy; {new Date().getFullYear()} Base CSS
    </div>
  </div>
</div>
