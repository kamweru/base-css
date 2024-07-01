<script>
  import { sampleData } from "../lib/components.config";
  import Icon from "@iconify/svelte";
  import SampleScreenshot from "../assets/sample-screenshot.png";
  import University from "../assets/university.jpg";
  import Flex from "../lib/components/flex/Flex.svelte";
  import Field from "../lib/components/field/Field.svelte";
  import Rate from "../lib/components/rate/Rate.svelte";
  import Header from "../lib/components/header/Header.svelte";
  import Menu from "../lib/components/menu/Menu.svelte";
  import Tabs from "../lib/components/tabs/Tabs.svelte";
  import Card from "../lib/components/card/Card.svelte";
  let pageKey = "landing 1";
</script>

<div class="h:100% overflow:auto bg:rgb(157|224|236)">
  <!-- <Header>
    <div class="flex ai:center flex-row mx:auto">
      <h4>Cascade Tools</h4>
      <Menu></Menu>
    </div>
  </Header> -->
  <div class="col-20 mx:auto pt:24 mb:20">
    <div class="flex gap:32">
      <div class="col-4 mb:16>*:first">
        <div class="flex ai:center jc:center p:16">
          <div class="rounded w:192 square bg:yellow-70"></div>
        </div>
        <Flex>
          <div
            class="bg:white r:8 h:100% p:16 flex flex-column gap:16 jc:space-between"
          >
            <Flex direction="column">
              <h3>Customizable Workflows</h3>
              <p>
                Our platform allows teams to create and manage custom workflows
                that fit their unique needs and processes
              </p>
            </Flex>
            <div>
              <div class="font-size-6xl f:semibold">20%</div>
              <div>increase in productivity</div>
            </div>
            <div>
              <div class="font-size-6xl f:semibold">45%</div>
              <div>increase in efficiency</div>
            </div>
          </div>
        </Flex>
      </div>
      <div class=" col-4 mb:16>*:first">
        <div class="bg:black r:8 color:white p:16 flex flex-column gap:16">
          <h3>Real-time Communication</h3>
          <p>
            whether it's email, chat, or video, our platform makes it easy for
            teams to collaborate and communicate from anywhere
          </p>
        </div>
        <div class="bg:white r:8">
          <img
            src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
            alt=""
            class="object:cover r:6"
          />
        </div>
      </div>
      <div class=" flex:1 flex flex-column mb:16>*:first">
        <div>
          <Menu></Menu>
          <div class="flex flex-column gap:8 p:20">
            <div class="font-size-5xl f:bold">
              Simplify, Streamline, Succeed!
            </div>
            <div class="font-size-3xl f:semibold">
              Elevate Your University Workflow with Our Intuitive Suite of Tools
            </div>
            <p>
              At Cascade Tools, we understand the unique challenges faced by
              universities. That’s why we’ve designed a comprehensive collection
              of user-friendly tools to enhance productivity, save time, and
              streamline your processes.
            </p>
          </div>
        </div>
        <div class="h:100% rel">
          <div class="bg:blue-80 abs top:0 bottom:0 left:20 right:0 r:12"></div>
          <div
            class="bg:teal-80 abs top:10 bottom:0 left:10 right:0 r:12"
          ></div>
          <div class="bg:crimson-80 abs top:20 bottom:0 left:0 right:0 r:12">
            <div class="flex flex-column h:100% ai:center jc:center p:16">
              <div class="flex gap:32">
                <div class="">
                  <Flex direction="column">
                    <Flex>
                      <div class="bg:white p:8|12 rounded">#Features</div>
                      <div class="bg:white p:8|12 rounded">#What's new</div>
                    </Flex>
                    <Flex>
                      <Flex direction="column">
                        <div
                          class="bg:black color:white w:24 square text:center round"
                        >
                          3
                        </div>
                        <div
                          class="bg:black color:white w:24 square text:center round"
                        >
                          2
                        </div>
                        <div
                          class="bg:black color:white w:24 square text:center round"
                        >
                          1
                        </div>
                      </Flex>
                      <Flex direction="column">
                        <h3>Virtual Whiteboarding</h3>
                        <p>
                          The platfornm offers a virtual whiteboarding feature
                          that allows teams to brainstorm and communicate ideas
                          visually in real-time.
                        </p>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
                <div class="p:10 flex jc:center bg:blue h:100%">
                  <img
                    src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
                    alt=""
                    class="object:cover aspect:5/4 r:6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-20 mx:auto rel">
    <div class="by:2|solid|red-60 p:32|0 text:center flex flex-column gap:32">
      <h2>Used and loved by</h2>
      <div class="flex jc:space-between">
        {#each Array(6) as _, i}
          <div class=" h:20 p:6 flex ai:center gap:16">
            <img
              src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
              alt=""
              class="object:cover h:20 square r:6"
            />
            <h4>Company {i}</h4>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="col-20 h:2xs mx:auto rel mb:20">
    <span
      class="abs left:0 right:0 top:30% h:80% mx:auto w:95% r:24 rotate(-6) bg:crimson-80/.5"
    ></span>
    <div class="p:32|16 flex flex-column gap:32 rel h:100%">
      <Flex justify="spaceBetween">
        <div class="col-6">
          <h2 class="font-size-5xl">The results speak for themselves</h2>
        </div>
        <button class="button button-text button-icon-only">
          <span class="button-icon font-size-3xl">
            <Icon icon="heroicons:arrow-long-right"></Icon>
          </span>
        </button>
      </Flex>
      <div class="flex:1 flex ai:center px:32">
        <Flex>
          {#each Array(3) as _, i}
            <div class="col-5">
              <Card>
                <div slot="content" class="flex flex-column gap:8">
                  <Flex direction="column" gap="4">
                    <div>Testimonial</div>
                    <Rate></Rate>
                  </Flex>
                  <p>
                    "I've been using Cascade Tools for several years now, and I
                    can't imagine going back. It's a game changer for my
                    university workflow."
                  </p>
                  <div class="flex gap:16">
                    <img
                      src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
                      alt=""
                      class="object:cover h:20 square r:6"
                    />
                    <h4>James Smith</h4>
                  </div>
                  <div>CEO, Orthodox University</div>
                </div>
              </Card>
            </div>
          {/each}
        </Flex>
      </div>
    </div>
  </div>

  <div class="col-20 mx:auto rel mb:24">
    <div class="h:3xs bg:black r:12 color:white flex ai:center px:60 gap:32">
      <div class="col-6">
        <h2 class="font-size-5xl">We've helped institutions grow and scale</h2>
      </div>
      <div class="flex jc:space-around flex:1">
        <div>
          <h2 class="font-size-5xl">99%</h2>
          <div>Institutional success</div>
        </div>
        <div>
          <h2 class="font-size-5xl">10</h2>
          <div>Years of experience</div>
        </div>
        <div>
          <h2 class="font-size-5xl">20+</h2>
          <div>Companies using Cascade</div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg:gray-90 rt:24">
    <div class="col-20 mx:auto p:16">
      <h2 class="font-size-5xl">Features</h2>
    </div>
    <div class="col-20 mx:auto pt:24 bg:teal-90 p:32 rt:24">
      <div>
        <div>INTEGRATION</div>
        <div class="col-6">
          <h2 class="font-size-5xl">
            Customizable Online Data Collection Forms
          </h2>
        </div>
        <div class="flex jc:space-between ai:center p:16 gap:16 mt:24">
          <ul
            class="flex:1 flex flex-column bt:1|solid|red-60 bb:1|solid|red-60>* bb:2>*:first"
          >
            {#each Array(5) as _, i}
              <li class="p:11|16">Feature {i}</li>
            {/each}
          </ul>
          <div class="bg:teal-80 flex:1 h:3xs flex r:12">
            <div class="p:16">
              <Flex>
                <div class="bg:white p:8|12 rounded">#Features</div>
                <div class="bg:white p:8|12 rounded">#What's new</div>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-20 mx:auto mt:24 rel">
    <div class="col-20 mx:auto p:16">
      <h2 class="font-size-5xl">Unlock Your Potential</h2>
    </div>
    <div class="h:320 r:24 bg:url({University})"></div>
    <div class="flex h:3xs gap:8">
      <div class="flex:1">
        <div class="col-6 font-size-2xl ml:auto">
          You can book a demo with us by filling in your details in the form. If
          you have filled in your details, the next step will be announced via
          email for further processing.
        </div>
      </div>
      <div class="flex:1">
        <div
          class="bg:rgb(157|224|236) shadow:$(shadow-secondary) w:80% rel top:-60% r:16"
        >
          <div class="font-size-3xl p:24">Book a Demo</div>
          <form action="" class="p:24">
            <Flex direction="column">
              {#each Array(5) as _, i}
                <Field>
                  <span slot="label">Field {i}</span>
                  <input
                    slot="input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    class="input"
                  />
                </Field>
              {/each}
            </Flex>
            <div class="text:end mt:16">
              <button class="button button-fill">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="col-20 mx:auto pt:24">
    <div class=" grid grid-cols:6 grid-rows:6 gap:16">
      <div class="w:100% grid-row-span:2">
        <div class="flex ai:center jc:center p:16 h:full">
          <div class="rounded w:100% square b:2|solid|blue-70"></div>
        </div>
      </div>
      <div class=" w:100% grid-row-span:3">
        <div class="bg:white r:8 h:100% p:16 flex flex-column jc:space-between">
          <Flex direction="column">
            <h3>Customizable Workflows</h3>
            <p>
              Our platform allows teams to create and manage custom workflows
              that fit their unique needs and processes
            </p>
          </Flex>
          <div>
            <div class="font-size-6xl f:semibold">20%</div>
            <div>increase in productivity</div>
          </div>
          <div>
            <div class="font-size-6xl f:semibold">45%</div>
            <div>increase in efficiency</div>
          </div>
        </div>
      </div>
      <div class="w:100% grid-row-span:3">
        <div class="bg:white r:8 h:100%">
          <img
            src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
            alt=""
            class="object:contain r:6"
          />
        </div>
      </div>
      <div class="w:100% grid-row-span:2">
        <div
          class="bg:black r:8 h:100% color:white p:16 flex flex-column gap:16"
        >
          <h3>Real-time Communication</h3>
          <p>
            whether it's email, chat, or video, our platform makes it easy for
            teams to collaborate and communicate from anywhere
          </p>
        </div>
      </div>
      <div class="w:100% grid-row-span:3 grid-col-span:4">
        <Menu></Menu>
        <div class="col-16 flex flex-column gap:8 p:20">
          <div class="font-size-5xl f:bold">Simplify, Streamline, Succeed!</div>
          <div class="font-size-3xl f:semibold">
            Elevate Your University Workflow with Our Intuitive Suite of Tools
          </div>
        </div>
      </div>
      <div class=" w:100% grid-row-span:2 grid-col-span:4">
        <div class="h:100% rel">
          <div
            class="bg:blue-80 w:3/4 abs top:0 bottom:0 left:20 right:0 r:12"
          ></div>
          <div
            class="bg:teal-80 w:3/4 abs top:10 bottom:0 left:10 right:0 r:12"
          ></div>
          <div
            class="bg:crimson-80 w:3/4 abs top:20 bottom:0 left:0 right:0 r:12"
          >
            <Flex gap="32">
              <div class="p:16">
                <Flex direction="column">
                  <Flex>
                    <div class="bg:white p:8|12 rounded">#Features</div>
                    <div class="bg:white p:8|12 rounded">#What's new</div>
                  </Flex>
                  <Flex>
                    <Flex direction="column">
                      <div
                        class="bg:black color:white w:24 square text:center round"
                      >
                        3
                      </div>
                      <div
                        class="bg:black color:white w:24 square text:center round"
                      >
                        2
                      </div>
                      <div
                        class="bg:black color:white w:24 square text:center round"
                      >
                        1
                      </div>
                    </Flex>
                    <Flex direction="column">
                      <h3>Virtual Whiteboarding</h3>
                      <p>
                        The platfornm offers a virtual whiteboarding feature
                        that allows teams to brainstorm and communicate ideas
                        visually in real-time.
                      </p>
                    </Flex>
                  </Flex>
                </Flex>
              </div>
              <div class="p:10 flex jc:center bg:blue h:100%">
                <img
                  src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
                  alt=""
                  class="object:cover aspect:5/4 r:6"
                />
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  </div>
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
