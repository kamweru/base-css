<script>
  import Main from "../layout/Main.svelte";
  import { onMount } from "svelte";
  import { queryCollection } from "../lib/firebase";
  import QuestionView from "../components/question/QuestionView.svelte";
  export let params;
  let loading = true,
    MmuLogo = "https://f4.bcbits.com/img/0014753839_100.png",
    sections,
    questions,
    conditions;
  onMount(() => {
    if (params && params.id) {
      queryCollection(
        "sections",
        { field: "formId", operator: "==", value: params.id },
        (data) => {
          sections = data;
          sections.sort((a, b) => a.placementOrder - b.placementOrder);
          queryCollection(
            "questions",
            { field: "formId", operator: "==", value: params.id },
            (data) => {
              questions = data;
              questions.sort((a, b) => a.placementOrder - b.placementOrder);
              queryCollection(
                "conditions",
                { field: "formId", operator: "==", value: params.id },
                (data) => {
                  conditions = data;
                  if (
                    sections.length > 0 &&
                    questions.length > 0 &&
                    conditions.length > 0
                  ) {
                    loading = false;
                  }
                }
              );
            }
          );
        }
      );
    }
  });
</script>

<Main height="100vh">
  {#if loading}
    <div class="h:100% flex ai:center jc:center">
      <span class="loader"></span>
    </div>
  {:else}
    <div class="shadow:$(shadow-10) h:100%">
      <div class="flex:1 flex flex:col p:4">
        <div class="p:16 bg:rgb($(beige)) r:5">
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
              Information provided in this form is intended to assist the Office
              of the Registrar Academic to understand the student better. It
              will be used for the purposes of improving the student’s welfare
              while at the University.
            </p>
          </div>
        </div>
        <div class="flex:1 flex flex:col gap:16">
          {#each sections as { title, description, id }}
            <div
              class=" p:7|11 flex flex:col gap:8 bb:1|solid|rgb($(border)) rel"
            >
              <h3 class="f:20">{title}</h3>
              {#if description}
                <p class="f:14">{description}</p>
              {/if}
            </div>
            <div class="flex:1 flex flex:col gap:16">
              {#each questions as question}
                {#if question.sectionId === id}
                  <QuestionView bind:question bind:questions bind:conditions />
                {/if}
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</Main>
