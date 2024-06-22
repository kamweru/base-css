<script>
  import Popover from "../popover/Popover.svelte";
  import "../styles/menu.css";
  import Icon from "@iconify/svelte";
  let menuitems = [
      {
        label: "Navigation One",
        key: "mail",
        icon: "akar-icons:home",
      },
      {
        label: "Navigation Two",
        key: "app",
        icon: "akar-icons:home",
        disabled: true,
      },
      {
        label: "Navigation Three - Submenu",
        key: "SubMenu",
        icon: "akar-icons:home",
        children: [
          {
            type: "group",
            label: "Item 1",
            children: [
              {
                label: "Option 1",
                key: "setting:1",
              },
              {
                label: "Option 2",
                key: "setting:2",
              },
            ],
          },
          {
            type: "group",
            label: "Item 2",
            children: [
              {
                label: "Option 3",
                key: "setting:3",
              },
              {
                label: "Option 4",
                key: "setting:4",
              },
            ],
          },
        ],
      },
      {
        key: "alipay",
        label: "Navigation Four - Link",
      },
    ],
    open = false;
</script>

<menu class="menu menu-horizontal">
  {#each menuitems as item}
    {#if item.children}
      <li
        class="menu-item"
        class:active={item.key === "mail"}
        on:mouseenter={() => (open = true)}
        on:mouseleave={() => (open = false)}
      >
        {#if item.icon}
          <span class="icon menu-item-icon">
            <Icon icon={item.icon} />
          </span>
        {/if}
        <span>{item.label}</span>
        <Popover matchWidth={true} bind:open>
          <menu class="menu-submenu menu-submenu-horizontal">
            {#each item.children as child}
              {#if child.type === "group"}
                <li class="menu-item-group">
                  <div class="menu-group-title">{child.label}</div>
                  <menu class="menu-group-list">
                    {#each child.children as subchild}
                      <li class="menu-item">{subchild.label}</li>
                    {/each}
                  </menu>
                </li>
              {:else}
                <li class="menu-item">{child.label}</li>
              {/if}
            {/each}
          </menu>
        </Popover>
      </li>
    {:else}
      <li class="menu-item" class:active={item.key === "mail"}>
        {#if item.icon}
          <span class="icon menu-item-icon">
            <Icon icon={item.icon} />
          </span>
        {/if}
        <span>{item.label}</span>
      </li>
    {/if}
  {/each}
</menu>
