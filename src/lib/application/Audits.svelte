<script>
  import { fade } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import Card from "../components/card/Card.svelte";
  import Flex from "../components/flex/Flex.svelte";
  import Table from "../components/table/Table.svelte";
  export let title, pageData, params;
  let newAudit = {
    title: "QMS BASED ON ISO 9001:2015",
    subtitle: "Internal audit plan",
    details: {
      columns: [
        {
          title: "Aspect",
          key: "title",
        },
        {
          title: "Details",
          key: "details",
        },
      ],
      rows: [
        {
          title: "Divisions to be audited",
          details:
            "Academic & student affairs and administration finance and strategy",
        },
        {
          title: "Type of audit",
          details: "Internal audit",
        },
        {
          title: "Audit number",
          details: "PC & QMS/02/FY 2023-2024",
        },
        {
          title: "Date of Notification",
          details: "10/07/2021",
        },
        {
          title: "Date of Audit",
          details: "10/07/2021",
        },
        {
          title: "Objectives",
          details: [
            "Determination of extent of conformity of QMS to Audit Criteria",
            "Evaluation of the capability of QMS to ensure compliance with Statutory, regulatory or contractual requirements",
            "Evaluation of effectiveness of QMS in meeting requirements",
            "Identification of areas of improvements.",
          ],
        },
        {
          title: "Scope of Audit",
          details:
            "Teaching, Research, Consultancy and Community Service for Sustainable Development.",
        },
        {
          title: "Audit Criteria",
          details: [
            "ISO: 9001:2015 Standard",
            "MMU QMS Documentation",
            "Applicable Legal Regulatory and Contractual Requirements.",
          ],
        },
        {
          title: "Team",
          details: [
            "Mr. Moses Okombo -Lead Auditor",
            "Prof. Wycliffe Wanzala -Auditor",
            "Dr. Alexander Meitamei -Auditor",
            "Ms. Stellah Chesseto -Auditor",
          ],
        },
      ],
    },
  };
</script>

{#if title === "Audits"}
  <div class="bg:rgb($(gray-1)) r:16 p:16" transition:fade={{ duration: 150 }}>
    <h3>{title}</h3>
  </div>
  <div class="bg:rgb($(gray-1)) r:16 p:16 flex:1 overflow-y:scroll">
    <Table columns={newAudit.details.columns} data={newAudit.details.rows}
    ></Table>
    {#each Object.keys(newAudit) as auditKey}
      {#if auditKey === "details"}
        <div class="grid grid-cols:6">
          {#each newAudit[auditKey].columns as column}
            <div
              class="b:1|solid|red padding-sm {column.key === 'title'
                ? 'grid-col-span:1'
                : 'grid-col-span:5'}"
            >
              {column.title}
            </div>
          {/each}
          {#each newAudit[auditKey].rows as row}
            {#each newAudit[auditKey].columns as column}
              <div
                class="b:1|solid|red padding-sm {column.key === 'title'
                  ? 'grid-col-span:1'
                  : 'grid-col-span:5'}"
              >
                {#if Array.isArray(row[column.key])}
                  {#each row[column.key] as item, i}
                    <p class="padding-block-sm">{i + 1}. {item}</p>
                  {/each}
                {:else}
                  {row[column.key]}
                {/if}
              </div>
            {/each}
          {/each}
        </div>
      {:else}
        <div class="padding-sm text:center">
          {newAudit[auditKey]}
        </div>
      {/if}
    {/each}
    <Flex wrap={true} gap="sm">
      {#each Object.values(pageData) as audit}
        <div class="col-4">
          <Card>
            <div slot="content">
              <Flex justify="spaceBetween">
                <div>{audit.title}</div>
                <span class="icon font-size-lg">
                  <Icon icon="fluent:arrow-up-right-24-regular"></Icon>
                </span>
              </Flex>
              <div>{audit.description}</div>
              <a href={`/app/audits/${audit.id}`}
                ><span class="abs inset:0"></span>
              </a>
            </div>
          </Card>
        </div>
      {/each}
    </Flex>
  </div>
{/if}
