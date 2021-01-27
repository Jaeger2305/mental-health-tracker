<script lang="ts">
  import type { BurnerConfig } from "../types";

  export let history: Array<BurnerConfig> = [];
</script>

<main>
  {#each history as burnerConfig}
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
