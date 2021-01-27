<script lang="ts">
  export let score: number = 5;
</script>

<main><input type="range" bind:value={score} min="1" max="10" /></main>

<style>
</style>
