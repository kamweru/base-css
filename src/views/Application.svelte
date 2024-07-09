<script>
  import { appStore } from "../lib/AppStore";
  import { sampleData } from "../lib/components.config";
  import router from "page";
  import Icon from "@iconify/svelte";
  import { Menu } from "../lib/components/menu/index";
  import Flex from "../lib/components/flex/Flex.svelte";
  export let params;
  let pageDataIndex = "application",
    sidebarItems = [
      {
        title: "Audits",
        url: "audits",
        icon: "solar:list-check-outline",
        component: "Audits",
      },
      {
        title: "Calendar",
        url: "calendar",
        icon: "quill:calendar",
        component: "Calendar",
      },
      {
        title: "E-Files",
        url: "efiles",
        icon: "fluent:folder-24-regular",
        component: "Efiles",
      },
      {
        title: "Forms",
        url: "forms",
        icon: "fluent:form-24-regular",
        component: "Forms",
      },
      {
        title: "Users",
        url: "users",
        icon: "lucide:users-round",
        component: "Users",
      },
    ],
    activeSidebarItem = sidebarItems[0],
    currentComponent,
    currentRoute = router.current.split("/")[2];
  const loadComponent = async (component) => {
    currentComponent = (await import(`../lib/application/${component}.svelte`))
      .default;
  };
  //   onMount(() => {
  if (currentRoute) {
    loadComponent(currentRoute[0].toUpperCase() + currentRoute.slice(1));
    activeSidebarItem = sidebarItems.find((item) => item.url === currentRoute);
  } else {
    loadComponent(activeSidebarItem.component);
  }
  //   });
</script>

<div class="flex gap:8 h:100% bg:rgb($(gray-5)) p:8">
  <div class="col-3 bg:rgb($(gray-1)) r:16">
    <Flex direction="column" align="stretch" class="h:100% w:100%">
      <Flex class="p:16" align="center">
        <img src="https://picsum.photos/200" class="w:32 h:32 round" alt="" />
        <h4 class="font-size-2xl text:center color:rgb($(green-8))">
          Cascade Tools
        </h4>
      </Flex>
      <Menu direction="vertical">
        {#each sidebarItems as item}
          <Menu.Item
            on:click={() => {
              activeSidebarItem = item;
              router.redirect("/app/" + item.url);
              loadComponent(item.component);
            }}
            active={item.title === activeSidebarItem.title}
          >
            <span class="icon menu-item-icon font-size-lg">
              <Icon icon={item.icon} />
            </span>
            <span class="menu-title">
              {item.title}
            </span>
            <span class="icon menu-item-icon">
              <Icon icon="bi:arrow-right" />
            </span>
          </Menu.Item>
        {/each}
      </Menu>
      <div class="p:8 font-size mt:auto bt:1|solid|rgb($(gray-8))">
        <Flex align="center" justify="spaceBetween" gap="sm">
          <Flex align="center">
            <img
              src="https://picsum.photos/200"
              class="w:32 h:32 round"
              alt=""
            />
            <Flex direction="column" gap="0">
              <div class="f:semibold">Jenny Wilson</div>
              <div>Product Manager</div>
            </Flex>
          </Flex>
          <button class="button button-icon-only button-text">
            <span class="icon font-size-lg">
              <Icon icon="tabler:logout" />
            </span>
          </button>
        </Flex>
      </div>
    </Flex>
  </div>
  <div class="flex:1">
    <div class="flex flex-column gap:8 h:100%">
      <svelte:component
        this={currentComponent}
        title={activeSidebarItem.title}
        pageData={$appStore.sampleData[pageDataIndex][activeSidebarItem.url]}
        {params}
      />
    </div>
  </div>
</div>
