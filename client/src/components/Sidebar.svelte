<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { BurnerConfig } from "../types";

  export let history: Array<BurnerConfig>;

  $: displayBurners = history
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 7);

  const dispatch = createEventDispatcher<{
    "load-burners": BurnerConfig;
  }>();

  function loadConfig(burnerConfig: BurnerConfig) {
    dispatch("load-burners", burnerConfig);
  }
</script>

<main>
  {#each displayBurners as burnerConfig}
    <div on:click={() => loadConfig(burnerConfig)}>
      <span>
        {burnerConfig.exercise +
          burnerConfig.sleep +
          burnerConfig.diet +
          burnerConfig.social}
      </span>
    </div>
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
  }
  div {
    height: 80px;
    display: flex;
    align-items: center;
  }
</style>
