<script lang="ts">
  import type { BurnerConfig } from "../types";

  import Burner from "./Burner.svelte";
  import Sidebar from "./Sidebar.svelte";

  let history: Array<BurnerConfig> = [
    { exercise: 1, sleep: 7, diet: 5, social: 9, date: new Date() },
    { exercise: 3, sleep: 5, diet: 4, social: 8, date: new Date() },
  ];

  let activeBurners = getRandomHistory();

  function getRandomHistory(): BurnerConfig {
    return {
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
    history = [...history, activeBurners];
    activeBurners = getRandomHistory();
  }
</script>

<main>
  <div class="grid">
    <div class="sidebar">
      <Sidebar
        {history}
        on:load-burners={({ detail: loadedBurners }) =>
          (activeBurners = loadedBurners)}
      />
    </div>
    <div class="topbar" on:click={saveToHistory}>Save</div>
    <div class="burner1"><Burner bind:burner={activeBurners.exercise} /></div>
    <div class="burner2"><Burner bind:burner={activeBurners.sleep} /></div>
    <div class="burner3"><Burner bind:burner={activeBurners.social} /></div>
    <div class="burner4"><Burner bind:burner={activeBurners.diet} /></div>
    <div class="stats" />
  </div>
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
    grid-row: 1 / span 3;
    align-self: flex-start;
    justify-self: center;
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
