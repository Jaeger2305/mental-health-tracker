<script lang="ts">
  import type { BurnerConfig } from "../types";

  export let history: Array<BurnerConfig>;

  $: displayBurners = history
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 7);
</script>

<main>
  {#each displayBurners as burnerConfig}
    <div>
      {burnerConfig.exercise +
        burnerConfig.sleep +
        burnerConfig.diet +
        burnerConfig.social}
    </div>
  {/each}
</main>

<style>
</style>
