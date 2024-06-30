<script>
  import { sampleData } from "../lib/components.config";
  import Icon from "@iconify/svelte";
  import SampleScreenshot from "../assets/sample-screenshot.png";
  import Flex from "../lib/components/flex/Flex.svelte";
  import Header from "../lib/components/header/Header.svelte";
  import Menu from "../lib/components/menu/Menu.svelte";
  import Tabs from "../lib/components/tabs/Tabs.svelte";
  let pageKey = "landing 1";
</script>

<div class="h:100% overflow:auto">
  <Header>
    <div class="flex ai:center flex-row mx:auto">
      <h4>Cascade Tools</h4>
      <Menu></Menu>
    </div>
  </Header>
  <div class="flex flex-column jc:center bg:red-90">
    <div class="col-6 mx:auto">
      <div class="flex flex-column gap:36 text:center py:60">
        <h1>{sampleData.landing[pageKey].hero.title}</h1>
        <h4>{sampleData.landing[pageKey].hero.subtitle}</h4>
        <p>
          {sampleData.landing[pageKey].hero.description}
        </p>
        <button class="button button-fill button-lg"
          >{sampleData.landing[pageKey].hero.cta}</button
        >
        <div class="rotate(-15)">
          <img src={SampleScreenshot} alt="" class="object:cover w:full" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg:red-90 grid grid-cols:6 grid-rows:6 gap:16">
    <div class="bg:blue-70 w:100% h:180"></div>
    <div class="bg:blue-70 w:100% grid-row-span:5"></div>
    <div class="bg:blue-70 w:100% grid-row-span:2"></div>
    <div class="bg:blue-70 w:100% grid-row-span:4"></div>
    <div class="bg:blue-70 w:100% grid-row-span:3 grid-col-span:4"></div>
    <div class="bg:blue-70 w:100% grid-row-span:3 grid-col-span:4"></div>
  </div>
  <div class="cssportal-grid">
    <div class="div1">div1</div>
    <div class="div2">div2</div>
    <div class="div3">div3</div>
    <div class="div5">div5</div>
    <div class="div6">div6</div>
    <div class="div7">div7</div>
  </div>
  <div class="bg:red-90 cols:auto|320px gap:20">
    <div
      class="w:full square bg:beryl-90 rounded break-inside:avoid mb:20"
    ></div>
    <div class=" h:380 bg:beryl-90 break-inside:avoid mb:20"></div>
    <img
      src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
      class="object:cover w:100% break-inside:avoid mb:20"
      alt=""
    />
    <div class="h:180 bg:beryl-90 break-inside:avoid mb:20"></div>
    <div class=" h:380 bg:beryl-90 break-inside:avoid mb:20"></div>
    <div class=" h:380 bg:beryl-90 break-inside:avoid mb:20"></div>
  </div>
  <Flex wrap={true} justify="center">
    {#each sampleData.landing[pageKey].features as feature}
      <div class="col-6 b:1|solid|red-60">
        <Flex align="center" direction="column">
          <div>
            <img
              src={SampleScreenshot}
              class="object:contain w:100%"
              alt=""
              srcset=""
            />
          </div>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </Flex>
      </div>
    {/each}
  </Flex>
</div>
