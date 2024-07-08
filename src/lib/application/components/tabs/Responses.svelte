<script>
  import Icon from "@iconify/svelte";
  import Flex from "../../../components/flex/Flex.svelte";
</script>

<div class="padding border border-rounded-lg bg:white">
  <Flex justify="spaceBetween" align="center">
    <h4>Responses</h4>
    <Flex align="center">
      <button class="button button-icon-only button-outline button-sm">
        <span class="button-icon">
          <span class="icon">
            <Icon icon="charm:chevron-left"></Icon>
          </span>
        </span>
      </button>
      <Flex>
        <span>1</span>
        <span>of</span>
        <span>1</span>
      </Flex>
      <button class="button button-icon-only button-outline button-sm">
        <span class="button-icon">
          <span class="icon">
            <Icon icon="charm:chevron-right"></Icon>
          </span>
        </span>
      </button>
    </Flex>
  </Flex>
</div>
