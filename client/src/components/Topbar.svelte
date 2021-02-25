<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let date;

  const dispatch = createEventDispatcher<{ save: boolean }>();
</script>

<main>
  <h1>{date.toLocaleDateString()}</h1>
  <div>
    <img src="/images/logo.svg" alt="Mental health header" class="logo" />
  </div>
  <div on:click={() => dispatch("save", true)}>
    <img src="/images/lock.svg" height="100" alt="save-icon" />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: space-around;
  }
  h1 {
    display: inline;
    margin-right: 10px;
  }

  .logo {
    height: 100%;
    width: 100%;
    object-fit: contain;
    max-height: 75px;
  }
  div {
    font-size: 60px;
  }
</style>
