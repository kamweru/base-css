<script>
  import { createEventDispatcher } from "svelte";
  import router from "page";
  import { formatDate } from "../lib/utils";
  export let form;
  export let viewPath;
  const dispatch = createEventDispatcher(),
    changeView = () => {
      viewPath = "FormView";
      dispatch("changeView");
      router.redirect(`/admin/${form.id}`);
    };
</script>

<div class="flex flex:col b:1|solid|rgb($(border)) r:5">
  <a href="#" on:click|preventDefault={changeView}>
    <div class="flex p:8 h:120">
      <img
        src="https://f4.bcbits.com/img/0014753839_100.png"
        alt=""
        class="obj:cover min-w:full r:5"
      />
    </div>
    <div class="p:16">
      <div>{form.title}</div>
      <div class="color:rgb($(text-light)) f:14 mt:4">
        {formatDate(form.createdAt)}
      </div>
    </div>
    <div class="flex ai:center jc:space-between bt:1|solid|rgb($(border)) p:8">
      <div>
        <div class="color:rgb($(text-light))">Responses</div>
        <div class=" f:14">211</div>
      </div>
      <div>
        <div class="color:rgb($(text-light))">Completed</div>
        <div class=" f:14">211</div>
      </div>
    </div>
  </a>
</div>
