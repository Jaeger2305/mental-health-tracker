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
      <Burner bind:burner={activeBurners.exercise} burnerType="exercise" />
    </div>
    <div class="burner2" transition:fade={{ duration: 1000, delay: 500 }}>
      <Burner bind:burner={activeBurners.sleep} burnerType="sleep" />
    </div>
    <div class="burner3" transition:fade={{ duration: 1000, delay: 1000 }}>
      <Burner bind:burner={activeBurners.social} burnerType="social" />
    </div>
    <div class="burner4" transition:fade={{ duration: 1000, delay: 1500 }}>
      <Burner bind:burner={activeBurners.diet} burnerType="diet" />
    </div>
    <div class="stats" />
  </div>
</main>

<style>
  .grid {
    display: grid;
    place-items: stretch;
    grid-template-columns: 80px 1fr 1fr;
    grid-template-rows: 140px 1fr 1fr 60px;
    grid-template-areas:
      "topbar topbar topbar"
      "sidebar burner1 burner2"
      "sidebar burner3 burner4"
      "stats stats stats";
    column-gap: 4%;
    row-gap: 4%;
  }

  @media only screen and (max-width: 600px) {
    .grid {
      grid-template-columns: 80px 1fr;
      grid-template-rows: 140px 1fr 1fr 1fr 1fr 60px;
      grid-template-areas:
        "topbar topbar"
        "sidebar  burner1"
        "sidebar  burner2"
        "sidebar  burner3"
        "sidebar  burner4"
        "stats stats";
    }
  }

  .topbar {
    grid-area: topbar;
    align-self: center;
    justify-self: flex-end;
  }

  .sidebar {
    grid-area: sidebar;
    place-self: center;
  }

  .burner1 {
    grid-area: burner1;
  }
  .burner2 {
    grid-area: burner2;
  }
  .burner3 {
    grid-area: burner3;
  }
  .burner4 {
    grid-area: burner4;
  }
  .stats {
    grid-area: stats;
  }
</style>
