<script>
  import { formStore } from "../lib/AppStore";
  import Main from "../layout/Main.svelte";
  export let params;
  let MmuLogo = "https://f4.bcbits.com/img/0014753839_100.png";
  (() => {
    if (params && params.id) {
      formStore.loadForm(params.id);
    }
  })();
</script>

<Main>
  {#if $formStore.loading}
    <div class="h:100% flex ai:center jc:center">
      <span class="loader"></span>
    </div>
  {/if}
  <div class="shadow:$(shadow-10) h:100%">
    <div class="p:16 bg:rgb($(beige)) r:5" contenteditable="true">
      <div class="mb:8">
        <div
          class="mx:auto h:120 mb:8 aspect:1/1 p:20 bg:transparent|url({MmuLogo})|no-repeat|top|left/cover bg:url({MmuLogo})!"
        ></div>
      </div>
      <div class="mb:8 text:center flex flex:col gap:8">
        <h1 class="f:30">MAASAI MARA UNIVERSITY</h1>
        <h2>
          <div>OFFICE OF THE REGISTRAR</div>
          <div>(ACADEMIC AFFAIRS)</div>
        </h2>
        <h3>STUDENT’S PERSONAL DETAILS FORM</h3>
        <p class="f:16 text:justify t-balance">
          Information provided in this form is intended to assist the Office of
          the Registrar Academic to understand the student better. It will be
          used for the purposes of improving the student’s welfare while at the
          University.
        </p>
      </div>
    </div>
    {JSON.stringify($formStore, null, 2)}
  </div>
</Main>
