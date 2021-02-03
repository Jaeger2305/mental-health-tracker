<script lang="ts">
  import { onMount } from "svelte";
  import Overview from "./Overview.svelte";
  import Splash from "./Splash.svelte";

  let isAcknowledged = false;
  onMount(() => {
    setTimeout(() => (isAcknowledged = true), 1000);
  });
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Gelasio"
    rel="stylesheet"
  />
</svelte:head>

<main>
  {#if isAcknowledged}
    <Overview />
  {:else}
    <Splash />
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
    height: 100vh;
    width: 100vw;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
