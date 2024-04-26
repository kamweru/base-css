<script>
  import { collection } from "firebase/firestore";
  import { appStore } from "../lib/AppStore";
  import Icon from "@iconify/svelte";
  import { deleteDocument } from "../lib/firebase";
  export let section;
  export let index = 1;
  export let total = 1;
  let collapsed = false;
  const removeSection = () => {
      // let tempSection = { ...section };
      $appStore.questions = $appStore.questions.filter(
        (q) => q.sectionId !== section.id
      );
      $appStore.sections = $appStore.sections.filter(
        (s) => s.id !== section.id
      );
      $appStore.update.items = "sections";
      $appStore.update.updated = false;
      deleteDocument("sections", section.id, () => {
        console.log("section deleted");
      });
      // console.log(tempSection);
    },
    onChange = () => {
      appStore.updateData({
        collectionName: "sections",
        document: section,
        callback: (data) => {
          console.log(data);
        },
      });
    };
</script>

<div class="b:1|solid|rgb($(border)) r:5">
  <div class="flex ai:center jc:space-between p:7|11">
    <div>Section {index} of {total}</div>
    <div class="flex ai:center gap:8">
      <button class="$btn-bg:$(color-neutral) outline sm icon">
        <span class="lh:0">
          <Icon icon="mage:copy" class="f:18"></Icon>
        </span>
      </button>
      <button
        class="$btn-bg:$(color-neutral) outline sm icon"
        on:click={removeSection}
      >
        <span class="lh:0">
          <Icon icon="fluent:delete-28-regular" class="f:18"></Icon>
        </span>
      </button>
      <button
        class="$btn-bg:$(gray-8) outline sm icon"
        on:click={() => (collapsed = !collapsed)}
      >
        <span class="lh:0 chevron-down" class:active={!collapsed}>
          <Icon icon="fluent:chevron-down-24-filled" class="f:18"></Icon>
        </span>
      </button>
    </div>
  </div>
  {#if !collapsed}
    <div
      class="$card-bg:$(gray-1) $card-padding:$(size) p:7|11 bt:1|solid|rgb($(border))"
    >
      <!-- <Card> -->
      <div class="flex ai:center gap:16">
        <div class="control-group flex:1">
          <input
            type="text"
            name="title"
            id="title"
            class="underline lg"
            placeholder="Section title"
            bind:value={section.title}
            on:change={onChange}
          />
        </div>
        <!-- <div>
          <button
            class="$btn-bg:$(gray-8) outline sm icon"
            on:click={() => (collapsed = !collapsed)}
          >
            <span class="lh:0 {collapsed ? '' : 'rotate(180)'}">
              <Icon icon="fluent:chevron-down-24-filled" class="f:18"></Icon>
            </span>
          </button>
        </div> -->
      </div>
      <div class="pt:8 mt:8">
        <!-- <div class="control-group">
          <input
            type="text"
            name="title"
            id="title"
            class="underline lg"
            placeholder="Section title"
            bind:value={title}
          />
        </div> -->
        <div class="control-group">
          <input
            type="text"
            name="title"
            id="title"
            class="underline lg"
            placeholder="Section description (optional)"
            bind:value={section.description}
          />
        </div>
      </div>
      <!-- </Card> -->
    </div>
  {/if}
</div>
