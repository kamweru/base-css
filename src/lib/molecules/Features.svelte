<script>
  import { sampleData } from "../components.config";
  import Flex from "../components/flex/Flex.svelte";
  let features = sampleData.landing["landing 1"].features,
    featureIndex = 0,
    feature = features[featureIndex];
</script>

<div class="bg:rgb($(green-7)) pt:160 pb:240 top-point rel">
  <div class="col-20 mx:auto p:16 mb:48">
    <h2 class="font-size-5xl color:white mb:24">Features</h2>
    <p class="color:white">View the features Cascade Tools has to offer</p>
  </div>
  <div class="col-20 h:720 mx:auto bg:rgb($(green-1)) p:32 r:24">
    <div class="h:100% flex flex-column jc:space-between">
      <div class="uppercase">{feature.subtitle}</div>
      <div class="col-8">
        <h2 class="font-size-5xl mb:24">{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
      <div class="flex jc:space-between ai:center p:16 gap:16 mt:24">
        <ul
          class="flex:1 flex flex-column bt:1|solid|rgb($(green-8)) bb:1|solid|rgb($(green-8))>* bb:2>*:first"
        >
          {#each features as featureItem}
            <li class="p:11|16">
              <span>
                <a
                  href=""
                  on:click|preventDefault={() => (feature = featureItem)}
                  class="color:inherit">{featureItem.title}</a
                >
              </span>
            </li>
          {/each}
        </ul>
        <div class="bg:rgb($(green-2)) flex:1 h:3xs flex r:12">
          <div class="p:16">
            <Flex>
              {#each feature.tags as tag}
                <div class="bg:white p:8|12 rounded">{tag}</div>
              {/each}
            </Flex>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="h:120 top-point bg:rgb($(green-1)) abs left:0 right:0 bottom:0 w:100%"
  ></div>
</div>
