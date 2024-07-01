<script>
  import { sampleData } from "../lib/components.config";
  import Icon from "@iconify/svelte";
  import SampleScreenshot from "../assets/sample-screenshot.png";
  import University from "../assets/university.jpg";
  import Office from "../assets/office.jpg";
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
      <div class=" flex:1 flex flex-column mb:16>*:first">
        <div class="h:100%">
          <Menu></Menu>
          <div class="col-16 h:100%">
            <div class="flex flex-column jc:center gap:8 p:20 h:100%">
              <div class="font-size-5xl f:bold">
                Simplify, Streamline, Succeed!
              </div>
              <div class="font-size-3xl f:semibold">
                Elevate Your University Workflow with Our Intuitive Suite of
                Tools
              </div>
              <p>
                At Cascade Tools, we understand the unique challenges faced by
                universities. That’s why we’ve designed a comprehensive
                collection of user-friendly tools to enhance productivity, save
                time, and streamline your processes.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="h:100% rel">
          <div
            class="bg:blue-80 abs inset:0 rotate(2) transform:bottom|right r:12"
          ></div>
          <div
            class="bg:teal-80 abs inset:0 rotate(1) transform:bottom|right r:12"
          ></div>
          <div class="bg:crimson-80 abs inset:0 r:12">
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
        </div> -->
      </div>
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
          <img src={Office} alt="" class="object:cover r:6" />
        </div>
      </div>
    </div>
  </div>
  <div class="py:40">
    <div class="col-20 mx:auto rel">
      <div class="by:2|solid|red-60 p:32|0 text:center flex flex-column gap:32">
        <h2 class="font-size-5xl">Used and loved by</h2>
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
  </div>
  <div class="bg:crimson-90 py:150 top-point rel">
    <div class="col-20 mx:auto p:16">
      <h2 class="font-size-5xl">Features</h2>
    </div>
    <div class="col-20 mx:auto pt:24 bg:teal-90 p:32 r:24">
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
    <div
      class="h:120 top-point bg:rgb(157|224|236) abs left:0 right:0 bottom:0 w:100%"
    ></div>
  </div>
  <div class=" rel">
    <div class="col-20 h:2xs mx:auto rel mb:20">
      <!-- <span
      class="abs left:0 right:0 top:30% h:80% mx:auto w:95% r:24 rotate(-6) bg:crimson-80/.5"
    ></span> -->
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
        <div class="flex:1 flex ai:center px:32 overflow-x:auto">
          <Flex gap="lg">
            {#each Array(13) as _, i}
              <div class="col-5 rel">
                <Card>
                  <div slot="content" class="flex flex-column gap:8">
                    <Flex direction="column" gap="4">
                      <div>Testimonial</div>
                      <Rate></Rate>
                    </Flex>
                    <p>
                      "I've been using Cascade Tools for several years now, and
                      I can't imagine going back. It's a game changer for my
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
                <div
                  class="h:2 bg:crimson-70 abs w:96% r:4 right:0 left:0 bottom:2 mx:auto"
                ></div>
              </div>
            {/each}
          </Flex>
        </div>
      </div>
    </div>
  </div>

  <div class="col-20 mx:auto my:24">
    <div
      class="h:3xs bg:black r:12 color:white flex ai:center px:60 gap:32 rel"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 404"
        fill="none"
        class="abs inset:0 h:3xs"
      >
        <defs>
          <linearGradient
            id="a"
            x1="1520.54"
            x2="574.409"
            y1="-715.171"
            y2="236.702"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="c"
            x1="1220.81"
            x2="-109.983"
            y1="-965.496"
            y2="371.143"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="e"
            x1="1150"
            x2="560"
            y1="-56"
            y2="534"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="g"
            x1="1666.66"
            x2="1284.81"
            y1="-12.334"
            y2="365.162"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
          <mask id="h" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M0 0h1440v404H0Z"></path>
          </mask>
          <mask id="f" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M0 0h1440v404H0Z"></path>
          </mask>
          <mask id="d" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M0 0h1440v404H0Z"></path>
          </mask>
          <mask id="b" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M0 0h1440v404H0Z"></path>
          </mask>
        </defs>
        <path
          fill="url(#a)"
          d="M-767.762 1417.76c-36.31 36.31-36.31 95.18 0 131.49s95.181 36.31 131.491 0L1050.25-137.272c36.32-36.31 36.32-95.181 0-131.491-36.31-36.311-95.176-36.311-131.487 0z"
          mask="url(#b)"
          opacity=".6"
          style="fill:url(#a)"
        ></path>
        <path
          fill="url(#c)"
          d="M-2001.5 1955.51c-70.42 70.41-70.42 184.58 0 255 70.41 70.41 184.58 70.41 254.99 0L553.502-89.502c70.415-70.416 70.415-184.581 0-254.996-70.415-70.416-184.581-70.415-254.996 0z"
          mask="url(#d)"
          opacity=".6"
          style="fill:url(#c)"
        ></path>
        <path
          fill="url(#e)"
          d="M885.302 294.853c15.621-15.621 15.621-40.948 0-56.569-15.621-15.621-40.948-15.621-56.569 0L-932.715 1999.73c-15.621 15.62-15.621 40.95 0 56.57 15.621 15.62 40.947 15.62 56.568 0z"
          mask="url(#f)"
          opacity=".6"
          style="fill:url(#e)"
        ></path>
        <path
          fill="url(#g)"
          d="M1659.26 221.738c60.89-60.887 60.89-159.605 0-220.492s-159.6-60.887-220.49 0L-158.755 1598.77c-60.887 60.89-60.887 159.61 0 220.49 60.887 60.89 159.605 60.89 220.492 0z"
          mask="url(#h)"
          opacity=".6"
          style="fill:url(#g)"
        ></path>
      </svg>
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

  <div class="col-20 mx:auto my:24 rel">
    <div class="rel">
      <div class="abs inset:0 h:50% my:auto r:24 bg:url({University})"></div>
      <div class="col-16 mx:auto">
        <div class="flex ai:center rel">
          <div class="bg:rgb(133|199|211) rl:12 p:8">
            <div class="p:16 bg:rgb(157|224|236) rl:10">
              <h2 class="font-size-5xl">Unlock Your Potential</h2>
              <p>
                You can book a demo with us by filling in your details in the
                form. If you have filled in your details, the next step will be
                announced via email for further processing.
              </p>
            </div>
          </div>
          <div
            class="bg:rgb(157|224|236) shadow:$(shadow-secondary) w:80% rel mb:0 r:16"
          >
            <div class="font-size-3xl p:24">Get started with a demo</div>
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
  </div>
</div>
