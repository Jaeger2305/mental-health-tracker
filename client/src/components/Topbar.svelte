<script lang="ts">
  import Icon from "fa-svelte";
  import { faSave } from "@fortawesome/free-solid-svg-icons/faSave";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ save: boolean }>();
</script>

<main>
  <h1>Mental Health</h1>
  <div on:click={() => dispatch("save", true)}>
    <Icon icon={faSave} on:click={() => dispatch("save", true)} />
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
