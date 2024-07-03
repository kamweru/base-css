<script>
  import { sampleData, getRandomColors } from "../lib/components.config";
  import Icon from "@iconify/svelte";
  import SampleScreenshot from "../assets/sample-screenshot.png";
  import University from "../assets/university.jpg";
  import Office from "../assets/office.jpg";
  import Flex from "../lib/components/flex/Flex.svelte";
  import Field from "../lib/components/field/Field.svelte";
  import Rate from "../lib/components/rate/Rate.svelte";
  import Header from "../lib/components/header/Header.svelte";
  import Button from "../lib/components/button/Button.svelte";
  import { Menu } from "../lib/components/menu/index";
  import { Tabs } from "../lib/components/tabs/index";
  import Card from "../lib/components/card/Card.svelte";
  import Features from "../lib/molecules/Features.svelte";
  import CompanyLogos from "../lib/molecules/CompanyLogos.svelte";
  let pageKey = "landing 1",
    activeMenu = sampleData.landing[pageKey].menuItems[0];
  export let tabItems = ["Home", "About", "Contact"].map((title, index) => ({
      title,
      value: title,
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quidem? " +
        index,
    })),
    activeTab = tabItems[0];
  // console.log(colors);
</script>

<div class="h:100% overflow:auto bg:rgb($(green-1)) color:rgb($(green-10))">
  <!-- <Header>
    <div class="flex ai:center flex-row mx:auto">
      <h4>Cascade Tools</h4>
      <Menu></Menu>
    </div>
  </Header> -->
  <!-- <Tabs>
    {#each tabItems as tabItem}
      <Tabs.Tab
        class="tab-item {tabItem.title === activeTab.title ? 'active' : ''}"
        label={tabItem.title}
        on:click={() => (activeTab = tabItem)}
      >
        <span slot="label">{tabItem.title}</span>
      </Tabs.Tab>
    {/each}
    <div slot="content" class="p:16">
      {activeTab.content}
    </div>
  </Tabs> -->
  <div class="col-20 mx:auto pt:32">
    <div class="flex gap:32">
      <div class="col-12">
        <div class="h:100% flex flex-column">
          <div class="h:100%">
            <Menu>
              {#each sampleData.landing[pageKey].menuItems as menuItem}
                <Menu.Item
                  class="menu-item color:inherit {menuItem.key ===
                  activeMenu.key
                    ? 'active'
                    : ''}"
                  on:click={() => {
                    activeMenu = menuItem;
                    console.log("clicked");
                  }}
                >
                  <span class="icon menu-item-icon">
                    <Icon icon="carbon:menu" />
                  </span>
                  {menuItem.title}
                </Menu.Item>
              {/each}
            </Menu>
            <div class=" h:100% pl:32">
              <div class="flex flex-column jc:center gap:16 p:20 h:100%">
                <div class="font-size-5xl f:bold">
                  <span class="color:rgb($(green-8))">
                    Simplify, Streamline, Succeed!
                  </span>
                </div>
                <div class="font-size-3xl f:semibold">
                  Elevate Your University Workflow with Our Intuitive Suite of
                  Tools
                </div>
                <p>
                  At Cascade Tools, we understand the unique challenges faced by
                  universities. That’s why we’ve designed a comprehensive
                  collection of user-friendly tools to enhance productivity,
                  save time, and streamline your processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 mx:auto rel">
        <svg
          class="abs w:100% h:100% transform:bottom|right fill:current color:rgb($(green-7))"
          fill="fillCurrent"
          viewBox="0 0 418.19977 383.12732"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 107.73193,0.25257296 C 62.131925,2.752573 36.531925,9.952573 20.131925,24.952573 c -11.3999996,10.4 -17.2999996,23.2 -19.39999964,42.8 -2.19999996,19.9 -0.1,35.899997 15.49999964,115.599997 20.7,105.4 24.3,120.3 35.6,144.2 6.2,13.1 11.6,20.6 21.6,30.2 14.6,13.9 30.400005,20.5 57.800005,24 27.2,3.5 111.3,-0.1 139.9,-6.1 54.2,-11.3 81.9,-46 115.6,-144.5 36.9,-108.4 40.7,-155.599997 14.8,-184.099997 -23,-25.1 -65.5,-35.9 -167.8,-42.8 -41.6,-2.9 -108.5,-5.00000004 -126,-4.00000004 z"
          ></path>
        </svg>
        <div class="grid grid-cols:2 rel">
          <div class="p:16">
            <div
              class="rel top:10 bg:white shadow:$(shadow-10) animate-float p:16 r:6"
            >
              <Flex direction="column">
                <h3>Customizable Workflows</h3>
                <p>
                  Our platform allows teams to create and manage custom
                  workflows that fit their unique needs and processes
                </p>
              </Flex>
            </div>
          </div>
          <div class="flex ai:center jc:center p:16">
            <div
              class="rounded w:full square bg:yellow-70 shadow:$(shadow-10)"
            ></div>
          </div>
          <div class="bg:blue-80">
            <div class="bg:white shadow:$(shadow-10) r:8">
              <img src={Office} alt="" class="object:cover r:6" />
            </div>
          </div>
          <div class="p:16">
            <div
              class="animate-float rel bottom:-40 right:-20"
              style="--animation-delay: 600ms;"
            >
              <div
                class="bg:rgb($(green-8)) r:8 color:white shadow:$(shadow-10) p:16 flex flex-column gap:16"
              >
                <h3>Real-time Communication</h3>
                <p>
                  whether it's email, chat, or video, our platform makes it easy
                  for teams to collaborate and communicate from anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
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
  <!-- <div class="col-4 mb:16>*:first">
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
      </div> -->
  <!-- <div class=" col-4 mb:16>*:first">
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
      </div> -->

  <Features></Features>
  <div class=" rel py:64">
    <div class="col-20 mx:auto rel mb:48">
      <div class="p:32|16 flex flex-column gap:32 rel h:100%">
        <div class="col-6">
          <h2 class="font-size-5xl mb:24">The results speak for themselves</h2>
          <p>See what our customers are saying about Cascade Tools</p>
        </div>
      </div>
    </div>
    <div class="bg:violet-80 overflow:hidden flex animation-box">
      {#each Array(5) as _, i}
        <div
          class="flex w:max landing-horizontal-loop"
          style="--duration: 14400ms;"
        >
          {#each sampleData.landing[pageKey].testimonials as testimonial}
            <div
              class="bg:{testimonial.color}-88 bb:6|solid|{testimonial.color}-70 w:3xs square p:16 flex flex-column jc:space-between"
            >
              <div>
                <svg
                  class="color:{testimonial.color}-70 fill:current h:32 w:32"
                  viewBox="0 0 75 56"
                  fill="fillCurrent"
                >
                  <path
                    d="M0 0V56L28.1239 27.9979V0H0ZM46.8761 0V56L75 28.0021V0H46.8761Z"
                  >
                  </path>
                </svg>
                <Rate></Rate>
              </div>
              <p>
                {testimonial.testimonial}
              </p>
              <div>
                <div class="flex gap:16 mb:12">
                  <img
                    src="https://css.master.co/images/foods/strawberry-yogurt.jpg"
                    alt=""
                    class="object:cover h:20 square r:6"
                  />
                  <h4>{testimonial.name}</h4>
                </div>
                <div>{testimonial.jobTitle}, {testimonial.company}</div>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    </div>
    <!-- <div class="flex:1 flex overflow:hidden">
      {#each Array(5) as _, i}
        <div
          class="landing-horizontal-loop flex w:max"
          style="--duration: 9515ms"
        >
          {#each Array(5) as _, j}
            <div class="w:3xs rel">
              <Card cssVariables="--card-bg: 244 242 240;">
                <div slot="content" class="flex flex-column gap:8">
                  <Flex direction="column" gap="4">
                    <svg
                      class="color:{getRandomColors(
                        i + 1
                      )[0]}-70 fill:current h:32 w:32"
                      viewBox="0 0 75 56"
                      fill="fillCurrent"
                    >
                      <path
                        d="M0 0V56L28.1239 27.9979V0H0ZM46.8761 0V56L75 28.0021V0H46.8761Z"
                      >
                      </path>
                    </svg>
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
                  <div>CEO, Orthodox University {i}-{j}</div>
                </div>
              </Card>
              <div
                class="h:3 bg:{getRandomColors(
                  i + 1
                )[0]}-70 abs w:96% r:4 right:0 left:0 bottom:2 mx:auto"
              ></div>
            </div>
          {/each}
        </div>
      {/each}
    </div> -->
  </div>
  <div class="py:64 bg:rgb($(green-2)) rt:48">
    <div class="col-20 mx:auto rel">
      <div class="p:32|0 text:center">
        <div class="col-10 mx:auto mb:48">
          <h2 class="font-size-5xl mb:24">
            Local and Global Institutions Trust Our Solutions
          </h2>
          <p>
            Cascade Tools is more than just software – it's a partner in your
            university's success. We offer ongoing support and training to
            ensure your staff gets the most out of our platform.
          </p>
        </div>
        <div class="col-12 mx:auto">
          <div class="grid grid-cols:3">
            {#each ["transistor", "wired", "digital", "kk", "agillic", "webflow"] as company, i}
              <div
                class="bg:rgb($(green-1)) w:100% square rotate(-1) rotate(1):hover shadow:$(shadow-10) p:6 flex ai:center jc:center gap:16"
              >
                <CompanyLogos {company} classes="h:64" />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rel py:64 bg:rgb($(green-10))">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 404"
      fill="none"
      class="abs inset:0"
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
    <div class="col-20 mx:auto">
      <div class="col-8 mx:auto mb:48">
        <h2 class="font-size-5xl color:white text:center">
          {sampleData.landing[pageKey].explore.title}
        </h2>
      </div>
      <div
        class="bg:rgb($(green-8)/.5) bd:blur(3) r:12 color:white flex ai:center rel"
      >
        {#each sampleData.landing[pageKey].explore.list as listItem}
          <div class="flex flex-column gap:16 p:32 br:1|solid|white br:0:last">
            <div class="flex jc:space-between ai:center">
              <span
                class="p:8 bg:{listItem.color}-80 color:{listItem.color} round"
              >
                <span class="icon font-size-3xl">
                  <Icon icon={listItem.icon} />
                </span></span
              >
              <span class="icon font-size-3xl">
                <Icon icon="fluent:arrow-up-right-32-regular" />
              </span>
            </div>
            <h4 class="font-size-2xl">{listItem.title}</h4>
            <p>{listItem.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="rel py:64 bg:rgb($(green-1))">
    <div class="abs inset:0 h:60% my:auto">
      <!-- <div class="h:100% bg:url({University}) object:center|bottom"></div> -->
      <img
        src={University}
        class="abs full object-fit:none object-position:bottom|left"
        alt=""
      />
      <span class="abs inset:0 bg:rgb($(green-1)/.5) bd:blur(2)"></span>
    </div>
    <div class="col-20 mx:auto rel">
      <div class="rel">
        <div class="col-16 mx:auto">
          <div class="flex ai:center rel">
            <div class="bg:rgb($(green-8)) rl:12 p:8">
              <div class="p:16 bg:rgb($(green-7)) rl:10">
                <h2 class="font-size-4xl mb:24">Unlock Your Potential</h2>
                <p>
                  You can book a demo with us by filling in your details in the
                  form. If you have filled in your details, the next step will
                  be announced via email for further processing.
                </p>
              </div>
            </div>
            <div
              class="bg:rgb($(green-7)) shadow:$(shadow-secondary) w:80% rel mb:0 r:16"
            >
              <div class="font-size-3xl f:semibold p:24">
                Get started with a demo
              </div>
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
  <div class="bg:rgb($(green-9)) color:white pt:64">
    <div class="col-20 mx:auto">
      <footer class="flex gap:32">
        <Flex direction="column">
          <h1 class="font-size-7xl">Cascade Tools</h1>
          <div class=" font-size-xl">
            Empowering you with tools to streamline your university workflow
          </div>
          <div class="">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </div>
        </Flex>
        <div class="p:16 b:2|solid|gray-88 bb:0 rt:8 flex gap:16">
          {#each sampleData.landing[pageKey].footer as item}
            <div class="flex flex-column gap:16">
              <h4 class="uppercase">{item.title}</h4>
              <ul>
                {#each item.list as link}
                  <li class="p:4|11">{link}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
        <div class="flex flex-column gap:8">
          <h4 class="font-size-3xl uppercase">Subscribe to our newsletter</h4>
          <p>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <Flex align="center">
            <input
              type="email"
              placeholder="Enter your email"
              class="input input-lg"
            />
            <button class="button button-lg button-fill">Subscribe</button>
          </Flex>
        </div>
      </footer>
    </div>
  </div>
</div>
