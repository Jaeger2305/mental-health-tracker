<script lang="ts">
  import { onMount } from "svelte";

  let isAcknowledged = false;
  onMount(() => {
    isAcknowledged = true;
  });
</script>

<main>
  <h1>Mental health</h1>
  <p>lorem ipsum</p>
  <h2>The burners</h2>
  <p>lorem ipsum</p>
  {#if isAcknowledged}
    <h2>This app</h2>
    <p>lorem ipsum</p>
  {/if}
</main>

<style>
</style>
