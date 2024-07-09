<script>
  import "../../../../components/styles/prosemirror.css";
  import { onMount, onDestroy } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import Highlight from "@tiptap/extension-highlight";
  import TextAlign from "@tiptap/extension-text-align";
  import Image from "@tiptap/extension-image";
  import Icon from "@iconify/svelte";
  import Flex from "../../../../components/flex/Flex.svelte";
  let editor,
    editingBox,
    buttons = [
      {
        title: "bold",
        icon: "mingcute:bold-fill",
        action: () => editor.chain().focus().toggleBold().run(),
      },
      {
        title: "italic",
        icon: "mingcute:italic-fill",
        action: () => editor.chain().focus().toggleItalic().run(),
      },
      {
        title: "Heading 1",
        icon: "ci:heading-h1",
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      },
      {
        title: "Heading 2",
        icon: "ci:heading-h2",
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      },
      {
        title: "Heading 3",
        icon: "ci:heading-h3",
        action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      },
      {
        title: "paragraph",
        icon: "mingcute:paragraph-line",
        action: () => editor.chain().focus().setParagraph().run(),
      },
      {
        title: "text left",
        icon: "mingcute:align-left-line",
        action: () => editor.chain().focus().setTextAlign("left").run(),
      },
      {
        title: "text center",
        icon: "ic:round-format-align-center",
        action: () => editor.chain().focus().setTextAlign("center").run(),
      },
      {
        title: "text right",
        icon: "mingcute:align-right-line",
        action: () => editor.chain().focus().setTextAlign("right").run(),
      },
      {
        title: "text justify",
        icon: "majesticons:text-align-justify",
        action: () => editor.chain().focus().setTextAlign("justify").run(),
      },
      {
        title: "bullet list",
        icon: "fluent:text-bullet-list-24-regular",
        action: () => editor.chain().focus().toggleBulletList().run(),
      },
      {
        title: "ordered list",
        icon: "mingcute:list-ordered-line",
        action: () => editor.chain().focus().toggleOrderedList().run(),
      },
      {
        title: "Insert Image",
        icon: "material-symbols:image-outline",
        // action: () => openModal("UploadAndInsertMedia"),
      },
      {
        title: "Hard break",
        icon: "ic:round-wrap-text",
        action: () => editor.chain().focus().setHardBreak().run(),
      },
      {
        title: "Clear Format",
        icon: "ic:round-format-clear",
        action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
      },
      {
        title: "undo",
        icon: "majesticons:undo",
        action: () => editor.chain().focus().undo().run(),
      },
      {
        title: "redo",
        icon: "majesticons:redo",
        action: () => editor.chain().focus().redo().run(),
      },
    ];
  const loadEditor = () => {
    editor = new Editor({
      element: editingBox,
      extensions: [
        StarterKit,
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        Image.configure({
          inline: true,
          HTMLAttributes: {
            class: "object:cover mx:auto h:150 square",
          },
        }),
        Highlight,
      ],
      content: `<p>this is a paragraph <span class="bg:yellow">with a span</span></p>`,
      onTransaction: () => {
        editor = editor;
        // console.log("onTransaction", contentObj);
      },
      onUpdate({ editor }) {
        // console.log("onUpdate", contentObj);
        //   contentObj.content = editor.getHTML();
        //   dispatch("updateContent", contentObj);
      },
    });
  };
  onMount(() => {
    loadEditor();
  });

  onDestroy(() => {
    editor.destroy();
  });
</script>

<Flex direction="column" gap="sm">
  {#if editor}
    <div class="padding-inline-sm padding-block-xs">
      <Flex wrap={true}>
        {#each buttons as button}
          <button
            class="button button-outline button-icon-only button-sm"
            on:click={() => button.action()}
          >
            <span class="button-icon">
              <span class="icon">
                <Icon icon={button.icon}></Icon>
              </span>
            </span>
          </button>
        {/each}
      </Flex>
    </div>
  {/if}
  <div bind:this={editingBox}></div>
</Flex>
