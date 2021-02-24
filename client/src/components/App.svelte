<script lang="ts">
  import { onMount } from "svelte";
  import Overview from "./Overview.svelte";
  import Splash from "./Splash.svelte";

  let isAcknowledged = false;
  let isLoaded = false;
  onMount(() => {
    isLoaded = true;
    setTimeout(() => (isAcknowledged = true), 60000);
  });
</script>

<main>
  {#if isAcknowledged}
    <Overview />
  {:else if isLoaded}
    <Splash on:acknowledge={() => (isAcknowledged = true)} />
  {/if}
</main>

<style>
  @font-face {
    font-family: "Architects Daughter", cursive;
    src: url("/fonts/ArchitectsDaughter-Regular.ttf") format("ttf");
  }

  :global(h1) {
    font-family: "Architects Daughter", cursive;
  }
  :global(body) {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  main {
    padding: 0px;
    display: flex;
    align-items: stretch;
    justify-content: center;
  }
</style>
