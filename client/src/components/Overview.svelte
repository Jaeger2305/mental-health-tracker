<script lang="ts">
  import { fade } from "svelte/transition";
  import { v4 } from "uuid";
  import type { BurnerConfig } from "../types";

  import Burner from "./Burner.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Topbar from "./Topbar.svelte";

  function deserialiseBurnerConfig(
    serialisedBurnerConfig: string
  ): BurnerConfig {
    const burnerConfig = JSON.parse(serialisedBurnerConfig);
    burnerConfig.date = new Date(burnerConfig.date);
    return burnerConfig;
  }

  let history: Array<BurnerConfig> = Object.entries(localStorage)
    .filter(([key]) => key.substring(0, 8) == "burners-")
    .map(([, value]) => deserialiseBurnerConfig(value));

  let activeBurners = getRandomHistory();

  function getRandomHistory(): BurnerConfig {
    return {
      id: v4(),
      exercise: getRandomScore(),
      sleep: getRandomScore(),
      diet: getRandomScore(),
      social: getRandomScore(),
      date: new Date(),
    };
  }

  function getRandomScore() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function saveToHistory() {
    window.localStorage.setItem(
      `burners-${activeBurners.id}`,
      JSON.stringify(activeBurners)
    );
    const existingItemIndex = history.findIndex(
      ({ id }) => id === activeBurners.id
    );
    if (existingItemIndex > -1) {
      history.splice(existingItemIndex, 1);
    }
    history = [...history, activeBurners];
    activeBurners = getRandomHistory();
  }
</script>

<main transition:fade={{ duration: 2000 }}>
  <div class="grid">
    <div class="sidebar">
      <Sidebar
        {history}
        on:load-burners={({ detail: loadedBurners }) =>
          (activeBurners = loadedBurners)}
      />
    </div>
    <div class="topbar">
      <Topbar on:save={saveToHistory} date={activeBurners.date} />
    </div>
    <div class="burner1" transition:fade={{ duration: 1000 }}>
      <Burner bind:burner={activeBurners.exercise} burnerType="Exercise" />
    </div>
    <div class="burner2" transition:fade={{ duration: 1000, delay: 500 }}>
      <Burner bind:burner={activeBurners.sleep} burnerType="Sleep" />
    </div>
    <div class="burner3" transition:fade={{ duration: 1000, delay: 1000 }}>
      <Burner bind:burner={activeBurners.social} burnerType="Social" />
    </div>
    <div class="burner4" transition:fade={{ duration: 1000, delay: 1500 }}>
      <Burner bind:burner={activeBurners.diet} burnerType="Diet" />
    </div>
    <div class="stats" />
  </div>
</main>

<style>
  .grid {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 800px;
    display: grid;
    place-items: center;
    grid-template-columns: 90px auto;
    grid-template-rows: 40px auto auto 60px;
    column-gap: 5%;
    row-gap: 5%;
  }

  .topbar {
    grid-column: 1 / span 3;
    grid-row: 1;
    align-self: center;
    justify-self: flex-end;
  }

  .sidebar {
    grid-column: 1;
    grid-row: 2 / span 2;
  }

  .burner1 {
    grid-column: 2;
    grid-row: 2;
  }
  .burner2 {
    grid-column: 3;
    grid-row: 2;
  }
  .burner3 {
    grid-column: 2;
    grid-row: 3;
  }
  .burner4 {
    grid-column: 3;
    grid-row: 3;
  }
  .stats {
    grid-column: 1 / span 3;
    grid-row: 4;
  }
</style>
