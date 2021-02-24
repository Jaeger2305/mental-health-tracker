<script lang="ts">
  import Icon from "fa-svelte";
  import { faSave } from "@fortawesome/free-solid-svg-icons/faSave";
  import { createEventDispatcher } from "svelte";

  export let date;

  const dispatch = createEventDispatcher<{ save: boolean }>();
</script>

<main>
  <h1>{date.toLocaleDateString()}</h1>
  <h1>
    <img src="images/logo.svg" alt="Mental health header" height="75rem" />
  </h1>
  <div on:click={() => dispatch("save", true)}>
    <img src="images/lock.svg" height="100" alt="save-icon" />
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: space-around;
  }
  h1 {
    display: inline;
    margin-right: 30px;
  }
  div {
    font-size: 60px;
  }
</style>
