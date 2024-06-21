<script>
  import { appStore } from "../../AppStore";
  import "../styles/breadcrumb.css";
  export let currentComponent;
  let breadcrumbs = [
    {
      title: "Home",
    },
    {
      title: "Application Center",
    },
    {
      title: "Application List",
    },
    {
      title: "An Application",
    },
  ];
</script>

<nav class={$appStore.properties[currentComponent]["classes"]}>
  <ol>
    {#each breadcrumbs as breadcrumb}
      <li>
        <span class="breadcrumb-link">
          {#if breadcrumb.title === breadcrumbs[breadcrumbs.length - 1].title}
            {breadcrumb.title}
          {:else}
            <a href="#">{breadcrumb.title}</a>
          {/if}
        </span>
      </li>
      {#if breadcrumb.title !== breadcrumbs[breadcrumbs.length - 1].title}
        <li><span class="breadcrumb-separator">/</span></li>
      {/if}
    {/each}
  </ol>
</nav>
