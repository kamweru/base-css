<script>
  import { appStore } from "../../AppStore";
  import Alert from "../../components/alert/Alert.svelte";
  export let currentComponent = "alert";
</script>

<!-- {JSON.stringify({
  ...$appStore.config.component[currentComponent].classProps.reduce(
    (acc, val) => ((acc[val.title] = val.value), acc),
    {}
  ),
})} -->
<Alert
  {...$appStore.config.component[currentComponent].classProps.reduce(
    (acc, val) => ((acc[val.title] = val.value), acc),
    {}
  )}
/>
