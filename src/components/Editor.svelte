<!-- <script>
  const handleClick = () => {
    document.exe;
  };
</script>

<div class=" p:16">
  <div class="flex p:16">
    <button
      class="bg:indigo bg:indigo-54:hover bg:indigo-58:active outline:indigo-80|3|solid:focus ~outline-width|.1s px:18 h:40 f:14 f:semibold f:white r:4 inline-flex align-items:center"
      >Submit</button
    >
  </div>
  <div
    class="b:1|solid|gray-90 h:calc(100vh-600px)"
    contenteditable="true"
  ></div>
</div> -->
<script>
  import { onMount } from "svelte";
  let content = "<p>This is a simple rich text editor.</p>";
  let editor;

  onMount(() => {
    editor = document.getElementById("editor");
    editor.innerHTML = content;
  });

  // Define an object to store the format states
  let formats = {
      bold: false,
      italic: false,
      underline: false,
    },
    spanClasses = {
      bold: "f:semibold color:red",
      italic: "color:blue",
      underline: "color:green",
    };

  function format(tag) {
    let selection = window.getSelection();
    const selectedNode = selection.anchorNode.parentNode; // Get first parent element
    console.log(selection, selectedNode);
    const hasFormat = selectedNode.classList.contains(format);
    if (hasFormat) {
      selectedNode.classList.remove(format);
    } else {
      if (selection.rangeCount) {
        let range = selection.getRangeAt(0);
        let span = document.createElement("span");
        span.className = spanClasses[tag];
        span.appendChild(range.extractContents());
        range.insertNode(span);
        // Toggle the format state
        formats[tag] = !formats[tag];
      }
    }
  }

  function update() {
    content = editor.innerHTML;
  }
</script>

<div id="editor" contenteditable="true" on:input={update}></div>

<!-- Use the format states to change the button styles -->
<button on:click={() => format("bold")} class:active={formats.bold}>Bold</button
>
<button on:click={() => format("italic")} class:active={formats.italic}
  >Italic</button
>
<button on:click={() => format("underline")} class:active={formats.underline}
  >Underline</button
>

<style>
  #editor {
    border: 1px solid black;
    padding: 10px;
    min-height: 200px;
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .underline {
    text-decoration: underline;
  }
</style>
